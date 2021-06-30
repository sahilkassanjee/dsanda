//objects, maps, dictionaries
//arrays have an index and value
//objects have a key and value
//key is the way to value using a hash function


/*

if we have 10000 grapes

grapes --> hash function ---> 10000

*/



/*What is a hash function 

a function that generates a fixed length value for every input
ONE WAY - can't find the key with a hash output
same input - same output (indempotent)

hash functions have optimized code to run fast

*/


// insert, lookup, delete, search are all O(1)


let user ={
    age: 54,
    name: 'kylie',
    magic: true,
    scream: () =>{
        console.log('ahhh')
    }
}

console.log(user.scream())


//collisions

/* a hash function can store 2 values in the same location, this is 
known as a collision

values --> hash function -- bucket
multiple people in bucket

collisions result in O(n) 


*/