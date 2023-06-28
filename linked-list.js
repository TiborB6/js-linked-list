function nodeFactory(value, index) {
  return {
    value,
    index,
    nextNode: null
  };
}

function linkedListFactory() {
  const linkedList = {
    head: null,
    tail: null,
    length: 0
  };

  return {
    append(value) {
      linkedList.length++
      const index = linkedList.length
      const newNode = nodeFactory(value, index)

      if (linkedList.head === null) {
        linkedList.head = newNode
        linkedList.tail = newNode
        linkedList.head.nextNode = linkedList.tail
      } else {
        linkedList.tail.nextNode = newNode
        linkedList.tail = newNode
      }
    },

    prepend(value) {
      linkedList.length++
      const newNode = nodeFactory(value, 1)
      let currentNode = linkedList.head
      const oldNode = linkedList.head
      while (currentNode !== null) {
        currentNode.index++
        currentNode = currentNode.nextNode
      }

      if (linkedList.head === null) {
        linkedList.head = newNode
        linkedList.tail = newNode
        linkedList.head.nextNode = linkedList.tail
      } else {
        linkedList.head = newNode
        linkedList.head.nextNode = oldNode
      }
    },

    pop () {
      if (linkedList.head === null) return
      if (linkedList.head === linkedList.tail) {
        linkedList.head = null
        linkedList.tail = null
      } else {
        let currentNode = linkedList.head
        while (currentNode.nextNode !== linkedList.tail) {
          currentNode = currentNode.nextNode
        }
        currentNode.nextNode = null
        linkedList.tail = currentNode
      }
      linkedList.length--
    },

    size() {
      return linkedList.length
    },

    at(index) {
      let neededValue = null;
      function search(node) {
        if (index === node.index) {
          neededValue = node.value
        }

        if (node.nextNode === null) return
        search(node.nextNode)
      }
      search(linkedList.head)
      return neededValue
    },

    contains(value) {
      let currentNode = linkedList.head;
      while (currentNode !== null) {
        if (currentNode.value.toString() === value.toString()) {
          return true
        }
        currentNode = currentNode.nextNode
      }
      return false
    },

    find(value) {
      let currentNode = linkedList.head;
      while (currentNode !== null) {
        if (currentNode.value.toString() === value.toString()) {
          return currentNode.index
        }
        currentNode = currentNode.nextNode
      }
      return null
    },


    toString() {
      let outputString = ''
      let currentNode = linkedList.head;
      const indexArr = []
      for (let i = 0; i < linkedList.length; i++) {
        outputString += `( ${currentNode.value} ) -> `
        indexArr.push(currentNode.index)
        if (currentNode.nextNode === null) {
          outputString += 'null'
        } else {
          currentNode = currentNode.nextNode
        }
      }

      console.log(outputString)
      console.log(indexArr)
    }
  };
}
