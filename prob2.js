function totalSales(shirts, pants, shoes) {
    
    // simple Error 
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