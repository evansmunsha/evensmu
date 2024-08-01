import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Image from "next/image";
import Link from "next/link";
import MenuBar from "./MenuBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm mb-2">
      <div className=" flex items-center justify-between   gap-5 px-5 py-3">
        {/* logo */}
        <Link href='/' className='flex gap-1 items-center'>
            <Image src='/thumbnail.png' width={40} height={40} alt='logo' className=' text-red-600  animate-bounce rounded-full' />
              <span className='hidden text-xl mb-3 items-center justify-center font-medium md:flex'>
                <b className='flex w-0 h-0 font-bold animate-spin text-orange-500 mr-1  text-3xl '>e</b>
                <b className='-m-1 text-red-600 text-xl flex animate-bounce'>vansbook</b>
              </span>
          </Link>
        <SearchField />
        <MenuBar className=" hidden  sm:flex flex-row" />
        <UserButton />
      </div>
    </header>
  );
}
