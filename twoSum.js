let target = 12
let nums = [1, 2, 3, 5, 6, 7]


const twoSum = (arr, targ) =>{

    let set = {}

    for(i=0; i< arr.length; i++){
        let current = arr[i]
        let needed = target- current
        index2 = set[needed]

        if(index2 !=null){
            return [index2, i]
        }

        set[current] = i

    }

}

console.log(twoSum(nums, target))