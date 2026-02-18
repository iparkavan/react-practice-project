// • [1] Minimum Subscription Cost with Max Spend

function getMinimumCost(cost, maxSpend) {
  let n = cost.length;
  let low = 0;
  let high = n;
  let bestK = 0;
  let bestCost = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Step 1: compute modified costs
    let modified = [];

    for (let i = 0; i < n; i++) {
      modified.push(cost[i] + (i + 1) * mid);
    }

    // Step 2: sort
    modified.sort((a, b) => a - b);

    // Step 3: sum smallest mid values
    let total = 0;
    for (let i = 0; i < mid; i++) {
      total += modified[i];
    }

    // Step 4: check feasibility
    if (total <= maxSpend) {
      bestK = mid;
      bestCost = total;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return [bestK, bestCost];
}
