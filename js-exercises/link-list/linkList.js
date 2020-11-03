import LinkListNode from './linkListNode';
// const LinkListNode = require('./linkListNode');

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newHead = new LinkListNode(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  append(value) {
    const newNode = new LinkListNode(value);
    if (!this.head) this.head = newNode;
    else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  delete(value) {
    // node to delete is the head node
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    // for every other node
    let previousNode = this.head;
    let currentNode = this.head.next;
    while (currentNode) {
      if (currentNode.value === value) {
        previousNode.next = currentNode.next;
        break; // doing this to remove only the first occurence of value
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      // eslint-disable-next-line no-console
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  length() {
    let listLength = 0;
    if (!this.head) {
      return listLength;
    }
    let currentNode = this.head;
    while (currentNode) {
      listLength += 1;
      currentNode = currentNode.next;
    }
    return listLength;
  }
}
