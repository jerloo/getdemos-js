// ../GetDemoApi/GetDemoApi/Models/BindTesterModel.cs
export interface BindTesterModel {
  code: string
}

// ../GetDemoApi/GetDemoApi/Models/MediaFile.cs
export interface MediaFile {
  iD: number
  mediaType: MediaType
  uri: string
  height: number
  width: number
  timestamp: number
  latitude: string
  longitude: string
  fileSize: number
  visible: boolean
  user: User
  userID: number
  createAt: string
}

// ../GetDemoApi/GetDemoApi/Models/MediaFile.cs
export enum MediaType {
  Image = 'Image',
  Video = 'Video'
}

// ../GetDemoApi/GetDemoApi/Models/ArticleTag.cs
export interface ArticleTag {
  iD: number
  tagID: number
  tag: Tag
  articleID: number
  article: Article
  createAt: string
  updateAt: string
}

// ../GetDemoApi/GetDemoApi/Models/LoginModel.cs
export interface LoginModel {
  username: string
  password: string
}

// ../GetDemoApi/GetDemoApi/Models/SshItem.cs
export interface SshItem {
  host: string
  hostName: string
  port: number
  user: string
  identityFile: string
  identitiesOnly: boolean
  preferredAuthentications: string
}

// ../GetDemoApi/GetDemoApi/Models/ArticleMediaFile.cs
export interface ArticleMediaFile {
  iD: number
  articleID: number
  article: Article
  mediaFileID: number
  mediaFile: MediaFile
  createAt: string
  updateAt: string
}

// ../GetDemoApi/GetDemoApi/Models/UserModel.cs
export interface UserModel {
  name: string
}

// ../GetDemoApi/GetDemoApi/Models/AppRelease.cs
export interface AppRelease {
  iD: number
  version: string
  notes: string
  createAt: string
  visible: boolean
  apkUrl: string
  appID: number
  app: App
}

// ../GetDemoApi/GetDemoApi/Models/User.cs
export interface User {
  iD: number
  userName: string
  phone: string
  email: string
}

// ../GetDemoApi/GetDemoApi/Models/ApiMessage.cs
export interface ApiMessage {
  code: number
  msg: string
  ok: boolean
  data: any
}

// ../GetDemoApi/GetDemoApi/Models/AppTesterMap.cs
export interface AppTesterMap {
  iD: number
  userID: number
  user: User
  appID: number
  app: App
}

// ../GetDemoApi/GetDemoApi/Models/Pagination.cs
export interface Pagination<T> {
  pageIndex: number
  totalPages: number
  items: T[]
  hasPreviousPage: boolean
  hasNextPage: boolean
}

// ../GetDemoApi/GetDemoApi/Models/AppReleaseModel.cs
export interface AppReleaseModel {
  iD: number
  version: string
  notes: string
  visible: boolean
  apkUrl: string
  appID: number
  appName: string
  override: boolean
}

// ../GetDemoApi/GetDemoApi/Models/Tag.cs
export interface Tag {
  iD: number
  name: string
  title: string
  description: string
  createAt: string
  updateAt: string
}

// ../GetDemoApi/GetDemoApi/Models/Article.cs
export interface Article {
  iD: number
  title: string
  description: string
  content: string
  createAt: string
  updateAt: string
  tags: ArticleTag[]
  mediaFiles: ArticleMediaFile[]
}

// ../GetDemoApi/GetDemoApi/Models/AppInvitation.cs
export interface AppInvitation {
  iD: number
  code: string
  userID: number
  user: User
  appID: number
  app: App
}

// ../GetDemoApi/GetDemoApi/Models/App.cs
export interface App {
  iD: number
  appType: AppType
  name: string
  title: string
  description: string
  icon: string
  packageName: string
  createAt: string
  updateAt: string
  userID: number
  user: User
  releases: AppRelease[]
}

// ../GetDemoApi/GetDemoApi/Models/App.cs
export enum AppType {
  Android = 'Android',
  iOS = 'iOS',
  ReactNative = 'ReactNative'
}
