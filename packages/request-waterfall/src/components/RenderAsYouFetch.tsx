'use client';

import { usePrefetchQuery } from '@/hooks/usePrefetchQuery';
import { fetchPosts, fetchUser } from '@/utils/api';
import { delay, getTimeNow } from '@/utils/helper';
import { QueryClient, QueryClientProvider, useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

function Profile() {
  usePrefetchQuery({
    queryKey: ['get-user-posts'],
    queryFn: () => delay(5000).then(fetchPosts),
  });

  const { data: profile } = useSuspenseQuery({
    queryKey: ['get-user'],
    queryFn: () => delay(3000).then(fetchUser),
  });

  return (
    <div>
      <p>profile rendered at: {getTimeNow()}</p>
      <p>
        {profile.firstName} {profile.lastName}
      </p>
      <Suspense fallback={<div>Loading posts ...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}

function Posts() {
  const { data: respPosts } = useSuspenseQuery({
    queryKey: ['get-user-posts'],
    queryFn: () => delay(5000).then(fetchPosts),
  });
  const { posts = [] } = respPosts;

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

const queryClient = new QueryClient();

export default function RenderAsYouFetch() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading profile ...</div>}>
        <Profile />
      </Suspense>
    </QueryClientProvider>
  );
}
