import Node from './Node.js'

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined

        const removedNode = this.tail;

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.previous
            this.tail.next = null
            removedNode.previous = null
        }
        this.length--
        return removedNode
    }

    unshift(value) {
        const newNode = new Node(value)
        
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        const removedNode = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.previous = null
            removedNode.next = null
        }
        this.length--
        return removedNode
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined
        let temp = this.head 


        if (index < this.length/2) {
            for (let i = 0 ; i < index; i++) {
                temp = temp.next
            }
        }  else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.previous
            }
        }
        
        

        return temp
    }

    set(index, value) {
        if (index >= this.length || index < 0) return undefined
        let temp = this.get(index)

        if (temp) {
            temp.value = value
            return true
        }

        return false

    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) {
            return this.push(value)
        }

        if (this.length === 0) {
            return this.unshift(value)
        }

        const newNode = new Node(value)

        let temp = this.get(index)

        const prevNode = temp.previous;

        prevNode.next = newNode;
        newNode.previous = prevNode;

        newNode.next = temp;
        temp.previous = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.shift()
        if (index === this.length -  1) return this.pop()

        let removedNode = this.get(index)

        let pre = removedNode.previous
        let nextNode = removedNode.next
        pre.next = nextNode
        nextNode.previous = pre
        

        this.length--
        return removedNode

    }

    isPalindrome() {
        if (this.length <= 1) return true;

        let front = this.head;
        let back = this.tail;

        for (let i = 0; i < Math.floor(this.length / 2); i++) {
            if (front.value !== back.value) {
                return false;
            }
            front = front.next;
            back = back.previous;
        }

        return true;
    }

    reverse() {
        let current = this.head
        let temp = null
        
        while(current) {
            temp = current.previous
            current.previous = current.next

            current.next = temp
            current = current.previous
            
        }
        temp = this.head
        this.head = this.tail
        this.tail = temp

        return this
    }

    partitionList(x) {
        // If the list is empty, there's nothing to partition
        if (!this.head) return;
    
        // Create two dummy nodes for two partitions
        const dummy1 = new Node(0); // for nodes < x
        const dummy2 = new Node(0); // for nodes >= x
    
        // Pointers to build each new list
        let prev1 = dummy1;
        let prev2 = dummy2;
    
        // Start from the head of the original list
        let current = this.head;
    
        // Traverse the original list
        while (current !== null) {
            // Save the next node before detaching
            const nextNode = current.next;
    
            // Disconnect current node from original list
            current.next = null;
            current.prev = null;
    
            // If value is less than x, add to first list
            if (current.value < x) {
                prev1.next = current;
                current.prev = prev1;
                prev1 = current;
            } 
            // Otherwise, add to second list
            else {
                prev2.next = current;
                current.prev = prev2;
                prev2 = current;
            }
    
            // Move to the next node
            current = nextNode;
        }
    
        // Terminate the second list
        prev2.next = null;
    
        // Combine both lists
        prev1.next = dummy2.next;
        if (dummy2.next) {
            dummy2.next.prev = prev1;
        }
    
        // Set the new head of the combined list
        this.head = dummy1.next;
    
        // Ensure the head has no prev pointer
        if (this.head) {
            this.head.prev = null;
        }
    }



}

const newDoublyLinkedList = new DoublyLinkedList(3)
newDoublyLinkedList.push(7)
newDoublyLinkedList.push(8)
newDoublyLinkedList.push(9)
newDoublyLinkedList.push(11)
newDoublyLinkedList.push(1)
newDoublyLinkedList.push(2)
newDoublyLinkedList.push(5)
