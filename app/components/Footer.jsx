import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-8 lg:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#3b82f6]">Auto</span>Gallery
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showcasing premium automobiles with an elegant, responsive UI
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#3b82f6]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-[#3b82f6]">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#3b82f6]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              123 Auto Street
              <br />
              Car City, CC 12345
              <br />
              info@autogallery.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} AutoGallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
