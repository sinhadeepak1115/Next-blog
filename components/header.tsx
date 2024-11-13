import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="bg-blue-500 p-4">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-white text-2xl font-bold hover:text-blue-900"
          >
            Not Medium
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/blog" className="px-2 hover:text-white underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/api/auth/signin"
                className="px-2 hover:text-white underline"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
