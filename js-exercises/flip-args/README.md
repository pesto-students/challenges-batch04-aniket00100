# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function () {
  console.log(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**

- Palindrome check
- Reversing an array

### **What test cases can you add to the test file?**

- Test if the inputs are reversed and returned in the proper order inside an array.

# Restrictions

- Don't use any libraries
