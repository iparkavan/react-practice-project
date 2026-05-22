"use client";

import { useEffect, useRef, useState } from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const InfiniteScroll = () => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const skip = (page - 1) * 20;

      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`,
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data: ProductsResponse = await res.json();

      setProducts((prev) => [...prev, ...data.products]);

      if (skip + data.products.length >= data.total) {
        setHasMore(false);
      }
    } catch (error) {
      setError("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "600px",
      },
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }

      observer.disconnect();
    };
  }, [isLoading, hasMore]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-3">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="border rounded-md">
              <div>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
              </div>
            </div>
          ))}

        {error && <p>{error}</p>}

        {hasMore && (
          <div
            ref={loadMoreRef}
            style={{ color: "red" }}
            className="text-center text-4xl"
          >
            {isLoading ? "Loading..." : "Scroll for More"}
          </div>
        )}
      </div>

      {!hasMore && (
        <div style={{ color: "green" }} className="text-center text-3xl p-4">
          No More Products
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
