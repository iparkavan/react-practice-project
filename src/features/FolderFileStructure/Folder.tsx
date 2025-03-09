import { Explorer } from "@/app/folder-file-structure/page";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

const Folder = ({
  explorer,
  handleInsertNode,
}: {
  handleInsertNode: (id: string, name: string, isFolder: boolean) => void;
  explorer: Explorer;
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visble: false,
    isFolder: null as boolean | null,
  });

  const handleNewFolder = (
    e: React.MouseEvent<HTMLButtonElement>,
    isFolder: boolean
  ) => {
    e.stopPropagation();

    setIsExpand(true);

    setShowInput({
      visble: true,
      isFolder,
    });
  };

  const onAddFolder = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && (e.target as HTMLInputElement).value) {
      // Add new folder or file logic
      handleInsertNode(
        explorer.id,
        (e.target as HTMLInputElement).value,
        showInput.isFolder ?? false
      );
      setShowInput((prev) => ({ ...prev, visble: false }));
    }
  };

  return (
    <>
      {explorer.isFolder ? (
        <div className="my-2">
          <div
            className="cursor-pointer flex items-center justify-between"
            onClick={() => setIsExpand((prev) => !prev)}
          >
            <div>
              <span>{isExpand ? "📂" : "📁"}</span>
              <span>{explorer.name}</span>
            </div>
            <div className="space-x-3">
              <button
                className="text-xs border p-1 rounded-lg bg-gray-100"
                onClick={(e) => handleNewFolder(e, true)}
              >
                Folder +
              </button>
              <button
                className="text-xs border p-1 rounded-lg bg-gray-100"
                onClick={(e) => handleNewFolder(e, false)}
              >
                File +
              </button>
            </div>
          </div>

          {/* Nested Child */}
          <div
            className={`pl-5 border-l overflow-hidden transition-all duration-300 ${
              isExpand ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {showInput.visble && (
              <div>
                {showInput.isFolder ? "📁" : "📄"}
                <input
                  type="text"
                  onBlur={() =>
                    setShowInput((prev) => ({ ...prev, visble: false }))
                  }
                  onKeyDown={onAddFolder}
                  autoFocus
                  className="border rounded-lg m-1 p-1"
                />
              </div>
            )}

            {explorer.items.map((item, index) => (
              <Folder
                key={item.id}
                handleInsertNode={handleInsertNode}
                explorer={item}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="m-2">
          <span>📄</span>
          <span> {explorer.name}</span>
        </div>
      )}
    </>
  );
};

export default Folder;
