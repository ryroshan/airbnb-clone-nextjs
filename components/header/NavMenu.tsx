"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModal from "../auth/LoginModal";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import SignOutBtn from "../auth/SignOutBtn";
import SignInModal from "../auth/SignInModal";

export default function NavMenu({ session }: { session: object | null }) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <MenuIcon className="cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="mr-6 ">
          <ul>
            {session ? (
              <>
                <Link href="/dashboard">
                  <li className="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
                    Dashboard
                  </li>
                </Link>

                <SignOutBtn />
              </>
            ) : (
              <>
                <LoginModal />
                <SignInModal />
              </>
            )}
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}