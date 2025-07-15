import Node from './Node.js'

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined

        let removedNode = this.top
        this.top = removedNode.next
        removedNode.next = null

        this.length--
        return removedNode
    }
}

const newStack = new Stack(7)
newStack.push(23)
newStack.push(3)
newStack.push(11)

console.log(newStack)