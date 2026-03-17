import { loginUser } from "@/action/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { dbconnection } from "./dbconnection";


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',

            credentials: {
                // username: { label: "Username", type: "text", placeholder: "jsmith" },
                // password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const user = await loginUser(credentials)

                return user;
            }
        })
        ,


        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })

    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            const usercollection = await dbconnection("user")


            const isExist = await usercollection.findOne({ email: user.email, provider: account.provider })

            if (isExist) {
                return true;
            }


            const newuser = {
                provider:account.provider,
                name:user.name,
                email:user.email,
                role: "user"
            }


            const result=await usercollection.insertOne(newuser);
            return result.acknowledged

          
        },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },
        // async session({ session, token, user }) {
        //     return session
        // },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //     return token
        // }
    }
}