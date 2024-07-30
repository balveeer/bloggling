import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf";
import store from "../store/store";
import { setPosts } from "../store/postSlice";

export interface Post {
  title: string;
  slug: string;
  content: string;
  category?: string[];
  imageRequired: string;
  status: boolean;
  author?: string;
  saves: string[];
  views:number;
}
const client: any = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const databases = new Databases(client);
const storage = new Storage(client);

async function createPost(
  { title, slug, content, category, imageRequired, status, saves }: Post,
  userId: string,
  author: string
) {
  try {
    return await databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,
        content,
        category,
        imageRequired,
        status,
        userId,
        author,
        saves,
      }
    );
  } catch (error) {
    console.log("appwrite service error: createPost:: ", error);
  }
}

async function updatePost(
  slug: string,
  { title, author, content, category, imageRequired, saves,views=6 }: Post
) {
  // console.log(views, title, author , content, category, imageRequired,saves)
  try {
    return await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,
        author,
        content,
        imageRequired,
        category,
        saves,
        views
      }
    );
  } catch (error) {
    // console.log("appwrite service error: createPost:: ", error);
  }
}

async function deletePost(slug: string) {
  try {
    await databases.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
    return true;
  } catch (error) {
    // console.log("Appwrite service :: deletePost :: error", error);
    return false;
  }
}
async function getPost(slug: string) {
  try {
    return await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
  } catch (error) {
    // console.log("Appwrite service :: getPost :: error", error);
    return false;
  }
}

async function getPosts(queries: undefined | string[] = undefined) {
  try {
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      queries
    );
    store.dispatch(setPosts(response.documents));
  } catch (error) {
    // console.log("Appwrite service :: getPosts :: error", error);
    return false;
  }
}

async function uploadFile(file: any) {
  try {
    return await storage.createFile(conf.appwriteBucketId, ID.unique(), file);
  } catch (error) {
    // console.log("Appwrite service :: uploadFile :: error", error);
    return false;
  }
}

async function deleteFile(fileId: string) {
  try {
      await storage.deleteFile(
      String(conf.appwriteBucketId),
      String(fileId)
    );
    return true;
  } catch (error) {
    // console.log("Appwrite service :: deleteFile :: error", error);
    return false;
  }
}

function getFilePreview(fileId: string,) {
  return storage.getFilePreview(conf.appwriteBucketId, fileId)+"&output=webp"
}

export {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  uploadFile,
  deleteFile,
  getFilePreview,
};
