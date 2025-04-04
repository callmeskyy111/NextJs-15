type userIdType = Promise<{ userId: string }>;
async function page({ params }: { params: userIdType }) {
  const userId = (await params).userId;
  return <h1>User Details. USER_ID: {userId}</h1>;
}

export default page;
