//one after another in memory

//lookup, push -- O(1)
//insert delete -- O(N)

const strings = ['a', 'b', 'c', 'd',]

//4 variables x 4 shelves each (32bit system) = 16 bytes needed to store array
//ram stores the array in memory and we can access variables

//push
strings.push('e')
//O(1) 

//pop
strings.pop()
console.log(strings)
//O(1)


//unshift
strings.unshift('x')
console.log(strings)
//O(n) -- dependent on size of array
//everything must shift over


//aplice

strings.splice(2, 0, 'alien')
console.log(strings)
//O(n) 
//also depends on the size of the array

//static vs dynamic arrays
//static arrays are fixed 7 shelves
//dynamic arrays will copy and paste if it must be bigger, in a new location
//


class MyArray {
    constructor(){
        this.length = 0
        this.data = {};
    }

    get(index){
        return this.data
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
    }

    shiftItems(index){
        for(let i = index; i< this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}

const newArray = new MyArray()
newArray.push('you')
newArray.push('are')
newArray.push('hello')
newArray.push('ghey')
console.log(newArray)
newArray.delete(2)
console.log(newArray)