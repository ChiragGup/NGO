import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Logo / Title */}
        <div>
          <h2 className="text-2xl font-bold">CodeWithLuffy</h2>
          <p className="text-sm text-gray-400 mt-2">
            Learn. Build. Inspire.
          </p>
        </div>

        {/* Column 2 - Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">Email: codewithluffy@gmail.com</p>
          <p className="text-sm text-gray-300 mt-1">Bhopal, India</p>
        </div>

        {/* Column 4 - Quick Message */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Let’s Connect</h3>
          <p className="text-sm text-gray-300">
            Drop a message anytime! Always happy to connect with fellow developers.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-800 py-4">
        © {new Date().getFullYear()} CodeWithLuffy — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
