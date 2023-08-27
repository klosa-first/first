const array1 = [1, 3, 7, 9]
  const array2 = [1, 2, 3, 4, 5, 6, 7]
  const array3 = [
    [1, 2, 3],
    [7, 8, 9],
    [11, 12, 13]
  ]

  const array4 = [
    {
      number : 1,
      name : "one"
    },
    {
      number : 7,
      name : "seven"
    },
    {
      number : 13,
      name : 'thirteen'
    },
    {
      number : 9,
      name : 'nine'
    }
  ]


function differenceInArray (){
    const array1 = [1, 3, 7, 9]
    const array2 = [1, 2, 3, 4, 5, 6, 7]
    const arr = array2.filter(d => !array1.includes(d))
    return arr
}

differenceInArray()


function oddNumber () {
    const array2 = [1, 2, 3, 4, 5, 6, 7];

    let odd = array2.filter(n => n%2);
    return odd
}

oddNumber()


function concatArray (){
   

    var newArray = Array.prototype.concat.apply([], array3);
    return newArray
}

concatArray();


function compareArray() {

    if(newArray.includes(1) ){
        return 1
    } 
    if(newArray.includes(7)){
        return 7
    }
    if(newArray.includes(13)){
        return 13
    }
    if(newArray.includes(9)){
        return 9
    }
    else{
        return "Number not in array4"
    }

}

compareArray()


function lowestNumber () {
    const array2 = [1, 2, 3, 4, 5, 6, 7];

    const min = array2.reduce((a, b) => Math.min(a, b));
    return min
}

lowestNumber()