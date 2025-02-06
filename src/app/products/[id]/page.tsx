import ProductForm from "@/features/products/forms/product-form";
import { getProduct } from "@/prisma-db";
import { notFound } from "next/navigation";

type EditProductProps = {
  params: {
    id: string;
  };
};

const EditProduct = async ({ params }: EditProductProps) => {
  const { id } = params;
  const product = await getProduct(+id);

  if (!product) {
    notFound();
  }

  return <ProductForm product={product} />;
};

export default EditProduct;
