//  problems -1  seerToMon conversition

function seerToMon(seers) {

    // 1 mon equal 40 seers
    mon = seers / 40;

    // Simple Error Message
    if ((typeof seers) != 'number') {
       return("Please Provide A Value Numbers!");
    }
    return mon;
    }
    
// simple Testing Output seersToMon
let inputSeers = 80;
console.log(seerToMon(inputSeers));


// Problems- 2 totalSales of Shirt , Pant ,Shoe

function totalSales(shirts, pants, shoes) {
    
    // Simple Error Message
    if (typeof (shirts && pants && shoes) != 'number') {
        return 'Please Input A valid Number';
    }
    // Total Shirts Price in sale
    let totalShirtsPrice = shirts * 100;

    // Total Pants Price in sale 
    let totalPantsPrice = pants * 200;

    // Total Shoes Price in sale 
    let totalShoesPrice = shoes * 500;

    // Total Sales of shirts, pants,shoes
    let totalSales = totalShirtsPrice + totalPantsPrice + totalShoesPrice;
    return totalSales;
}
// Simple OutPut Total sales 
console.log(totalSales(2, 3, 2));


//  Problems-3 deliveryCost of shirts

function deliveryCost(quantityOfShirt) {

    // declear 3 shirt delevary charge
    const frist100shirtDelivaryCharge = 100;
    const second100shirtDelivaryCharge = 80;
    const restshirtDelivaryCharge = 50;

    //  Simple Error Message
    if (typeof quantityOfShirt != 'number') {
        return 'Enter A Valid Shirt Quantity Number!'
    }

    // Frist 100 shirts delivary Charge 
    else if (quantityOfShirt <= 100) {
        const delivaryCharge = quantityOfShirt * frist100shirtDelivaryCharge;
        return delivaryCharge ;
    }  
    //second100shirtDelivaryCharge 
    else if (quantityOfShirt <= 200) {
        const fristDeliveryChange = 100 * frist100shirtDelivaryCharge;
        const restDelivarycharge = quantityOfShirt - 100;
        const secondDelivaryCharge = restDelivarycharge * second100shirtDelivaryCharge;
        const totalDelivaryCharge = fristDeliveryChange + secondDelivaryCharge;
        return totalDelivaryCharge;
    }
    //  restshirtDelivaryCharge
    else {
        const fristDeliveryChange = 100 * frist100shirtDelivaryCharge;
        const secondDelivaryCharge = 100 * second100shirtDelivaryCharge;
        const restDelivarycharge = quantityOfShirt - 200;
        const restDelivarychargeShirts = restDelivarycharge * restshirtDelivaryCharge;
        const totalDelivaryCharge = fristDeliveryChange + secondDelivaryCharge + restDelivarychargeShirts;
        return totalDelivaryCharge;

    }
}

// Function call and simpleoutput
let inputQuantityShirt = 201;
console.log(deliveryCost(inputQuantityShirt));


//  problem-4 perfectFriend find 5 char name 

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

