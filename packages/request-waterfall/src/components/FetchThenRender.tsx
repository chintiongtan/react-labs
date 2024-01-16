'use client';

import { Post } from '@/types/post';
import { User } from '@/types/user';
import { fetchPosts, fetchUser } from '@/utils/api';
import { delay, getTimeNow } from '@/utils/helper';
import { useEffect, useState } from 'react';

const promises = () => Promise.all([delay(3000).then(fetchUser), delay(5000).then(fetchPosts)]);

function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    promises().then(([respProfile, { posts = [] }]) => {
      setProfile(respProfile);
      setPosts(posts);
    });
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
      <Posts posts={posts} />
    </div>
  );
}

function Posts({ posts }: { posts: Post[] | null }) {
  if (posts === null) {
    return <div>Loading posts ...</div>;
  }

  return (
    <div>
      <p>posts rendered at: {getTimeNow()}</p>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={`user-post-${id}`}>{title}</li>
        ))}
      </ol>
    </div>
  );
}

export default function FetchThenRender() {
  return <Profile />;
}
