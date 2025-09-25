import React from "react";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <main className="min-h-screen flex lg:flex-row flex-col gap-x-15 pr-5 pl-5 lg:pl-0 lg:pr-24">
      <div className="basis-[50%] bg-black">1</div>
      <div className="basis-[50%] p-2.5">Produgct ID: {id}</div>
    </main>
  );
};

export default ProductPage;
