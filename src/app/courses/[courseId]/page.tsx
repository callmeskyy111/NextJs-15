import React from "react";
import { Metadata } from "next";

//! 💡 Cannot use the generateMetadata() as well as the Metadata{} in the same file.
//! 💡 Also, METADATAs cannot work with files marked 'use client'.

type PropsType = {
  params: Promise<{ courseId: string }>;
};

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const id = (await params).courseId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 1000);
  });
  return {
    title: `Course ${id}`,
  };
}

async function page({ params }: PropsType) {
  const courseId = (await params).courseId;
  return <h1>Course details. COURSE_ID:{courseId}</h1>;
}

export default page;
