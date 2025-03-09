// _______________________Method 1_____________________

import { Explorer } from "@/app/folder-file-structure/page";

const useTraverseTree = () => {
  const memo = new Map<string, Explorer>(); // Cache for DP

  const insertNode = (
    tree: Explorer,
    folderId: string,
    item: string,
    isFolder: boolean
  ): Explorer => {
    // Get the latest stored version from memo (if available)
    const cachedTree = memo.get(tree.id) || tree;

    if (cachedTree.id === folderId) {
      const updatedTree = {
        ...cachedTree,
        items: [
          {
            id: new Date().getTime().toString(),
            name: item,
            isFolder,
            items: [],
          },
          ...cachedTree.items,
        ],
      };

      // Update memo before returning
      memo.set(folderId, updatedTree);
      return updatedTree;
    }

    // Recursively update children, ensuring we use cached values if they exist
    const updatedTree = {
      ...cachedTree,
      items: cachedTree.items.map((obj) =>
        insertNode(memo.get(obj.id) || obj, folderId, item, isFolder)
      ),
    };

    // Store updated subtree in memo
    memo.set(updatedTree.id, updatedTree);
    return updatedTree;
  };

  const deleteNode = (tree: Explorer, itemId: string) => {
    if (!tree) return null;

    const updatedItems: Explorer[] = tree.items
      .filter((item) => item.id !== itemId)
      .map((item) => memo.get(item.id) || deleteNode(item, itemId))
      .filter((item): item is Explorer => item !== null);

    const updatedTree = { ...tree, items: updatedItems };

    memo.set(tree.id, updatedTree);
    return updatedTree;
  };

  console.log(memo);

  return { insertNode, deleteNode };
};

export default useTraverseTree;

// ____________________Mehod 2____________________

// import { Explorer } from "@/app/folder-file-structure/page";

// const useTraverseTree = () => {
//   const memo = new Map<string, Explorer>(); // Cache for DP

//   const insertNode = (
//     tree: Explorer,
//     folderId: string,
//     item: string,
//     isFolder: boolean
//   ): Explorer => {
//     // If subtree is already processed, return cached result
//     if (memo.has(tree.id)) {
//       return memo.get(tree.id)!;
//     }

//     let newTree;

//     if (tree.id === folderId) {
//       newTree = {
//         ...tree,
//         items: [
//           {
//             id: new Date().getTime().toString(),
//             name: item,
//             isFolder,
//             items: [],
//           },
//           ...tree.items,
//         ],
//       };
//     } else {
//       newTree = {
//         ...tree,
//         items: tree.items.map((obj: Explorer) =>
//           insertNode(obj, folderId, item, isFolder)
//         ),
//       };
//     }

//     // Store result in cache before returning
//     memo.set(tree.id, newTree);
//     return newTree;
//   };

//   return { insertNode };
// };

// export default useTraverseTree;

// ____________________Mehod 3____________________

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
