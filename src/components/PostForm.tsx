import { useState, useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Input, RTE, Categories } from "./index.js";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks.js";
import { userData } from "../store/authSlice.js";
import {createPost, updatePost, uploadFile,deleteFile,getFilePreview, getPosts } from "../appwrite/config.js";
export default function PostForm({post}:any) {

  const [limit, setLimit] = useState(0);
  const [image,setImage] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        category:post?.category || "",
      },
    });
  const ref = useRef();
  const navigate = useNavigate();
  const user = useAppSelector(userData)
  const submit = async (data:any) => {
    if (post) {
      if (photo) {
        deleteFile(post?.imageRequired);
        const fileId :any = await uploadFile(photo);
        // console.log("submit fileId",fileId)
        data.imageRequired = fileId?.$id;
        data.saves = [user?.$id]
      }
        console.log('data', data)
        const dbPost = await updatePost(post.$id,data);
        if (dbPost) navigate(`/post/${dbPost.$id}`);
        getPosts();
    } else {
      if(photo){
        const file = await uploadFile(photo);
        if (file) {
          data.imageRequired = file.$id;
          let userId = user?.$id;
          const dbPost = await createPost(data, userId, user.name);
          if (dbPost) navigate(`/post/${dbPost.$id}`)
          getPosts();
        }
      }
      else{setMessage("add image")}
    }
  };

  const slugTransform = useCallback((value:string) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-").slice(0,32);
    return "";
  }, []);

  useEffect(() => {
    if (post) {
    //@ts-ignore
      setImage(getFilePreview(post.imageRequired));
    }
  }, []);

  const handleFileChange = async (file:any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        //@ts-ignore
        setImage(reader.result );
      }
      reader.readAsDataURL(file.target.files[0]);
      setPhoto(file.target.files[0]);
  };

  const handleCatChange=(selectedCat:string[])=>{
    setValue("category",selectedCat)
  }

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap py-8">
      {message&&<span className="w-full p-4 m-4 text-xl bg-white dark:bg-black text-red-600 dark:text-red-600 ring-2 ring-purple-400 dark:ring-purple-300 text-center rounded-full ">{message}
      </span>}
      <div className="w-full md:w-2/3 px-2">
        <Input
          label="Title "
          placeholder=""
          className="mb-4"
          limit={limit}
          {...register(
            "title",
            {
              onChange: (e) => {
                setLimit(e.target.value.length);
              },
            }
          )}
        />
        <Input
          label="Slug "
          placeholder=""
          readOnly
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e:any) => {
            setValue("slug", slugTransform(e.currentTarget.value));
          }}
        />
        
      <div className="w-full md:hidden">
        <Input
          label="Image "
          placeholder="image..."
          type="file"
          className="mb-4 md:hidden"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          onChange={handleFileChange}
        />
      <div className="w-full">
          <img
          //@ts-ignore
           src={image} className="rounded-lg" />
        </div>
      </div>
      <Categories {...register("category")} defaultValue={getValues("category")} className="md:hidden" ref={ref} onCatChange={handleCatChange} />
        <RTE
          label="Content "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="hidden md:block w-1/3 px-2">
        <Input
          label="Image"
          type="file"
          className="mb-4 hidden md:block"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          onChange={handleFileChange}
        />
        <div className="w-full">
          <img
          //@ts-ignore
           src={image}
           className="rounded-lg" />
        </div>
        <Categories {...register("category")} className="hidden md:block" ref={ref} onCatChange={handleCatChange} defaultValue = {post?.category} />
        <button
          type="submit"
          className="hidden md:block w-full rounded-lg bg-green-500 hover:bg-green-600 py-2 px-4 font-semibold text-white"
        >
          {post ? "Update Post" : "Create Post"}
        </button>
      </div>
        
      <button
          type="submit"
          className="md:hidden w-full rounded-lg bg-green-500 hover:bg-green-600 py-2 px-4 font-semibold text-white m-2"
        >
          {post ? "Update Post" : "Create Post"}
        </button>
    </form>
    
  );
}