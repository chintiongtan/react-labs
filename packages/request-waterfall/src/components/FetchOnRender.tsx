'use client';

import { Post } from '@/types/post';
import { User } from '@/types/user';
import { fetchPosts, fetchUser } from '@/utils/api';
import { delay, getTimeNow } from '@/utils/helper';
import { useEffect, useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    delay(3000)
      .then(fetchUser)
      .then((data) => setProfile(data));
  }, []);

  if (profile === null) {
    return <div>Loading profile ...</div>;
  }

  return (
    <div>
      <p>profile rendered at: {getTimeNow()}</p>
      <p>
        {profile.firstName} {profile.lastName}
      </p>
      <Posts />
    </div>
  );
}

function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    delay(5000)
      .then(fetchPosts)
      .then(({ posts = [] }) => {
        setPosts(posts);
      });
  }, []);

  if (posts === null) {
    return <div>Loading posts ...</div>;
  }

  return (
    <>
      <p>posts rendered at: {getTimeNow()}</p>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={`user-post-${id}`}>{title}</li>
        ))}
      </ol>
    </>
  );
}

export default function FetchOnRender() {
  return <Profile />;
}
