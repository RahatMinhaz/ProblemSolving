// 1st Task

// function seerToMon(seer){
//     var mon = seer/40;
//     if(mon <= 0){
//         return "please insert a positive value";
//     }
//     else{
//         return mon;
//     }
// }
// var mon = seerToMon(-30);
// console.log(mon);

// 2nd task

// function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
//     const perShirtCost = 100;
//     const perPantCost = 200;
//     const perShoeCost = 500;
//     // Calculating Products
//     const shirtSalesTotal = shirtQuantity * perShirtCost;
//     const pantSalesTotal = pantQuantity * perPantCost;
//     const shoeSalesTotal = shoeQuantity * perShoeCost;
//     // Adding All Sales
//     const total = shirtSalesTotal + pantSalesTotal + shoeSalesTotal;
//     // For Negative Values
//     if(shirtQuantity <= 0 || pantQuantity <= 0 || shoeQuantity <= 0){
//         return "Invalid input"
//     }
//     else{
//     return total;
//     }
// }

// const firstOption = totalSales(12,8,4);
// console.log(firstOption);


// 3rd Task

// function deliveryCost(quantity) {
//     const firstHundredSales = 100;
//     const secondHundredSales = 80;
//     const restOfSales = 50;
//     if(quantity <= 0){
//         return "Please insert a positive amount";
//     }
//     else if(quantity <= 100){
//         const count = quantity * firstHundredSales;
//         return count;
//     }
//     else if(quantity <= 200){
//         const firstHundredTshirt = 100 * firstHundredSales;
//         const restAmount = quantity -100;
//         const secondHundredTshirt = restAmount * secondHundredSales;
//         const total = firstHundredTshirt + secondHundredTshirt;
//         return total;
//     }
//     else{
//         const firstHundredTshirt = 100 * firstHundredSales;
//         const secondHundredTshirt = 100 * secondHundredSales;
//         const restAmount = quantity - 200;
//         const restOfTshirt = restAmount * restOfSales;
//         const total = firstHundredTshirt + secondHundredTshirt + restOfTshirt;
//         return total;
//     }
// }

// const amount = deliveryCost(-187);
// console.log(amount);

// 4th Task

// function perfectFriend(friends) {
//     for (const friend of friends) {
//         if(friend.length == 5){
//             return friend;
//         }
//     }
// }

// const friends = ['Muhaimin' , 'Ahad' , 'Ismail' , 'Rahat' , 'Niloy' , 'Pallab'];
// const names = perfectFriend(friends);
// console.log(names);