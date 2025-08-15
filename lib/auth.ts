// lib/auth.ts for google
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Naver from "next-auth/providers/naver";
import Kakao from "next-auth/providers/kakao";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  // cf. next-auth/react/signIn/signOut은 해당 페이지로 이동하는 함수!
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google,
    GitHub,
    Naver,
    Kakao,
    Credentials({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        passwd: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.passwd)
          return null;

        const user = { id: "1", email: "aa@gmail.com", name: "Hong" };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // jwt 방식
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email!;
        session.user.name = token.name;
      }
      return session;
    },
  },
  trustHost: true,
  jwt: { maxAge: 30 * 60 },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
