import SearchFilterProducts from "@/features/search-filter.tsx/SearchFilterProducts";
import { GetServerSideProps } from "next";
import { FC } from "react";

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Review = {
  userId: number;
  rating: number;
  comment: string;
  date: string;
};

type Meta = {
  [key: string]: any; // Adjust based on the expected meta properties
};

export type Products = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
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

const Page = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();
  const products: Products[] = data.products;

  return (
    <div>
      <SearchFilterProducts products={products} />;
    </div>
  );
};

export default Page;

// {
//   id: 29,
//   title: 'Juice',
//   description: 'Refreshing fruit juice, packed with vitamins and great for staying hydrated.',
//   category: 'groceries',
//   price: 3.99,
//   discountPercentage: 5.45,
//   rating: 3.41,
//   stock: 99,
//   tags: [Array],
//   sku: 'M2K19S06',
//   weight: 2,
//   dimensions: [Object],
//   warrantyInformation: '1 week warranty',
//   shippingInformation: 'Ships in 1-2 business days',
//   availabilityStatus: 'In Stock',
//   reviews: [Array],
//   returnPolicy: '90 days return policy',
//   minimumOrderQuantity: 26,
//   meta: [Object],
//   images: [Array],
//   thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png'
// },
