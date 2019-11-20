let stockPrices = [];
let buyPrice = 0;
let sellPrice = stockPrices[0];
let profit = sellPrice - buyPrice;
getMaxProfit(stockPrices){
for(let i = 0; i < stockPrices.length; i++){
    while(sellPrice < stockPrices[i]){
        sellPrice = stockPrices[i]
    }

}
}
