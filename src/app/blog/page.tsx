import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

function page() {
  return (
    <>
      <h1>Blog Page</h1>
      <Link href="/">Back Home 🏠</Link>
    </>
  );
}

export default page;
