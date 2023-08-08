import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

//test

providers.push(
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (process.env.VERCEL_ENV === "preview") {
        // Dummy-Anmeldeinformationen nur für den Preview-Modus
        if (
          credentials.username === "admin" &&
          credentials.password === "adminpassword"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
            role: "admin",
          };
        }
      } else {
        // Standard-Authentifizierungslogik für andere Umgebungen
        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
            role: "admin",
          };
        } else if (
          credentials.username === process.env.TEACHER_USERNAME &&
          credentials.password === process.env.TEACHER_PASSWORD
        ) {
          return {
            id: "2",
            name: "Teacher",
            email: "teacher@example.com",
            role: "teacher",
          };
        }
      }

      // Fallback für andere Anmeldeinformationen
      return null;
    },
  })
);

function getRoleOfUser(email) {
  if (email === process.env.ADMIN_EMAIL) {
    return "admin";
  } else if (email === "teacher@example.com") {
    return "teacher";
  }
  return "viewer";
}

export const authOptions = {
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = getRoleOfUser(user.email);
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
};

export default NextAuth(authOptions);
