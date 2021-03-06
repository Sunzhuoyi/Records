/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.data = {}
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0) return -1
    var curr = this.data
    for (let i= 0; i< index; i++) {
        if (!curr.next) return -1;
        curr = curr.next
    }
    return curr.val=== undefined || curr.val === null ? -1 : curr.val

};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if (this.data && !(this.data.val === null || this.data.val === undefined)) {
        this.data = {val, next: this.data}
    }else {
        this.data = {val, next: null}
    }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let curr = this.data;
    while(curr.next) {
        curr = curr.next
    }
    console.log(47, curr)
    curr.next = {val, next: null}
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index <= 0) return this.addAtHead(val)
    let curr = this.data
    for (let i = 0; i < index - 1; i++ ) {
        if (!curr || !curr.next) return null
        curr = curr.next
    }
    if (!curr.val && curr.val !== 0) return null
    curr.next = {val, next:curr.next}
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0) return null;
    if (index === 0) return this.data = this.data.next
    let curr = this.data;
    for (let i = 0; i < index -1; i++) {
        if (!curr.next || !curr.next.next) return null
        curr = curr.next
    }
    if (!curr.next) return null
    if (!curr.next.next) return curr.next = null
    curr.next = curr.next.next
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();
obj.addAtHead(1)
obj.addAtIndex(1, 2)
obj.addAtTail(4)
console.log(99, JSON.stringify(obj))