"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type Recipe = {
  id: number;
  name: string;
  cuisine: string;
  image: string;
};

const Page = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const limit = 20;

  const fetchRecipes = useCallback(async () => {
    try {
      setIsLoading(true);

      const skip = (page - 1) * limit;

      const res = await fetch(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await res.json();

      setRecipes((prev) => [...prev, ...data.recipes]);

      // ✅ stop infinite scroll when all recipes loaded
      if (skip + data.recipes.length >= data.total) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  // fetch data whenever page changes
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // intersection observer
  useEffect(() => {
    if (isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "200px",
      },
    );

    const currentLoader = loaderRef.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }

      observer.disconnect();
    };
  }, [isLoading, hasMore]);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Infinite Scroll Recipes</h1>

      <div className="space-y-5">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg p-4 shadow-sm">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-52 object-cover rounded-md mb-3"
            />

            <h2 className="text-xl font-semibold">{recipe.name}</h2>

            <p className="text-gray-600">{recipe.cuisine}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="text-center py-10 text-lg font-medium">
          {isLoading ? "Loading..." : "Scroll for more"}
        </div>
      )}

      {!hasMore && (
        <p className="text-center py-10 text-gray-500">No more recipes</p>
      )}
    </div>
  );
};

export default Page;
