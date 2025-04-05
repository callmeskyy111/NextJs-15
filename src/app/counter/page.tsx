import React from "react";
import Counter from "../components/counter/Counter";
export const metadata = {
  title: `Counter App | MetaData`,
  description: "A simple counter component using Next.js-15",
  author: "Skyy",
  keywords: ["next.js", "counter", "app"],
};

function page() {
  return (
    <div>
      <h1>Counter Component</h1>
      <Counter />
    </div>
  );
}

export default page;
