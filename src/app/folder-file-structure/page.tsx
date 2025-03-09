"use client";

import explorer from "@/data/folderData";
import Folder from "@/features/FolderFileStructure/Folder";
import useTraverseTree from "@/features/FolderFileStructure/hooks/useTraverseTree";
import React, { useState } from "react";

export interface Explorer {
  id: string;
  name: string;
  isFolder: boolean;
  items: Explorer[];
}

const FolderFileStructure = () => {
  const [explorerData, setExplorerData] = useState<Explorer>(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (
    folderId: string,
    item: string,
    isFolder: boolean
  ) => {
    setExplorerData((prev) => insertNode(prev, folderId, item, isFolder));
  };

  return (
    <div className="w-80">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default FolderFileStructure;
