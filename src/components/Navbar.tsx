"use client"
import { useState } from "react"
import Button from "./ui/button"
import Link from "next/link"

const navlinks = [
  //change Url path when you decide to navigate to different page
  {
    url: "/coming-soon",
    text: "About",
  },
  {
    url: "/coming-soon",
    text: "Features",
  },
  {
    url: "/coming-soon",
    text: "Pricing",
  },
  {
    url: "/coming-soon",
    text: "Blog",
  },
]

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  function handleClick() {
    setOpen((prev) => !prev)
  }

  return (
    <header className="bg-black-background-variant-3 sticky top-0 z-50 mx-auto flex h-20 w-full items-center justify-between px-4 py-2 md:relative md:px-6">
      <Link href={"/"} className="flex items-center justify-center">
        <svg
          width="142"
          height="36"
          viewBox="0 0 142 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:w-[122px]"
        >
          <path
            d="M4.44438 26.98C4.44438 31.084 7.27638 33.124 10.1324 33.124C13.0124 33.124 15.8444 31.084 15.8444 26.98C15.8444 22.876 13.0124 20.836 10.1324 20.836C7.27638 20.836 4.44438 22.876 4.44438 26.98ZM1.49238 26.98C1.49238 21.412 5.66838 18.124 10.1324 18.124C14.5964 18.124 18.7964 21.412 18.7964 26.98C18.7964 32.572 14.5964 35.86 10.1324 35.86C5.66838 35.86 1.49238 32.572 1.49238 26.98ZM29.2049 34.204C28.6289 35.26 27.2609 35.836 25.8929 35.836C23.1089 35.836 21.4769 33.772 21.4769 31.18V23.812H24.2609V30.676C24.2609 32.116 24.9329 33.34 26.6129 33.34C28.2209 33.34 29.0609 32.26 29.0609 30.724V23.812H31.8449V33.364C31.8449 34.324 31.9169 35.068 31.9649 35.5H29.3009C29.2529 35.236 29.2049 34.684 29.2049 34.204ZM38.9764 20.236V23.812H41.4004V26.284H38.9764V31.708C38.9764 32.74 39.4324 33.172 40.4644 33.172C40.8484 33.172 41.3044 33.1 41.4244 33.076V35.38C41.2564 35.452 40.7284 35.644 39.7204 35.644C37.5604 35.644 36.2164 34.348 36.2164 32.164V26.284H34.0564V23.812H34.6564C35.9044 23.812 36.4564 23.02 36.4564 21.988V20.236H38.9764ZM46.6448 35.5H43.9328V18.124H46.6688V25.252C47.1968 24.34 48.5408 23.5 50.3408 23.5C53.8448 23.5 55.7408 26.164 55.7408 29.596C55.7408 33.124 53.6528 35.788 50.2448 35.788C48.5888 35.788 47.3168 35.068 46.6448 33.94V35.5ZM52.9328 29.62C52.9328 27.292 51.6368 25.972 49.7888 25.972C48.0128 25.972 46.6448 27.292 46.6448 29.62C46.6448 31.924 48.0128 33.316 49.7888 33.316C51.6128 33.316 52.9328 31.924 52.9328 29.62ZM63.5532 33.364C65.2812 33.364 66.8172 32.092 66.8172 29.644C66.8172 27.22 65.2812 25.972 63.5532 25.972C61.8492 25.972 60.2892 27.22 60.2892 29.644C60.2892 32.068 61.8492 33.364 63.5532 33.364ZM63.5532 23.452C67.0572 23.452 69.6252 26.068 69.6252 29.644C69.6252 33.244 67.0572 35.86 63.5532 35.86C60.0732 35.86 57.5052 33.244 57.5052 29.644C57.5052 26.068 60.0732 23.452 63.5532 23.452ZM79.8533 34.204C79.2773 35.26 77.9093 35.836 76.5413 35.836C73.7573 35.836 72.1253 33.772 72.1253 31.18V23.812H74.9093V30.676C74.9093 32.116 75.5813 33.34 77.2613 33.34C78.8693 33.34 79.7093 32.26 79.7093 30.724V23.812H82.4933V33.364C82.4933 34.324 82.5653 35.068 82.6133 35.5H79.9493C79.9013 35.236 79.8533 34.684 79.8533 34.204ZM88.8809 28.756V35.5H86.0969V23.812H88.8089V25.372C89.5769 24.028 90.9689 23.476 92.2649 23.476C95.1209 23.476 96.4889 25.54 96.4889 28.108V35.5H93.7049V28.588C93.7049 27.148 93.0569 25.996 91.3049 25.996C89.7209 25.996 88.8809 27.22 88.8809 28.756ZM101.75 29.62C101.75 31.852 102.998 33.34 104.894 33.34C106.718 33.34 107.99 31.828 107.99 29.596C107.99 27.364 106.742 25.972 104.918 25.972C103.094 25.972 101.75 27.388 101.75 29.62ZM110.678 18.124V33.364C110.678 34.42 110.774 35.308 110.798 35.5H108.134C108.086 35.236 108.014 34.468 108.014 33.988C107.462 34.972 106.238 35.788 104.582 35.788C101.222 35.788 98.9661 33.148 98.9661 29.62C98.9661 26.26 101.246 23.5 104.534 23.5C106.574 23.5 107.606 24.436 107.966 25.18V18.124H110.678Z"
            fill="white"
          />
          <path
            d="M131.5 3.4C131.5 2.55992 131.5 2.13988 131.663 1.81901C131.807 1.53677 132.037 1.3073 132.319 1.16349C132.64 1 133.06 1 133.9 1H138.1C138.94 1 139.36 1 139.681 1.16349C139.963 1.3073 140.193 1.53677 140.337 1.81901C140.5 2.13988 140.5 2.55992 140.5 3.4V7.6C140.5 8.44008 140.5 8.86012 140.337 9.18099C140.193 9.46323 139.963 9.6927 139.681 9.83651C139.36 10 138.94 10 138.1 10H133.9C133.06 10 132.64 10 132.319 9.83651C132.037 9.6927 131.807 9.46323 131.663 9.18099C131.5 8.86012 131.5 8.44008 131.5 7.6V3.4Z"
            fill="white"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M123 13.55C123 12.9199 123 12.6049 123.123 12.3643C123.23 12.1526 123.403 11.9805 123.614 11.8726C123.855 11.75 124.17 11.75 124.8 11.75H127.95C128.58 11.75 128.895 11.75 129.136 11.8726C129.347 11.9805 129.52 12.1526 129.627 12.3643C129.75 12.6049 129.75 12.9199 129.75 13.55V16.7C129.75 17.3301 129.75 17.6451 129.627 17.8857C129.52 18.0974 129.347 18.2695 129.136 18.3774C128.895 18.5 128.58 18.5 127.95 18.5H124.8C124.17 18.5 123.855 18.5 123.614 18.3774C123.403 18.2695 123.23 18.0974 123.123 17.8857C123 17.6451 123 17.3301 123 16.7V13.55Z"
            fill="white"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M114.875 21.775C114.875 21.285 114.875 21.0399 114.97 20.8528C115.054 20.6881 115.188 20.5543 115.353 20.4704C115.54 20.375 115.785 20.375 116.275 20.375H118.725C119.215 20.375 119.46 20.375 119.647 20.4704C119.812 20.5543 119.946 20.6881 120.03 20.8528C120.125 21.0399 120.125 21.285 120.125 21.775V24.225C120.125 24.715 120.125 24.9601 120.03 25.1472C119.946 25.3119 119.812 25.4457 119.647 25.5296C119.46 25.625 119.215 25.625 118.725 25.625H116.275C115.785 25.625 115.54 25.625 115.353 25.5296C115.188 25.4457 115.054 25.3119 114.97 25.1472C114.875 24.9601 114.875 24.715 114.875 24.225V21.775Z"
            fill="white"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <ul className="hidden h-full items-center gap-10 text-sm font-normal text-white md:flex md:text-base">
        {navlinks.map((navlink) => (
          <li
            className="font-mona-sans cursor-pointer p-4 capitalize no-underline transition-all hover:opacity-70"
            key={navlink.text}
          >
            <Link href={navlink.url} className="size-full">
              {navlink.text}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className="font-mona-sans !hidden px-6 py-3 font-medium transition-all hover:opacity-70 focus:ring-white md:!inline-flex"
      >
        <Link href={"/signup"}>Sign up</Link>
      </Button>

      {/* //Mobile Menu Button */}
      <button
        onClick={handleClick}
        className="z-50 flex h-6 w-8 flex-col justify-between focus:outline-none md:hidden"
      >
        <span
          className={`h-1 w-full rounded bg-white transition-all duration-300 ${open ? "translate-y-3.5 rotate-45" : ""}`}
        ></span>
        <span
          className={`h-1 w-full rounded bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`h-1 w-full rounded bg-white transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
        ></span>
      </button>

      {/* //Mobile Menu Navlinks */}
      <ul
        className={`${open ? "flex translate-y-0 opacity-100" : "hidden -translate-y-full opacity-0"} bg-black-background-variant-3 absolute inset-0 top-20 z-50 h-dvh w-full flex-col items-center justify-start gap-6 px-4 py-10 text-center text-sm font-normal text-white transition-all duration-500 md:!hidden`}
      >
        {navlinks.map((navlink) => (
          <li
            className="font-mona-sans w-full cursor-pointer border-b border-solid border-slate-200 py-2 capitalize no-underline transition-all hover:opacity-70"
            key={navlink.text}
          >
            <Link href={navlink.url} className="w-full text-white">
              {navlink.text}
            </Link>
          </li>
        ))}

        <Button
          asChild
          className="font-mona-sans text-black-background-variant-3 w-full px-6 py-3 font-medium hover:opacity-70"
        >
          <Link href={"/signup"}>Sign up</Link>
        </Button>
      </ul>
    </header>
  )
}

export default Navbar
