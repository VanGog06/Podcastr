"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

type SidebarLinktype = {
  label: string;
  route: string;
  imgURL: string;
  isActive: boolean;
};

const SidebarLink = memo(
  ({ label, route, imgURL, isActive }: SidebarLinktype) => (
    <Link
      key={label}
      href={route}
      className={cn(
        "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
        {
          "bg-nav-focus border-r-4 border-orange-1": isActive,
        }
      )}
    >
      <Image src={imgURL} alt={label} width={24} height={24} />
      <p>{label}</p>
    </Link>
  )
);

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcastr
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <SidebarLink
              key={label}
              label={label}
              route={route}
              imgURL={imgURL}
              isActive={isActive}
            />
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
