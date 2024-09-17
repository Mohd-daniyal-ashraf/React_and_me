import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      throw err;
    }
  }

  async getCurrentuser() {
    try {
      return this.account.get();
    } catch (err) {
      console.log("Appwrite Error :: getgetCurrentuser error", err);
    }
    return null;
  }

  async loout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      console.log("Appwrite Error : logout error", err);
    }
  }
}

const authService = new AuthService();
export default authService;
