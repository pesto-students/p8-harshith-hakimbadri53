// Problem 6.4 : Best time to buy and sell stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock andchoosing a
// different day in the future to sell that stock.
// Return the maximum profit youcan achieve from this transaction.
// If you cannot achieve any profit, return 0.
// Example 1: Input: prices = [7,1,5,3,6,4] Output: 5
// Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling onday 1 is not allowed because you must buy before you sell.

const stockPrices = [2, 1, 2, 0, 1];
// [7, 1, 5, 3, 6, 4];

const getMaxProfit = (arr) => {
  if (arr.length <= 1) return 0;

  let maxProfitSoFar = 0;
  let buy = arr[0];
  let sell = 0;
  let currentProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < buy && i !== arr.length - 1) {
      buy = arr[i];
    } else {
      sell = arr[i];
      currentProfit = sell - buy;
      maxProfitSoFar = Math.max(maxProfitSoFar, currentProfit);
    }
  }

  return maxProfitSoFar;
};

console.log(getMaxProfit(stockPrices));

// Time complexity O(N)
// Space complexity O(1)
