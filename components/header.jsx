

import {  SignedIn, SignInButton,SignedOut } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { checkUser } from "@/lib/checkUser";
import { PenBox } from "lucide-react";
import Image from "next/image";
import UserMenu from "./user-menu";
import UserLoading from "./user-loading";


const Header = async() => {
  await checkUser();
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            <Image
              src={"/logo.png"}
              alt="Zero Logo"
              width={200}
              height={57}
              className="h-10 w-auto object-contain"
            />
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button variant="destructive" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu/>
          </SignedIn>
        </div>
      </nav>
      <UserLoading/>
    </header>
  );
}

export default  Header;
