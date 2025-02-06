import { getProducts } from "@/prisma-db";
import ProductsList from "./product-list";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const Products = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="w-full flex items-center justify-center">
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
