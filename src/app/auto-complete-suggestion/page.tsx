"use client";

import AutoCompleteSuggestion from "@/features/auto-complete-suggestion/AutoCompleteSuggestion";
import React from "react";

const page = () => {
  const fetchSuggestions = async (query: string): Promise<any[]> => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch suggestions");
    }

    const data = await response.json();
    return data.recipes;
  };

  return (
    <div>
      <AutoCompleteSuggestion
        placeholder="Enter you receipe"
        // staticData={staticData}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={<>Loading...</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </div>
  );
};

export default page;
