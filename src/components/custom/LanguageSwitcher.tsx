"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    router.refresh();
  };

  const isActive = (locale: string) => currentLocale === locale;

  return (
    <div className="flex gap-2">
      <Button
        variant={"ghost"}
        size={"icon"}
        className={"hover:bg-white/10 cursor-pointer"}
        onClick={() => switchLocale("en")}
      >
        <Image
          src="/UK.svg"
          alt="English"
          width={24}
          height={24}
          className={cn({
            "opacity-100": isActive("en"),
            "opacity-50": !isActive("en"),
          })}
        />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        className={"hover:bg-white/10 cursor-pointer"}
        onClick={() => switchLocale("es")}
      >
        <Image
          src="/ES.svg"
          alt="Spanish"
          width={24}
          height={24}
          className={cn({
            "opacity-100": isActive("es"),
            "opacity-50": !isActive("es"),
          })}
        />
      </Button>
    </div>
  );
}
