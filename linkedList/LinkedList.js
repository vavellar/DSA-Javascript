import Node from './Node.js'
class LinkedList {
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
            this.tail = newNode
        }
        this.length++
    }

    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let pre = this.head

        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode; 
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return null
        const removed = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }
        this.length--
        return removed
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined
        let temp = this.head 


        for (let i = 0 ; i < index; i++) {
            temp = temp.next
        }

        return temp

    }

    set(index, value) {
        const node = this.get(index)

        if (node) {
            node.value = value
            return true
        }

        return false

    }

    insert(index, value) {
        if (index === 0)  return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return false
        const newNode = new Node(value)
        let prev = this.get(index - 1)
        newNode.next = prev
        prev.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.shift()
        if (index === this.length -  1) return this.pop()

        const prev = this.get(index - 1)
        const removed = prev.next

        prev.next = removed.next
        this.length--
        return removed
    }

    // LeetCode Questions

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }

        return this
    }

    findMiddleNode() {
        let slow = this.head
        let fast = this.head
        
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow
    }

    hasLoop() {
        let slow = this.head
        let fast = this.head

        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next

            if (slow === fast) return true
        }

        return false
    }

     findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;
 
        for (let i = 0; i < k; ++i) {
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }
 
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }
 
        return slow;
    }

    removeDuplicates() {
        const values = new Set();
        let previous = null;
        let current = this.head;
        while (current !== null) {
            if (values.has(current.value)) {
                previous.next = current.next;
                this.length -= 1;
            } else {
                values.add(current.value);
                previous = current;
            }
            current = current.next;
        }
    }

    binaryToDecimal() {
        let current = this.head
        let sum =  0
        while(current) {
            sum = sum * 2 + current.value;
            current = current.next
        }

        return sum
    }

    partitionList(value) {
        let d1 = new Node(null)
        let d2 = new Node(null)

        let prev1 = d1
        let prev2 = d2

        for (let i = 0; i < this.length; i++) {
            if (this.head.value < value) {
                d1.next = this.head
                prev1 = d1.next
            } else {
                d2.next = this.head
                prev2 = d2.next
            }
            this.head = this.head.next
        }
        
    }

    swapPairs() {
        let dummyNode = new Node('D')
        dummyNode.next = this.head
        let previous = dummyNode
        let first = this.head

        while(first && first.next) {
            const second = first.next
            previous.next = second

            first.next = second.next
            second.next = first
            
            previous = first
            first = first.next
        }
        
        this.head = dummyNode.next
       
    }

}

let newLinkedList = new LinkedList(1)
newLinkedList.push(2)
newLinkedList.push(3)
newLinkedList.push(4)
newLinkedList.push(5)

newLinkedList.swapPairs()