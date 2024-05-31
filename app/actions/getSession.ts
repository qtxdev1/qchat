import { getServerSession } from "next-auth";
import auth from '@/app/libs/auth';

async function getSession() {
  return await getServerSession(auth);
}

export default getSession;