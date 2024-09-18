import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // CURD for database
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabase,
        conf.appWriteColletionId,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.log("Appwrite Error : CreatePost Error");
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabase,
        conf.appWriteColletionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (err) {
      console.log("Appwrite Error : UpdatePost Error");
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabase,
        conf.appWriteColletionId,
        slug
      );
      return true;
    } catch (err) {
      console.log("Appwrite Error : DeletePost Error");
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabase,
        conf.appWriteColletionId,
        slug
      );
    } catch (err) {
      console.log("Appwrite Error : GetPost Error");
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabase,
        conf.appWriteColletionId,
        queries
      );
    } catch (err) {
      console.log("Appwrite Error : GetPosts Error");
      return false;
    }
  }

  // File upload, delete
  async uplodeFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (err) {
      console.log("Appwrite Error : UplodeFile Error");
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.createFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (err) {
      console.log("Appwrite Error : DeleteFile Error");
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
