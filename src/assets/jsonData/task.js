function filterOneMax(numbers){
    return numbers.reduce(function(max, current){
        return max < current ? max : current;
    })
}

let numbers = [1,75,234,9,0,13]

console.log(filterOneMax(numbers))