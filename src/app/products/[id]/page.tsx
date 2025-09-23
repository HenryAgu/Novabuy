import React from "react";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <main className="min-h-screen flex gap-x-18 pr-5 lg:pr-24">
      <div className="basis-[50%] bg-black">1</div>
      <div className="basis-[50%] bg-black">Produgct ID: {id}</div>
    </main>
  );
};

export default ProductPage;
