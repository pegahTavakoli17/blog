import React from "react";
import MenuItem from "./MenuItem";
import { MdOutlineCreate } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 bg-amber-100 dark:bg-gray-600">
      <div className="flex gap-6 ">
        <MenuItem title="home" Icon={IoHomeOutline} address="/" />
        <MenuItem
          title="Create new post"
          Icon={MdOutlineCreate}
          address="/newpost"
        />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/" className="flex items-center cursor-default">
          <span className="p-2 font-bold rounded-lg bg-amber-500">Blog</span>
        </Link>
      </div>
    </div>
  );
}
