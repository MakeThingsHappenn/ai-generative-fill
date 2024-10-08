import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

export { handlers, auth, signIn, signOut };
