# **Emergency Hotline**

---

## ✅ The answers to the questions given for Assignment Five are provided below.👇

### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<table style="width:100%">
    <tr style="background-color:#151B23;">
        <th style="width:25%">getElementById</th>
        <th style="width:25%">getElementsByClassName</th>
        <th style="width:25%">querySelector</th>
        <th style="width:25%">querySelectorAll</th>
    </tr>
    <tr style="background-color:#0D1117">
        <td>An element can be found using in Id.</td>
        <td>All elements with the same className can be found.</td>
        <td>It returns the very first element found in the document.</td>
        <td>It returns all the elements found in the document.</td>
    </tr>
    <tr style="background-color:#0D1117">
        <td>When I check with typeof, it shows object in the console. This means it returns an object.</td>
        <td>When I check with typeof, it returns an array-like object.</td>
        <td>As a selector, have to use a CSS selector. For example: #idName, .className, tagName</td>
        <td>As a selector, have to use a CSS selector. For example: #idName, .className, tagName</td>
    </tr>
    <tr style="background-color:#0D1117">
        <td></td>
        <td>It returns an HTMLCollection.</td>
        <td></td>
        <td>It returns an HTMLCollection.</td>
    </tr>
</table>

---

### How do you create and insert a new element into the DOM?

1. First, the parent div needs to be selected.
2. A new element needs to be created.
3. It has to be inserted using `parentElement.appendChild()`.

An example is given below.👇

```bash
const parentElement = document.getElementById("parent-element");
const childElement = document.createComment("element-name");
parentElement.appendChild(childElement);
```

---

### What is Event Bubbling and how does it work?

Event Bubbling is a process where, when an event occurs on an element of a web page, the event first acts on that element. Then it moves to the parent element, then to the next parent element, and so on, eventually reaching the Document.

---

### What is Event Delegation in JavaScript? Why is it useful?

By using Event Delegation, an event listener can be added to a parent element to handle events occurring on its children. As a result, there is no need to add separate event listeners to each child.

#### Advantages:

-   Performance improves
-   Events of dynamic elements can also be handled
-   Less code is required

---

### What is the difference between preventDefault() and stopPropagation() methods?

<table style="width:100%">
    <tr >
        <th style="width:50%">preventDefault()</th>
        <th style="width:50%">stopPropagation()</th>
    </tr>
    <tr >
        <td>It is used to prevent the default behavior on an element.</td>
        <td>It is used to stop event bubbling. &nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
</table>
