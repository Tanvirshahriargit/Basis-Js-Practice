function animalCount(miles) {
    const animaleDestycityFrist10Miles = 10;
    const animaleDestycitySecond10Miles = 50;
    const animaleDestycityrestMiles = 100;
    if (miles <= 10) {
        const count = miles * animaleDestycityFrist10Miles;
        return count;
    }
    else if (miles <= 20) {
        const fristDensAnimal = 10 * animaleDestycityFrist10Miles;
        const restMiles = miles - 10;
        const seconDensAnimal = restMiles * animaleDestycitySecond10Miles;
        const totalAnimal = fristDensAnimal + seconDensAnimal;
        return totalAnimal;
    }
    else {
        const fristDensAnimal = 10 * animaleDestycityFrist10Miles;
        const seconDensAnimal = 10 * animaleDestycitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimal = restMiles * animaleDestycityrestMiles;
        const totalAnimal = fristDensAnimal + seconDensAnimal + restDenseAnimal;
        return totalAnimal;

    }
}
console.log(animalCount(35));