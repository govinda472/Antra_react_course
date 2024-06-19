// must know Array
// forEach, filter, map, find, includes, join, pop, push, reduce, sort
// slice, reverse

// must know Array

const arr1=[1,2,3,4,5,6,7,8]
// forEach,
arr1.forEach((num) => {
    console.log(num);
})

// filter
const arr2=[9,10,11,12,13,14,15,16]

function isEven(value) {
    if(value%2==0){
        return true;
    }
    else{
        return false;
    }
}

const result=arr2.filter(isEven);
console.log(result);

// map
const map_result=arr1.map((num)=> num ** 3);
console.log(map_result);

//find
const find_result=arr2.find((num)=> num>13);
console.log(find_result);

//includes
const number=25;
const includes_result=arr1.includes(number);
console.log(includes_result);

//join
const word=["the","cow", "ate", "the","grass"];
const join_result=word.join(" ");
console.log(join_result);
//slice
console.log(word.slice(1,3));
//pop
console.log(word.pop());
console.log(word);

//push
console.log(word.push("moo"));
console.log(word);

//reduce
function sum(prev,next){
 return prev+next;   
}
const s=arr1.reduce(sum);
console.log(s);

//sort
const dic=["hey", "apple", "iphone", "map","book"];
dic.sort();
console.log(dic);

// reverse
console.log(dic.reverse());

// other useful ones
// some, every, findIndex,
//some
const even = (element) => element % 2 === 0;
console.log(arr1.some(even))

//every
const postive= (element) => element>0;
console.log(arr1.every(postive))

//FindIndex
const idx= (element) => element%2===0;
console.log(arr1.findIndex(idx));