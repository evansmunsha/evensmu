import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Image from "next/image";
import Link from "next/link";
import MenuBar from "./MenuBar";
import { UserPlus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm mb-2">
      <div className="flex items-center justify-between gap-2 px-5 py-3">
        {/* Logo */}
        <Link href='/' className='flex gap-1 items-center' aria-label="Go to Evensme homepage">
          <Image 
            src='/thumbnail.png' 
            width={40} 
            height={40} 
            alt='Evensme Logo' 
            className='animate-bounce rounded-full' 
          />
          <span className='hidden md:flex flex-col items-start mr-2'>
            <b className='text-red-600 text-xl animate-bounce'>vensme</b>
          </span>
        </Link>
        
        {/* Search Field */}
        <SearchField />
        {/* Menu Bar */}
        <MenuBar className="hidden sm:flex flex-row" />
          <Link href={'/tofollow'}>
            <UserPlus />
          </Link>
        {/* User Button */}
        <UserButton />
      </div>
    </header>
  );
}
