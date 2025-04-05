import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "CoursesList Page",
  },
};
function page() {
  const dynamicProductId = 100;
  return (
    <>
      <h1>Courses List</h1>
      <h2>
        <Link href="/courses/1">Course 1</Link>
      </h2>
      <h2>
        <Link href="/courses/2">Course 2</Link>
      </h2>
      <h2>
        <Link href="/courses/3" replace>
          Course 3
        </Link>
        //Replace overwrites the current history state instead of adding a new
        url into the stack.
      </h2>
      <h2>
        <Link href={`/courses/${dynamicProductId}`}>
          Course {dynamicProductId}
        </Link>
      </h2>
      <Link href="/">Back Home 🏠</Link>
    </>
  );
}

export default page;
