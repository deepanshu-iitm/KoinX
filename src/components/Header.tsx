"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-12 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
        <Image 
            src="/KoinX-logo.svg" 
            alt="KoinX Logo"
            width={96} 
            height={24} 
            priority={true} 
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 px-6">
          <Link href="/crypto-taxes" className="font-semibold text-16px text-[#0f1629]">
            Crypto Taxes
          </Link>
          <Link href="/free-tools" className="font-semibold text-16px text-[#0f1629]">
            Free Tools
          </Link>
          <Link href="/resource-center" className="font-semibold text-16px text-[#0f1629]">
            Resource Center
          </Link>
          <button className="h-[40px] w-[136px] rounded-[8px] px-4 gap-[8px] bg-gradient-to-r from-[#2870ea] to-[#1b4aef] text-white font-semibold">
              Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}