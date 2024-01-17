import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/fetch-on-render">Fetch On Render</Link>
        </li>
        <li>
          <Link href="/fetch-then-render">Fetch Then Render</Link>
        </li>
        <li>
          <Link href="/render-as-you-fetch">Render As You Fetch</Link>
        </li>
      </ul>
    </main>
  );
}
