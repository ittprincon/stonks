let stockPrices = [];
let buyPrice = stockPrices[0];
let sellPrice = 0;
let profit = 0;
let maxProfit = 0;
//Math.min(...stockPrices.slice())

getMaxProfit(stockPrices);
for (let i = 0; i < stockPrices.length; i++) {
  if (sellPrice < stockPrices[i]) {
    profit = buyPrice - sellPrice;
    if (profit > maxProfit) {
      maxProfit = 0;
    }
    if (stockPrices[i] < buyPrice) {
      buyPrice = stockPrices[i];
    }
  }
}

// getMaxProfits(stockPrices){
// for(i = 0; i < stockPrices.length; i++){
//     checkedNum = stockPrices[i]
//     for (j = i; j < stockPrices.length - i; j++){
//     let placeHold = stockPrices[j] - checkedNum
//     if(placeHold > maxProfit){
//     maxProfit = placeHold
// }
// }
// return maxProfit
// }
// }
