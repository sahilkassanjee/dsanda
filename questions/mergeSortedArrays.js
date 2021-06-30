let array1 = [1, 10, 3, 5, 7]
let array2 = [2, 4, 6, 8]

const mergeSort = (arr1, arr2) => {

    let arr3 = arr1.concat(arr2).sort( (a,b) =>{
        return (a-b)
    })

    console.log(arr3)
}

// const mergeSort = (arr1, arr2) => {

//     const mergedArray = [];

//     let array1Item = arr1[0]
//     let array2Item = arr2[0]

//     //check input

// if(arr1.length === 0){
//     return arr1
// }
// if(arr2.length === 0){
//     return arr2
// }

//     while(array1Item || array2Item){

//     }
//     return mergedArray
    
// }

mergeSort(array1, array2)