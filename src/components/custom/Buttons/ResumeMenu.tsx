"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function ResumeMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center bg-white text-foreground gap-2 hover:bg-[#e2e2e2] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
        >
          Resume
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/10 border-none backdrop-blur-lg text-white">
        <DropdownMenuLabel>Resume Language</DropdownMenuLabel>

        <a href="/Victor_Atencio_EN.pdf" target="_blank" rel="noopener noreferrer" className="block">
          <DropdownMenuItem>
            English
            <DropdownMenuShortcut>
              <Image
                src="/UK.svg"
                alt="English"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </a>

        <a href="/Victor_Atencio_ES.pdf" target="_blank" rel="noopener noreferrer" className="block">
          <DropdownMenuItem>
            Spanish
            <DropdownMenuShortcut>
              <Image
                src="/ES.svg"
                alt="Spanish"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
