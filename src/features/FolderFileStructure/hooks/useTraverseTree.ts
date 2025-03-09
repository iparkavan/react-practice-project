import { Explorer } from "@/app/folder-file-structure/page";

const useTraverseTree = () => {
  const memo = new Map<string, Explorer>(); // Cache for DP

  const insertNode = (
    tree: Explorer,
    folderId: string,
    item: string,
    isFolder: boolean
  ): Explorer => {
    // If subtree is already processed, return cached result
    if (memo.has(tree.id)) {
      return memo.get(tree.id)!;
    }

    let newTree;

    if (tree.id === folderId) {
      newTree = {
        ...tree,
        items: [
          {
            id: new Date().getTime().toString(),
            name: item,
            isFolder,
            items: [],
          },
          ...tree.items,
        ],
      };
    } else {
      newTree = {
        ...tree,
        items: tree.items.map((obj: Explorer) =>
          insertNode(obj, folderId, item, isFolder)
        ),
      };
    }

    // Store result in cache before returning
    memo.set(tree.id, newTree);
    return newTree;
  };

  return { insertNode };
};

export default useTraverseTree;

// import { Explorer } from "@/app/folder-file-structure/page";

// const useTraverseTree = () => {
//   const insertNode = (
//     tree: any,
//     folderId: string,
//     item: any,
//     isFolder: boolean
//   ) => {
//     if (tree.id === folderId) {
//       return {
//         ...tree,
//         items: [
//           { id: new Date().getTime(), name: item, isFolder, items: [] },
//           ...tree.items,
//         ],
//       };
//     }

//     return {
//       ...tree,
//       items: tree.items.map((obj: Explorer) =>
//         insertNode(obj, folderId, item, isFolder)
//       ),
//     };
//   };

//   return { insertNode };
// };

// export default useTraverseTree;
