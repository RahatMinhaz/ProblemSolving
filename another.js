function deliveryCost(quantity) {
         const firstHundredSales = 100;
         const secondHundredSales = 80;
         const restOfSales = 50;
        //  (Bonus Part) for negative and strings
         if(typeof quantity != 'number'){
             return "Please insert an amount";
         }
         else if(quantity < 0){
             return "Please insert a positive value";
         }
        //  Bonus part ends
         else if(quantity <= 100){
             const count = quantity * firstHundredSales;
             return count;
         }
         else if(quantity <= 200){
             const firstHundredTshirt = 100 * firstHundredSales;
             const restAmount = quantity -100;
            //  Calculating Sales for 101-200 Tshirts
             const secondHundredTshirt = restAmount * secondHundredSales;
            //  First 200 sales
             const total = firstHundredTshirt + secondHundredTshirt;
             return total;
         }
         else{
             const firstHundredTshirt = 100 * firstHundredSales;
             const secondHundredTshirt = 100 * secondHundredSales;
            //  Calculating Sales after 200 sales
             const restAmount = quantity - 200;
             const restOfTshirt = restAmount * restOfSales;
            //  Total sales
             const total = firstHundredTshirt + secondHundredTshirt + restOfTshirt;
             return total;
         }
     }
    
     const amount = deliveryCost(250);
     console.log(amount);