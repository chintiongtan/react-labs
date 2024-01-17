import { PostResponse } from '@/types/post';
import { User } from '@/types/user';

export async function fetchUser(): Promise<User> {
  return await fetch('https://dummyjson.com/users/1').then((res) => res.json());
}

export async function fetchPosts(): Promise<PostResponse> {
  return await fetch('https://dummyjson.com/posts/user/1').then((res) => res.json());
}
