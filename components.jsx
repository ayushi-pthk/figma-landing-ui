import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-20 py-5">
      <h1 className="text-xl font-bold">Brand</h1>
      <div className="hidden md:flex gap-8 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
      </div>
      <button className="bg-primary px-5 py-2 rounded-lg text-sm">Sign In</button>
    </nav>
  );
}
