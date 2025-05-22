import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 sm:py-8 gradient-border-t border-t border-gray-800/30">
      {/* Enhanced container with better mobile spacing */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Pnyx Institute. All rights reserved.
        </p>
        <div className="flex space-x-4 sm:space-x-6">
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Courses
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
