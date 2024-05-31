import NextAuth from 'next-auth';
import auth from '@/app/libs/auth';

const handler = NextAuth(auth);

export { handler as GET, handler as POST };
