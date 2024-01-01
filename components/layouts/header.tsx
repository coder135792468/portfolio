import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  ThemeButton,
} from "@/components/index";
import { MenuItemButton } from "./index";

export function Header() {
  return (
    <div className="relative top-0 left-0 w-full h-20 shadow-md z-[10] ease-in-out duration-300 bg-background">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Avatar className="cursor-pointer">
          <AvatarImage src={"/images/logo-pic.jpg"} />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        <div className="flex justify-center items-center">
          <ul className="hidden md:flex justify-center align-middle">
            <li className="ml-2 rounded-sm py-1 px-2 text-center text-sm uppercase border-b-2 border-transparent hover:border-primary hover:bg-secondary">
              <a href="/">Home</a>
            </li>
            <li className="ml-2 rounded-sm py-1 px-2 text-center text-sm uppercase border-b-2 border-transparent hover:border-primary hover:bg-secondary">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-2 rounded-sm py-1 px-2 text-center text-sm uppercase border-b-2 border-transparent hover:border-primary hover:bg-secondary">
              <a href="/#skills">Skills</a>
            </li>
            <li className="ml-2 rounded-sm py-1 px-2 text-center text-sm uppercase border-b-2 border-transparent hover:border-primary hover:bg-secondary">
              <a href="/project">Projects</a>
            </li>
          </ul>
          <ThemeButton />
          <MenuItemButton />
        </div>
      </div>
    </div>
  );
}
