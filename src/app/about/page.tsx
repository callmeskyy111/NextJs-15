//! 💡IMP: MetaData can be put into both page.tsx and layout.tsx, but the former one takes precedence over the later.
export const metadata = {
  title: "METADATA Title | ABOUT Page",
};

function page() {
  return <h1>Hello from ABOUT page!</h1>;
}

export default page;
