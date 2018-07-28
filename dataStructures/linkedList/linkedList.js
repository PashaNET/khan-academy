class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }

    peekHead() {
        return this.head;
    }
    
    size() {
        return this.length;
    }
    
    add(value) {
        newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        } else {
            this.head.next = newNode;
            this.head = this.head.next;
        }
        this.length++

        return this.head;
    }

    addAt(index, value) {
        if(index < 0 || index > this.length){
            return null;
        }

        let currentNode = this.head,
            currentIndex = 0,
            newNode = new Node(value);

        if(index === 0){
            newNode.next = currentNode;
            this.head = newNode;
        } else {
            while(currentIndex < index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                currenIndex++;
            }
            
            newNode.next = currentNode;
            previousNode.next = newNode;
        }
        this.length++;

        return true;
    }

    // remove(value)
    // removeAt(index)
    // indexOf(value)
    // elementAt(index)

    isEmpty() {
        return this.head == null;
    }
}