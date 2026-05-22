// • [1] • Longest Consecutive Sequence

let nums = [100, 4, 200, 1, 3, 2];

const longestConsecutive = (nums) => {
  // ----- OPTIMAL SOLUTION -----

  let set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;

  // // ----- BRUTE FORCE SOLUTION -----

  // let longest = 0

  // for (let i = 0; i < nums.length; i++) {
  //     let currentNum = nums[i]
  //     let count = 1

  //     while (nums.includes(currentNum + 1)) {
  //         currentNum++
  //         count++
  //     }

  //     longest = Math.max(longest, count)
  // }

  // return longest
};

console.log(longestConsecutive(nums));

// -------------------------------------------------------------------------

//  Definition for singly-linked list.
  // class ListNode {
  //     val: number
  //     next: ListNode | null
  //     constructor(val: number, next: ListNode | null) {
  //         this.val = (val===undefined ? 0 : val)
  //         this.next = (next===undefined ? null : next)
  //     }
  // }
 

function mergeKLists(lists): ListNode | null {
    
    if (!lists || lists.length === 0) return null

    return mergeRange(lists, 0, lists.length - 1)
};

function mergeRange(lists, left, right) {
    
    if (left === right) return lists[left]

    const mid = Math.floor((left + right) / 2)

    let l1 = mergeRange(lists, left, mid)
    let l2 = mergeRange(lists, mid + 1, right)

    return mergeTwoList(l1, l2)
}

const mergeTwoList = (l1, l2) => {

    let dummy = new ListNode(0)
    let current = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    current.next = l1 || l2

    return dummy.next
}

// -----------[Encode And Decode String]

let str = ["neet","code","love","you"]
let s = "4#neet4#code4#love3#you"

class Solution {
    
        encode(strs) {
        
        let result = ""
        
        for (let str of strs) {
            
            result += str.length + "#" + str
        }
        
        return result
    }
    
    decode(s) {
        
        let result = []
        let i = 0
        
        while (i < s.length) {
            
            let j = i
            
            while (s[j] !== "#") {
                j++
            }
            
            let length = Number(s.slice(i, j))
            
            let str = s.slice(j + 1, j + 1 + length)
            
            // console.log(j + 1 + length)
            result.push(str)
            
            i = j + 1 + length
        }
        
        return result
    }
}

const sol = new Solution()

console.log(sol.encode(str))
console.log(sol.decode(s))

