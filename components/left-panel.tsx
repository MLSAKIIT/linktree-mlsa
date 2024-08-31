"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}
      <div >
        <div className="">
          <Image
            priority
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="/mlsa-logo.webp"
            width={120}
            height={120}
            blurDataURL="/mlsa-logo.webp"
          />
        </div>

        {/* Text Container */}
        <div className="mt-1">
          <div className="text-xl font-bold text-primary">
            {siteConfig.title}
          </div>
          <h1 className="mt-1 text-4xl font-bold">{siteConfig.creator}</h1>

          <p className="text-l mt-1  text-neutral-500 ">{siteConfig.bio}</p>
        </div>
        {/* Buttons Container */}
        <div className="">
          <div className="flex items-center gap-3 mt-6 ">
            <a
              href={`https://crypto.mlsakiit.com/`}
              className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800 "
            >
              {siteConfig.location}
            </a>
            <a
              href={`https://mlsakiit.com`}
              className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-200 dark:border-neutral-800 "
            >
              Visit Oficial Website
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
