"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
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
        size={"sm"}
        className={cn(
          "px-2 py-1 text-sm font-medium rounded-md transition-colors",
          isActive("en")
            ? "bg-white/20 text-white"
            : "text-gray-400 hover:text-white hover:bg-white/10"
        )}
        onClick={() => switchLocale("en")}
      >
        EN
      </Button>
      <Button
        variant={"ghost"}
        size={"sm"}
        className={cn(
          "px-2 py-1 text-sm font-medium rounded-md transition-colors",
          isActive("es")
            ? "bg-white/20 text-white"
            : "text-gray-400 hover:text-white hover:bg-white/10"
        )}
        onClick={() => switchLocale("es")}
      >
        ES
      </Button>
    </div>
  );
}
