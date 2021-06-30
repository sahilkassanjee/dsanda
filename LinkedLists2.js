//side note:
//always do checks of values to make sure it is valid

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
        
        insert(index, value){
            //check params
            if(index >= this.length){
                return this.append(value)
            }
            
        }
}


myLinkedList = new LinkedList(18)

myLinkedList.append(4)
myLinkedList.append(6)
myLinkedList.insert(8, 7)

console.log(myLinkedList)