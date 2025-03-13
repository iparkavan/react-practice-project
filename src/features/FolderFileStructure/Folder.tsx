import { Explorer } from "@/app/folder-file-structure/page";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

const Folder = ({
  explorer,
  handleInsertNode,
  handleDeleteFolder,
  handleUpdateFolder,
}: {
  handleInsertNode: (id: string, name: string, isFolder: boolean) => void;
  explorer: Explorer;
  handleUpdateFolder: (id: string, name: string) => void;
  handleDeleteFolder: (id: string) => void;
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const [newName, setNewName] = useState(explorer.name);
  const [isEditing, setIsEditing] = useState(false);
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

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDeleteFolder(explorer.id);
  };

  const onUpdateHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.keyCode === 13 && newName) {
      handleUpdateFolder(explorer.id, newName);
      setIsEditing(false);
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
            <div className="flex items-center">
              <span>{isExpand ? "📂" : "📁"}</span>
              {isEditing ? (
                <input
                  type="text"
                  value={newName}
                  autoFocus
                  onKeyDown={(e) => onUpdateHandler(e)}
                  onBlur={() => setIsEditing(false)}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNewName(e.target.value)
                  }
                />
              ) : (
                <span>{explorer.name}</span>
              )}
            </div>
            <div className="space-x-3 flex items-center justify-between">
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
              <button
                className="text-xs border p-1 rounded-lg bg-gray-100"
                onClick={(e) => setIsEditing(true)}
              >
                Update
              </button>
              <button
                className="text-xs border p-1 rounded-lg bg-gray-100"
                onClick={(e) => deleteHandler(e)}
              >
                Delete -
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
                handleDeleteFolder={handleDeleteFolder}
                handleUpdateFolder={handleUpdateFolder}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="my-2 flex items-center justify-between">
          <div className="flex items-center justify-between">
            <span>📄</span>
            {isEditing ? (
              <input
                type="text"
                value={newName}
                autoFocus
                onKeyDown={(e) => onUpdateHandler(e)}
                onBlur={() => setIsEditing(false)}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewName(e.target.value)
                }
              />
            ) : (
              <span> {explorer.name}</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-3">
            <button
              className="text-xs border p-1 rounded-lg bg-gray-100"
              onClick={(e) => setIsEditing(true)}
            >
              Update
            </button>
            <button
              className="text-xs border p-1 rounded-lg bg-gray-100"
              onClick={(e) => deleteHandler(e)}
            >
              Delete -
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Folder;
