function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
         const perShirtCost = 100;
         const perPantCost = 200;
         const perShoeCost = 500;
        //   Calculating Products
         const shirtSalesTotal = shirtQuantity * perShirtCost;
         const pantSalesTotal = pantQuantity * perPantCost;
         const shoeSalesTotal = shoeQuantity * perShoeCost;
        //   Adding All Sales
         const total = shirtSalesTotal + pantSalesTotal + shoeSalesTotal;
        // (Bonus part) For String and Negative Values
         if(typeof shirtQuantity == 'string' || typeof pantQuantity == 'string' || typeof shoeQuantity == 'string'){
            return "There's an error because you didn't put number in one of the inputs";
         }
         if(shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0){
            return "Invalid input";
        }
        // Bonus part ends
         else{
            return total;
         }
     }
    
     const mySales = totalSales(0,4,0);
     console.log(mySales);