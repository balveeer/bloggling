import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
function RTE({ name, control, label, defaultValue = "" }:any) {
  return (
    <div className="w-full dark:text-white">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="7mq070tbh033kcrii8wjlpo6h8s20ppuw3s3ytndakay8u5u"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                skin: 'oxide-dark',
                content_css: "tinymce-5-dark"
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
