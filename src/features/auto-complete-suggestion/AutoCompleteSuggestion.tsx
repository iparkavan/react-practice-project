"use client";

import React, { useCallback, useEffect, useState } from "react";
import SuggestionList from "./suggestions-list";
import { debounce } from "lodash";

interface AutoCompleteSuggestionProps {
  placeholder: string;
  staticData?: any[];
  fetchSuggestions: (input: string) => Promise<any[]>;
  dataKey: string;
  customLoading?: React.ReactNode;
  onSelect: (item: any) => void;
  onChange: (input: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  customStyles?: React.CSSProperties;
}

const AutoCompleteSuggestion: React.FC<AutoCompleteSuggestionProps> = ({
  placeholder,
  staticData,
  fetchSuggestions,
  dataKey,
  customLoading = "Loading...",
  onSelect,
  onChange,
  onBlur,
  onFocus,
  customStyles,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async (query: string) => {
    setError("");
    setIsLoading(true);

    try {
      let result: any[] = [];
      if (staticData) {
        result = staticData.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch (error) {
      setError("Error fetching suggestions");
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getSuggestionsDebounce = useCallback(debounce(getSuggestions, 300), []);

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestionsDebounce(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSuggestionClick = (suggestion: any) => {
    setInputValue(dataKey ? suggestion[dataKey] : suggestion);
    onSelect(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        className="primary-input w-[400px]"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {(suggestions.length > 0 || isLoading || error) && (
        <ul className="absolute max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg w-[400px] mt-1 z-10">
          {error && <div className="text-red-500 p-4">{error}</div>}
          {isLoading && (
            <div className="text-gray-500 p-4">{customLoading}</div>
          )}
          <SuggestionList
            dataKey={dataKey}
            suggestions={suggestions}
            highlight={inputValue}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSuggestion;
