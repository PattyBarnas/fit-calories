"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "@/app/ui/dashboard/nav.module.css";

// ...
const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Progress", href: "/dashboard/progress" },
  { name: "Today", href: "/dashboard/today" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <div className={styles.links}>
              <p className="hidden md:block">{link.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
