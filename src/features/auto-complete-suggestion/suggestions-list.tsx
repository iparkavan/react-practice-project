import React from "react";

interface SuggestionListProps {
  suggestions: any[];
  highlight: string;
  dataKey: string;
  onSuggestionClick: (item: any) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
}) => {
  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index} className="text-blue-700">
              {part}
            </b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  return (
    <React.Fragment>
      {suggestions.map((suggestion, index) => {
        const currentSuggestion = dataKey ? suggestion[dataKey] : suggestion;
        return (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-200 rounded-md"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {getHighlightedText(currentSuggestion, highlight)}
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default SuggestionList;
