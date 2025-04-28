"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ResumeMenu } from "../custom/Buttons/ResumeMenu";

const Main = () => {
  const t = useTranslations("main");
  const alt = useTranslations("alt");

  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-7xl">
      <h1 className="text-2xl sm:text-5xl font-bold tracking-[-.01em] text-start sm:text-left">
        {t("greeting")}{" "}
        <span className="waving-hand">
          <Image
            src="/waving-hand.svg"
            alt={alt("wavingHand")}
            width={40}
            height={40}
            className="inline-block"
          />
        </span>
      </h1>

      <p className="text-lg sm:text-lg text-center">{t("introduction")}</p>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="mailto:atenciomvictor@gmail.com"
          rel="noopener noreferrer"
        >
          {t("hireMe")}
        </a>

        <ResumeMenu t={t} />
      </div>
    </div>
  );
};

export default Main;
