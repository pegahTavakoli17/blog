import Link from "next/link";
import React from "react";
export default function MenuItem({ title, Icon, address }) {
  return (
    // navbar item
    <Link href={address} className="hover:text-amber-500">
      <p className="hidden uppercase sm:inline">{title}</p>
      <Icon className="text-2xl sm:hidden" />
    </Link>
  );
}
