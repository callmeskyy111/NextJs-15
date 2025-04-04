//dynamic routes
async function page({ params }: { params: Promise<{ productId: string }> }) {
  const productId = (await params).productId;
  return <h1>Details about the product. PRODUCT_ID: {productId}</h1>;
}

export default page;
