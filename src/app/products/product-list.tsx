"use client";

import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Link from "next/link";
import React, { useOptimistic } from "react";
import { Product } from "./page";
import { useRouter } from "next/navigation";

const ProductsList = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = (productId: number) => {
    setOptimisticProducts(productId);
    removeProduct(productId);
  };

  return (
    <div className="w-[50%]">
      <div className="text-end">
        <button
          onClick={() => router.push("/create-product")}
          className="primary-btn"
        >
          Create New
        </button>
      </div>
      <ul className="space-y-4 p-4">
        {optimisticProducts.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <Link
              href={`/products/${product.id}`}
              className="text-xl font-semibold"
            >
              {product.title}
            </Link>
            <p>{product.description}</p>
            <p className="text-lg font-medium">{product.price}</p>
            <form action={removeProductById.bind(null, product.id)}>
              <button
                type="submit"
                className="text-white bg-red-500 p-1 rounded-md"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
