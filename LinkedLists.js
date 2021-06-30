//javascript doesn't have linked lists
//java has linked lists


//Why are linked lists better than hash tables or arrays?
//Arrays are indexed, linked lists are traversed
//linked lists have more order than hashtables


//prepend O(1)
//append O(1)
//lookup O(n)
//insert O(n)

//Pointers
//reference to another node

const obj1 = {a: true}
const obj2 = obj1
obj1.a = 'booya' //onj2 will also be booya since it references obj1

//obj2 is a reference to obj1
//this is a pointer

console.log(obj1, obj2)



//10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next:{
//             value: 5,
//             next:{
//                 value: 15,
//                 next: null
//             }
//         }
//     }
// }


class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

        append(value){
           const newNode = new Node(value)

            this.tail.next = newNode
            this.tail = newNode
            this.length++
            return this
        }

        prepend(value){
            const newNode = new Node(value)

            newNode.next = this.head
            this.head= newNode
            this.length++
            return this
        }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList)
myLinkedList.append(16)
console.log(myLinkedList)


myLinkedList.append(32)
console.log(myLinkedList)

myLinkedList.prepend(1)
console.log(myLinkedList)
