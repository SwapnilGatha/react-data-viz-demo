import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      You are in home page
    </div>
  );
}
