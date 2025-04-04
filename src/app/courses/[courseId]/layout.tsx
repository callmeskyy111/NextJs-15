import React from "react";

function CourseDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={{ backgroundColor: "yellow", padding: "3px" }}>
        <h2>Header Of CourseDetails</h2>
      </header>
      {children}
      <footer style={{ backgroundColor: "lightgray", padding: "3px" }}>
        <h2>Footer Of CourseDetails</h2>
      </footer>
    </>
  );
}

export default CourseDetailsLayout;
