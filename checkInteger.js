function checkNumber(value){
    if(Number.isInteger(value)){
        if(value > 0)
            return true;
    }
    return false;
}

console.log(checkNumber(-5));