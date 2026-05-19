'use client'
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        
        {/* Glow Effect */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 blur-3xl bg-red-500/20 rounded-full"></div>

          <h1 className="relative text-8xl md:text-9xl font-black tracking-tight">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          News Not Found
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
          The article or page you’re looking for may have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Home Button */}
          <Link
            href="/"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Previous Page
          </button>
        </div>

        {/* Footer */}
        <p className="mt-14 text-sm text-zinc-600">
          © 2026 Dragon News Portal
        </p>
      </div>
    </main>
  );
}