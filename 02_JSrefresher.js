const person = {
    name : 'Palak',
    age : 20,
    greet(){
        console.log(`Hi ${this.name}`)
    }
}

// person.greet();

const hobbies = ['Swimming', 'Singing']

// for(let hobby of hobbies){
//     console.log(hobby)
// }

// console.log(hobbies.map(hobby =>{
//     return 'Hobby: ' + hobby
// }))

// console.log(hobbies)



// Spread Operator

// const copiedArray = [...hobbies]
// console.log(copiedArray)

// const copiedObj = {...person}
// console.log(copiedObj)

// Rest operator

// const toArray = (...args) =>{
//     return(args);
// }

// console.log(toArray(1,2,3,4,5))

 
// Destructuring

// const printName = ({name, age})=>{
//     console.log(age);
// }

// printName(person)


// Async and Promises

setTimeout(()=>{
    console.log("Timer is done");
}, 2000)

console.log("Hello")
