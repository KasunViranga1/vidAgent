import Link from "next/link";
import React from "react";
import AgentPulse from "./AgentPulse";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="stick top-0 z-50 left-0 right-0 px-4  bg-white/80 backdrop-blur-sm border-b border-gray-200 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* left */}
          <div className="flex items-center justify-between ">
            <Link href="/" className="flex items-center gap-4">
              <AgentPulse size="small" color="blue" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                VidAgent
              </h1>
            </Link>
          </div>
          {/* right */}
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="manage-plan">
                <Button
                  variant="outline"
                  className="mr-4 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent"
                >
                  Manage Plan
                </Button>
              </Link>
              <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="bg-gradient-to-r from-blue-600 to bg-blue-400 bg-clip-text text-transparent"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
