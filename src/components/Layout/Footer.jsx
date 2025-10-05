import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#e9e4dd] text-[#7a6f65] py-12 px-8 font-serif">
      <div className="flex flex-col items-center gap-8">
        {/* Brand */}
        <div className="text-center">
          <h3 className="font-playfair text-2xl text-[#bfa56a] mb-2.5">
            IHSAN TASKS
          </h3>
          <p className="text-center">Deeds are by intentions. Remember to have good intentions.</p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a href="/" className="font-bold hover:text-[#bfa56a] transition-colors">
            Home
          </a>
          <a href="/tasks" className="font-bold hover:text-[#bfa56a] transition-colors">
            Tasks
          </a>
          <a href="/explore" className="font-bold hover:text-[#bfa56a] transition-colors">
            Explore
          </a>
          <a href="/about" className="font-bold hover:text-[#bfa56a] transition-colors">
            About
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" aria-label="Instagram" className="transform hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bfa56a" width="24" height="24" viewBox="0 0 24 24">
              <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 2c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.3a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zM17.5 6.5c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="transform hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bfa56a" width="24" height="24" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.6 8.6 0 0 1-2.72 1.04A4.27 4.27 0 0 0 16.11 4c-2.4 0-4.33 1.92-4.33 4.3 0 .34.04.68.11 1C7.72 9.17 4.1 7.18 1.67 4.15a4.23 4.23 0 0 0-.59 2.16 4.3 4.3 0 0 0 1.91 3.58 4.2 4.2 0 0 1-1.96-.54v.06c0 2.1 1.5 3.85 3.5 4.24a4.36 4.36 0 0 1-1.95.07 4.3 4.3 0 0 0 4.02 3 8.6 8.6 0 0 1-5.3 1.83c-.34 0-.67-.02-1-.06a12.2 12.2 0 0 0 6.6 1.92c7.9 0 12.23-6.5 12.23-12.13 0-.18-.01-.35-.02-.53A8.5 8.5 0 0 0 22.46 6z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="transform hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bfa56a" width="24" height="24" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.6 9.87v-7H8v-2.87h2.4V9.5c0-2.4 1.44-3.73 3.64-3.73 1.05 0 2.15.18 2.15.18v2.36H15.5c-1.22 0-1.6.76-1.6 1.54v1.86h2.73L16.2 14.9h-2.3v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-[#a38f7c]">
        &copy; 2025 IHSAN TASKS. All rights reserved.
      </div>
    </footer>
  );
}
