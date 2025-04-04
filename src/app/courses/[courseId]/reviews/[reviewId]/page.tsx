import { notFound } from "next/navigation";

type paramsType = Promise<{ courseId: string; reviewId: string }>;

async function page({ params }: { params: paramsType }) {
  const { courseId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review: {reviewId} for course: {courseId}
    </h1>
  );
}

export default page;
