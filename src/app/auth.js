import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import userModel from './utils/models/User'

export const {auth,signIn,signOut,handlers:{GET,POST}} = NextAuth({
    
    providers:[
        CredentialProvider({
            name : "credentials",

            async authorize(credentials){

               
                    const user = await userModel.findOne({email : credentials?.email});
                    if(!user) {
                        return null
                    }
                    if(credentials?.password !== user.password) {
                        return null
                    }
                    return {name:user.username,email:user.email,role:user.role}

                }
               
            })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token,user}) {
            if(user){
            token.userid = user.id,
            token.role = user.role,
            token.email = user.email,
            token.username = user.name
            }
            return token
        },
        async session({session,token}){
            session.userId = token.userid,
            session.username = token.username,
            session.role = token.role,
            session.email = token.email
            return session
        }
    }

})