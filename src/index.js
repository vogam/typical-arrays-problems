
exports.min = function min (array) {
    if  ( typeof(array) === 'undefined' || array.length === 0) return 0;
    let result = Infinity;
    for(let i = 0; i<array.length; i++){
        if (array[i] < result){
        result = array[i]
    }
        }
     return result;
}

exports.max = function max (array) {
   if  ( typeof(array) === 'undefined' || array.length === 0) return 0;
    let result = -Infinity;
    for(let i = 0; i < array.length; i++){
        if(array[i] > result)
            {
                result = array[i]
            }
    }
    return result;
}

exports.avg = function avg (array) {
   if  ( typeof(array) === 'undefined' || array.length === 0) return 0;
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i]
    }
    return (result/ array.length).toFixed(2);
}
