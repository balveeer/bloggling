import { createSlice } from "@reduxjs/toolkit";
import {PostType}  from "../components/index.ts"
import { RootState } from "./store.ts";

interface PostsType{
    posts:PostType[]
}
const initialState:PostsType | [] ={
    posts:[],
}
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{
        setPosts:(state,action)=>{
          state.posts = action.payload.map((post:any)=>{return {...post}})
        },
        updateSave:(state,action)=>{
          const { saves,id} = action.payload;
          let index = state.posts.findIndex(post=> post.$id == id);
          state.posts[index] = {...state.posts[index],saves}
        },
        updateViews:(state,action)=>{
          console.log(action.payload)
          const {views,id} = action.payload;
          let index = state.posts.findIndex(post=> post.$id == id);
          state.posts[index] = {...state.posts[index],views}
        }
    }
});

export const {setPosts,updateSave,updateViews} = postSlice.actions;

// export const { addPost, updatePost, deletePost, getPosts, getLikes, updateLike} =  postSlice.actions;
export const selectPosts = (state:RootState) => state.posts.posts;
// export const selectCollections = (state: RootState) => state.posts.collections;
// export const selectLikes = (state: RootState) => state.posts.likes;

export default postSlice.reducer