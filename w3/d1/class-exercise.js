// 1. The div DOM node?
//first way
let getToDiv = document.body.children[0]

// second way
let getToDiv2 = document.body.firstElementChild


// 2. The ul DOM node?
// first way :
let getInToUl = document.body.children[1];

// second way :
let getInToUl2 = document.body.lastElementChild


// 3.  The second li (with Pete)?
// first way:
let getInLi = document.body.children[1].children[1]

// second way:
let getInLi2 = document.body.lastElementChild.lastElementChild