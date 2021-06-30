//Method 1

let stri = 44

const reverse = (str) => {

    if(!str || str.length < 2 || typeof str !== String){
        'Invalid input'
    }

    //split string into array
    let newArray = str.split('')
    //reverse
    newArray.reverse()
    //join
    let reversed = newArray.join('')

    console.log(reversed)
}

reverse(stri)


//Method 2

