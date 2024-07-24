class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Convert array to linked list
    arrayToLinkedList(arr) {
        if (!arr.length) return;
        this.head = new Node(arr[0]);
        let current = this.head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i]);
            current = current.next;
        }
    }

    // Add a node at the beginning
    addAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add a node at the end
    addAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
    }

    // Delete a node with specified value
    deleteNode(key) {
        let current = this.head;
        
        // If the node to be deleted is the head
        if (current && current.data === key) {
            this.head = current.next;
            current = null;
            return;
        }

        let prev = null;
        while (current && current.data !== key) {
            prev = current;
            current = current.next;
        }

        if (!current) {
            console.log(`Node with value ${key} not found.`);
            return;
        }

        prev.next = current.next;
        current = null;
    }

    // Insert a node after a node with specified data
    insertAfter(prevNodeData, newData) {
        let current = this.head;
        while (current && current.data !== prevNodeData) {
            current = current.next;
        }
        if (!current) {
            console.log(`Node with value ${prevNodeData} not found.`);
            return;
        }
        const newNode = new Node(newData);
        newNode.next = current.next;
        current.next = newNode;
    }

    // Insert a node before a node with specified data
    insertBefore(nextNodeData, newData) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        if (this.head.data === nextNodeData) {
            const newNode = new Node(newData);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current && current.data !== nextNodeData) {
            prev = current;
            current = current.next;
        }
        if (!current) {
            console.log(`Node with value ${nextNodeData} not found.`);
            return;
        }
        const newNode = new Node(newData);
        newNode.next = current;
        prev.next = newNode;
    }

    // Print all elements in order
    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data + " -> ";
            current = current.next;
        }
        console.log(output + "None");
    }

    // Helper function to print elements in reverse
    _printReverse(node) {
        if (!node) return;
        this._printReverse(node.next);
        process.stdout.write(node.data + " -> ");
    }

    // Print all elements in reverse order
    printReverseList() {
        this._printReverse(this.head);
        console.log("None");
    }

    // Remove duplicates from a sorted list
    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    // Reverse the linked list
    reverseList() {
        let prev = null;
        let current = this.head;
        while (current) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
    }
}