import bcrypt from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/app/models/User";
import clientPromise from "@/libs/mongoConnect";

connect();

export const authOptions = {
    // adapter: MongoDBAdapter(clientPromise),
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "test@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                const user = await User.findOne({ email });
                const passwordOk =
                    user && bcrypt.compareSync(password!, user.password);

                if (passwordOk) {
                    return user;
                }

                return null;
            },
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
