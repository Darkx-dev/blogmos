'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function action() {
  revalidateTag('postsss')
  revalidateTag('post')
}