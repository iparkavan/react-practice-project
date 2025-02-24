"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Review = {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string;
};

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

const page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState(0);
  const productsPerPage = 10;

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
        (page - 1) * productsPerPage
      }`
    );
    const data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPage(data.total);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 w-full p-12">
        {products.length > 0 &&
          products?.map((product, index) => (
            <div key={product.id}>
              <div className="relative h-60">
                <Image
                  src={product.thumbnail}
                  //   width={50}
                  //   height={50}
                  sizes="34"
                  fill
                  alt="thumbnail"
                />
              </div>
              <h3>{product.title}</h3>
            </div>
          ))}
      </div>
      <div className="m-4 text-center">
        {products.length > 0 && (
          <div className="flex items-center justify-center gap-4">
            <span
              className={`w-8 h-8 flex items-center justify-center rounded-lg border  ${
                page === 1 ? "cursor-not-allowed opacity-20" : "cursor-pointer"
              }`}
              // onClick={() => selectPageHandler(page - 1)}
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              ◀
            </span>
            {Array.from({ length: Math.ceil(totalPage / 10) }, (_, index) => (
              <span
                key={index}
                // onClick={() => selectPageHandler(index + 1)}
                onClick={() => setPage(index + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-200 ${
                  page === index + 1
                    ? "cursor-not-allowed bg-blue-500 text-white"
                    : "cursor-pointer"
                }`}
              >
                {index + 1}
              </span>
            ))}
            <span
              className={`w-8 h-8 flex items-center justify-center rounded-lg border  ${
                page === Math.ceil(totalPage / productsPerPage)
                  ? "cursor-not-allowed opacity-20"
                  : "cursor-pointer"
              }`}
              // onClick={() => selectPageHandler(page + 1)}
              onClick={() => page < totalPage && setPage(page + 1)}
            >
              ▶
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
