function perfectFriend(friends) {
         for (const friend of friends) {
            //  Condition for friend with 5 letters
             if(friend.length == 5){
                 return friend;
             }                        
         }
         return "no friend";
     }
     const friends = ['Muhaimin' , 'Ahad' , 'Ismail' , 'Rahat' , 'Niloy' , 'Pallab'];
     var names = perfectFriend(friends);
     console.log(names);