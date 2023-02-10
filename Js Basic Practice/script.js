

// const myAge = "Eight years old."
// const country = "Canada";

// //startsWith method
// if(myAge.startsWith("Eight")){
//     console.log(true)
// }

// //endsWith Method
// if(country.endsWith("Canada")){
//     console.log(true)
// }else{
//     console.log(false)
// }

// //repeat method
// let myName = "My name is Khan";
// console.log(myName.repeat(5))


// //includes Method
// if(myAge.includes("years")){
//     console.log(true)
// }

// //this keyword
// const lexical = {
//     afunc: function(){
//         console.log(this);
//         return () => console.log(this)
//     }
// }
// lexical.afunc()();

// const myObj = { 
//     name: "Rakib",
//     id: 01,
//     country:"BD",
//     mainId: {
//         name: "Sakib",
//         id: 02,
//         country:"BD",
//         anotherId: {
//             name: "Sumon",
//             id: 03,
//             country:"NZ",
//         }
//     }
// }

// const {mainId: {anotherId: {name}}} = myObj;
// console.log(name)



// let myObj = {
//     name: "Wasid Hossain",
//     job: "student"
// }

// Object.preventExtensions(myObj);
// myObj.age = 24;
// console.log(myObj.age)


// myObj.age = 26;
// console.log(myObj.age)
//it just a simple keyboard test

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // let anotherArr = [];
// // for(let i = 0; i < arr.length; i++){
// //     if((arr[i] % 2) == 0){
// //         anotherArr.push(arr[i])
// //     }
// // }
// // console.log(anotherArr)

// // function getSquare(item){
// //    return item * item
// // } 
// let newArr = arr.map(item =>{
//     return item * item 
// })


// console.log(newArr)

const hasMeeting = false;
const meeting = new Promise((resolve, reject) =>{
    if(!hasMeeting){
        const meetingDetails = {
            name: "General Meeting",
            topic: "Zoom",
            time: "9:00 PM"
        };
        resolve(meetingDetails);
    }else{
        reject(new Error("There is already a meeting") )
    }
})
meeting.then((res)=>{
    console.log(JSON.stringify(res))
}).catch((err) =>{
    console.log(err)
})
console.log("hello")