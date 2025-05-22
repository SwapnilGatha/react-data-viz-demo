import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "white", color: "black" }}>
        <Link href="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link href="/about" style={{ marginRight: "1rem" }}>
          About
        </Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <h2>Welcome to the Home Page - Nextjs</h2>
    </div>
  );
}
