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
console.log(deliveryCost(201));