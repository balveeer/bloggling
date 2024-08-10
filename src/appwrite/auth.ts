import conf from "../conf/conf.js";
import { Client, Account, ID, OAuthProvider } from "appwrite";
import store from "../store/store.js";
import { setUser } from "../store/authSlice.js";
interface User {
  email: string;
  password: string;
  name?: string;
}

const client: any = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const account = new Account(client);

async function createAccount({ email, password, name }: User) {
  try {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      return login({ email, password });
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}

async function login({ email, password }: User) {
  try {
    const response: any = await account.createEmailPasswordSession(
      email,
      password
    );
    if (response) {
      getCurrentUser();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}

async function googleLogin() {
  try {
    const response: any = account.createOAuth2Session(
      OAuthProvider.Google,
      "https://bloggling.netlify.app",
      "https://bloggling.netlify.app/not-found"
    );
    if (response) {
      getCurrentUser();
    }
  } catch (error) {
    console.error("OAuth error:", error);
  }
}

async function getCurrentUser() {
  if (account) {
    try {
      // Check if user is logged in (replace with your logic to check session ID or JWT)
      const user: any = await account.get();
      if (user) {
        store.dispatch(setUser(user));
        return true;
      } else {
        return null; // Or redirect to login or provide guest information
      }
    } catch (error) {
      return null
    }
  }
}

async function logout() {
  try {
    await account.deleteSessions();
  } catch (error) {
    // console.log("Appwrite service :: logout :: error", error);
  }
}

async function emailVerification() {
  try {
    const verification = await account.createVerification(
      "https://bloggling.netlify.app/verify-email"
    );
    return verification;
  } catch (error) {
    throw error
    // console.log("Appwrite service :: createEmailVerification :: error", error);
  }
}

async function updateEmailverification(userId: string, secret: string) {
  try {
    const verification = await account.updateVerification(userId, secret);
    return verification;
  } catch (error) {
    return false;
    // console.log("Appwrite service :: updateEmailVerification :: error", error);
  }
}

async function resetPassword(
  Email: string,
  url = "https://bloggling.netlify.app/reset-password"
) {
  try {
    const response = await account.createRecovery(Email, url);
    if (response) return true;
  } catch (error) {
    return false;
  }
}

async function updateResetPassword(
  userId: string,
  secret: string,
  password: string
) {
  try {
    const response = await account.updateRecovery(userId, secret, password);
    if (response) return true;
  } catch (error) {
    return false;
  }
}

export {
  createAccount,
  login,
  googleLogin,
  logout,
  getCurrentUser,
  emailVerification,
  updateEmailverification,
  resetPassword,
  updateResetPassword,
};
