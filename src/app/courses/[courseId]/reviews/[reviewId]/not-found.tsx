"use client";
import { usePathname } from "next/navigation";
//A Client Component hook that lets us read the current URL's pathname.

function Notfound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h1>REVIEW NOT FOUND! 🔴</h1>
      <h3>
        Could not find the requested REVIEW: {reviewId} for the product:{" "}
        {productId} ⭐🌵
      </h3>
    </div>
  );
}

export default Notfound;
