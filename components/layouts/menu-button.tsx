import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/index";
import { AiOutlineMenu } from "react-icons/ai";

export function MenuItemButton() {
  return (
    <div className="md:hidden md:none">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <AiOutlineMenu size={25} />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <Avatar className="cursor-pointer mx-auto">
              <AvatarImage src={"/images/logo-pic.jpg"} />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <SheetTitle>Prashant Shukla</SheetTitle>
            <SheetDescription>
              Please checkout the links to know more about me.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="py-4 flex flex-col uppercase">
              <a href="/">
                <Button
                  variant={"outline"}
                  className="py-4 text-sm w-full mb-2 shadow-md"
                >
                  Home
                </Button>
              </a>
              <a href="/about">
                <Button
                  variant={"outline"}
                  className="py-4 text-sm w-full mb-2 shadow-md"
                >
                  About
                </Button>
              </a>
              <a href="/skills">
                <Button
                  variant={"outline"}
                  className="py-4 text-sm w-full mb-2 shadow-md"
                >
                  Skills
                </Button>
              </a>
              <a href="/project">
                <Button
                  variant={"destructive"}
                  className="py-4 text-sm w-full mb-2"
                >
                  Projects
                </Button>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
