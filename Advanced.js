// let show= document.getElementById('show')
// let get= document.getElementById('get')
// let list= document.getElementById('list')
// function getsample(){
//   fetch('people.json')
//   .then(function(response){
//    return response.text()
//   })
//   .then(function(data){
//      list.innerHTML= data
//   })
// }
// show.addEventListener('click', getsample)

// function  getusers(){
//    fetch('people.json')
//    .then(function(response){
//        return response.json()
//    })
   
//    .then(function(data){
//       let output= "<h2> User</h2>"
//       data.forEach(function(user){
//          output+= `
//          <ul>
//            <li>ID: ${user.id} </li>
//          </ul>
//          `
//       })
//     get.innerHTML=output
// })
// }
// get.addEventListener('click', getusers)

// function sum(age, sex, id){
//  return age, sex, id;

// }
// console.log(25, "male", 001)

// function curry(fn){
//    return function(a){
      
//       return function (b){
   
//          return function(c){
           
//             return function (d){
//            return fn(a,b,c,d)
//             }
//          }
//       }
//    }
// }
// let curried=curry(sum)
// console.log(curried(2)(3)(4)(5) )


// function outer(){
//    let counter= 0
//    function inner(){
//       counter++
//       console.log(counter)
//    }
//   return inner;
// }
// let fn= outer()
// fn()
// fn()
// fn()

// function person(first, last){
//    this.fname= first
//    this.lname= last
// }
// let fullname1= new person('Emeka', 'Hastings')
// let fullname2= new person('Uchenna', 'Hastings')
  
// person.prototype.getevery= function(){
//  return 'My name is ' +""+ this.fname +""+ this.lname
// }
// console.log(fullname1.getevery())




// let person={
//    name:'Emeka',
//    Age:25,
//    level:500,
//    sex:'Male',
//    about: function(){
//     return  `We want to know about ${this.name}, we heard he is ${this.Age}`;
//    }
// }
// console.log(person.about())


// function Book(author, year, title){
//    this.author= author,
//    this.year= year,
//    this.title= title
// } 
// Book.prototype.about=  function(){
//    return ` The author of the book is ${this.title} is ${this.author}`;
// }

// Book.prototype.getage= function(){
//    let years= new Date().getFullYear()- this.year

//   return ` The book ${this.title} has been in existence for ${years} years `;
// }

// let book1= new Book('Emeka', 2020, 'Power of the mind',  )
// console.log(book1.getage())

 
//ITERATORS

// let object={
//  [Symbol.iterator]: function(){
//     let step=0
//     let iterator={
//        next: function(){
//           step++
//           if(step===1){
//              return{value: 'Hello', done: false}
//           } else if (step===2){
//             return{value: 'World', done: false}
//           }
          
//        return {value:undefined, done:true}
//        }
//     }
//        return iterator;
   
//  }
// }
//  for(let word of object){
//     console.log(word)
//  }

// GENERATORS 

// function normal(){
// console.log('Hello')
// console.log('World')

// }
// normal()

// function* generator(){
//    yield 'Hello'
//    yield  'World'
// }
// let generatorobj= generator()

// for(let word of generatorobj){
//    console.log(word)
// }

function one(call2){
   console.log('step 1 complete. Pls call step 2')

   call2()
}


   function two( call3){
      console.log('step 2 has beenm called, please call step 3')
   
   }


one(two)


//PROMISES
 let stocks={
    Fruits:[ 'strwbweey', 'mango', 'bannana'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup'],
    toppings: ['chocolate', 'peanut']
 }
 console.log(stocks.holder[0])

let isshopopen= true
 
function order(time, work){
  // Kindly note that the function order encapsulates the template of proise as seen below by return
   return new Promise (function(resolve, reject){
        if(isshopopen===false){
        
         setTimeout(function(){
            resolve(work())
         }, time)

        } else{
           reject(console.log('Sorry our shop is closed'))
        }
   })
}
order(2000, ()=> console.log(`${stocks.Fruits[0]} is the fruit of choice`))

   .then(()=>{

      return order(0000, ()=>{ console.log('Start production')})
   })

   .then(()=>{

      return order(2000, ()=>{ console.log('Chop the fruit')})
   })
   .then(()=>{

      return order(1000, ()=>{ console.log('Add wate and Ice')})
   })
   .then(()=>{

      return order(1000, ()=>{ console.log('Start the machine')})
   })
   .then(()=>{
      return order(2000, ()=>{ console.log(`The customer selected ${stocks.holder[1]} `)})
    })
   .then(()=>{
      return order(3000, ()=>{ console.log(`The customer selected ${stocks.toppings[1]}  `)})
   })

   .then(()=>{
      return order(1000, ()=>{ console.log('Ice cream has been served')})
   })

.catch(()=>{
   console.log('customer left')
})

//Promise templatre
let abi='yes'
let promise= new Promise(function(resolve, reject){
      if(abi==='yes'){
         resolve(console.log('very true'))
      } else{
         reject(console.log('lies'))
      }
})
console.log(promise)













 






















