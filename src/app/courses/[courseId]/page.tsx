import React from "react";

async function page({ params }: { params: Promise<{ courseId: string }> }) {
  const courseId = (await params).courseId;
  return <h1>Course details. COURSE_ID:{courseId}</h1>;
}

export default page;
