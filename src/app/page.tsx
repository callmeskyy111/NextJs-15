import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">To BlogPage📝</Link>
     <br/>
      <Link href="/courses">To CoursesPage🎓</Link>
    </>
  );
}

export default Home;
//21
