function bestFriend(friends) {
    for (let friend of friends) {
        // simple Error Message
        if(typeof friend != 'string') {
            return "Enter A Valid  String!";
        }
        // check friend qual to 5 char
        else if (friend.length == 5) {
            return friend;
        }
    }
    
}

// Function call and simpleoutput
let friends = ["Ts", "Sho", "jami", "Ram", "Sal", "Rule", "Yasin", "Hridoy", "Abir", "Mehedi"];
console.log(bestFriend(friends));