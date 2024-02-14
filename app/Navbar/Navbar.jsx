import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    // Navbar container with Tailwind CSS classes for styling
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      {/* Logo section */}
      <div className="flex items-center">
        {/* Logo image */}
        <Image
          src="/clock.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="h-8 mr-2"
        />
        {/* Logo text */}
        <span className="text-xl font-semibold">Mhk</span>
      </div>

      {/* Search input section */}
      <div className="flex justify-center flex-grow">
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
        />
      </div>

      {/* Pages links section */}
      <div className="flex items-center">
        {/* Page links */}
        <Link href="#" className="mr-4">
          Home
        </Link>
        <Link href="#" className="mr-4">
          About
        </Link>
        <Link href="/blog" className="mr-4">
          Blog
        </Link>
        <Link href="#" className="mr-4">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
