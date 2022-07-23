import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    // console.log(term);
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white pt-3 pr-3">
      <div className="flex mb-3 ml-3">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          width={120}
          height={40}
          alt="Google logo"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-2 ml-7 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-150  hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" />
          <SearchIcon
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
            onClick={search}
          />
          <button hidden onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="https://pbs.twimg.com/profile_images/1514991118114385924/MS2xn0OD_400x400.jpg"
          className="ml-auto"
        />
      </div>
      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
