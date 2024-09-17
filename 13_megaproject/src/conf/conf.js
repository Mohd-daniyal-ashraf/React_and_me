const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_UR),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabase: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteColletionId: String(import.meta.env.VITE_APPWRITE_COLLETION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
