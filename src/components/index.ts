import LogoutBtn from "./LogoutBtn";
import Logo from "./Logo";
import Header from "./Header";
import Footer from "./Footer";
import PostCard from "./PostCard";
import Input from "./Input"
import PostForm from "./PostForm";
import RTE from "./RTE";
import Categories from "./Categories";
import Category from "./Category";
import PostsContainer from "./PostsContainer";
import Modal from "./Modal";
import Load from "./Load"
import InstallBtn from "./InstallBtn";
export interface PostType{
    $collectionId?: string;
    $createdAt: string;
    $databaseId?: string;
    $id: string;
    $permissions?: string[];
    $updatedAt?: string;
    title: string;
    slug: string;
    content: string;
    author:string;
    category: string[];
    image:string;
    userId:string;
    saves:string[];
    views?:number;
    subject?:string
  }
  
export interface NavItemsType {
  name: string;
  slug: string;
  active: boolean;
  icon?:React.FC<React.SVGProps<SVGSVGElement>>
}
  export interface UserType {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    accessedAt: string;
    email: string;
    emailVerification: boolean;
    labels: string[];
    mfa: boolean;
    name: string;
    password:string,
    passwordUpdate: string;
    phone: string;
    phoneVerification: boolean;
    prefs: Record<string, unknown>;
    registration: string;
    status: boolean;
    targets: string[];
  }
export {
    LogoutBtn,
    Logo,
    Header,
    Footer,
    Modal,
    PostCard,
    Input,
    PostForm,
    RTE,
    Categories,
    Category,
    PostsContainer,
    Load,
    InstallBtn
}
export declare enum OAuthProvider {
  Amazon = "amazon",
  Apple = "apple",
  Auth0 = "auth0",
  Authentik = "authentik",
  Autodesk = "autodesk",
  Bitbucket = "bitbucket",
  Bitly = "bitly",
  Box = "box",
  Dailymotion = "dailymotion",
  Discord = "discord",
  Disqus = "disqus",
  Dropbox = "dropbox",
  Etsy = "etsy",
  Facebook = "facebook",
  Github = "github",
  Gitlab = "gitlab",
  Google = "google",
  Linkedin = "linkedin",
  Microsoft = "microsoft",
  Notion = "notion",
  Oidc = "oidc",
  Okta = "okta",
  Paypal = "paypal",
  PaypalSandbox = "paypalSandbox",
  Podio = "podio",
  Salesforce = "salesforce",
  Slack = "slack",
  Spotify = "spotify",
  Stripe = "stripe",
  Tradeshift = "tradeshift",
  TradeshiftBox = "tradeshiftBox",
  Twitch = "twitch",
  Wordpress = "wordpress",
  Yahoo = "yahoo",
  Yammer = "yammer",
  Yandex = "yandex",
  Zoho = "zoho",
  Zoom = "zoom",
  Mock = "mock"
}
