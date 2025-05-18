class ListNode<T> {
  public next?: ListNode<T>; // link to the next item that will also be a ListNode, make it optional in the event there isnt a next node by adding the '?'
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private length: number = 0;

  // add new value
  add(value: T) {
    const node = new ListNode(value); // create a new node
    if (!this.root) {
      // if there is no root node, then set this root to the new node
      this.root = node;
    } else {
      // if we do have a root node already, update the last node of this list of nodes
      let current = this.root;
      // go through all the nodes that I have in the linked list
      while (current.next) {
        // keep going until we find a node where its 'next' value is undefined
        current = current.next;
      }
      // on the last node, set 'next' value to the variable 'node'
      current.next = node;
    }
    this.length++;
  }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();
