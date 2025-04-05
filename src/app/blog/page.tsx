import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

function page() {
  return <h1>Blog Page</h1>;
}

export default page;
