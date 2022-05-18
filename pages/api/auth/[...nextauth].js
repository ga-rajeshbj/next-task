import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  jwt: {
    encryption: true,
  },
  secret: "secret token",
  providers: [
    GithubProvider({
      clientId: "4dbbe7d71c1823fabe4d",
      clientSecret: "b95e03c1a334c3779e33f90acaae0ea7f45f9314",
    }),
    GoogleProvider({
      clientId:
        "627971612984-hnqaafg2hb3j6i87fubt0es0mfsdvq30.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     console.log("hhhh");
  //     return baseUrl;
  //   },
  //   async session({ session, user, token }) {
  //     return session;
  //   },
  // },
  // debug: false,
  // secret: process.env.SECRET || "123",
  // session: {
  //   jwt: true,
  // },
});
