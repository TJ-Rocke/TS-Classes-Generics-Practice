"use strict";
class ListNode {
    value;
    next; // link to the next item that will also be a ListNode, make it optional in the event there isnt a next node by adding the '?'
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail; // track last node
    length = 0;
    // add new value
    add(value) {
        const node = new ListNode(value); // create a new node
        if (!this.root || !this.tail) {
            // if there is no root node, then set this root to the new node
            this.root = node;
            this.tail = node;
        }
        else {
            // if we do have a root node already, update the last node of this list of nodes
            // let current = this.root;
            // go through all the nodes that I have in the linked list
            // while (current.next) {
            //   // keep going until we find a node where its 'next' value is undefined
            //   current = current.next;
            // }
            this.tail.next = node;
            this.tail = node;
            // on the last node, set 'next' value to the variable 'node'
            // current.next = node;
        }
        this.length++;
    }
    getLength() {
        return this.length;
    }
    // display every value in the linked list
    print() {
        let current = this.root; // assign current to the root node
        while (current) {
            // loop until current is "falsy"
            console.log(current.value);
            current = current.next; // update until 'undefined'
        }
    }
}
const numberList = new LinkedList();
numberList.add(19);
numberList.add(5);
numberList.add(3);
console.log(numberList.getLength());
numberList.print();
const nameList = new LinkedList();
