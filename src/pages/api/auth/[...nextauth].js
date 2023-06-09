import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/firebase";
import * as firebaseFunctions from "firebase/firestore";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.REACT_GITHUB_ID,
      clientSecret: process.env.REACT_GITHUB_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],
  adapter: FirestoreAdapter({ db: db, ...firebaseFunctions }),
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
