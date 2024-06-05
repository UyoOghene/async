// function to if it is a right angle triangle using pythagoras theory

function multiply(x,y){
  return x*y;
}

function square(f){
   return multiply(f,f);
}

function isRightTriangle(a,b,c){
   if(square(a)+ square(b) === square(c)){
    return true;
   }else{
    return false;
   }  
}

// setTimeout(function(){
//     document.body.style.backgroundColor = 'red';
//     setTimeout(function(){
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(function(){
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(function(){
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(function(){
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(function(){
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(function(){
//                             document.body.style.backgroundColor = 'violet';
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)



// const delayedColorChange = function(newColor, delay ,donext){
//     setTimeout(() => {
//        document.body.style.backgroundColor = newColor;
//         donext();
//     },delay)
// }

// delayedColorChange('lightred', 1000 , () => {
//     delayedColorChange('lightblue', 1000 , () => {
//         delayedColorChange('lightgreen', 1000 , () => {
//             delayedColorChange('yellow', 1000 , () => {
//                 delayedColorChange('lightpink', 1000 , () => {
//                     delayedColorChange('lightpurple', 1000 , () => {
//                     })
                
//                 })
            
//             })
        
//         })
    
//     })
// })



// // Map method Example, unrelated to this folder
// function mult(num){
//    return num*2;
// }
// const numbers = [65, 44, 12, 4];
// const newNumbers = numbers.map(mult);
// console.log(newNumbers);



// // Create a Promise Object
// let myPromise = new Promise(function(myResolve, myReject) {
//     result = true;
  
//   // Code that might take some time goes here
  
//     if (result == true) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   // Using then() to display result
//   myPromise.then(x => myDisplay(x), x => myDisplay(x));
  
//   // Funtion to run when the Promise is settled:
//   function myDisplay(some) {
//     console.log(some)
//     document.getElementById("text").innerHTML = some;
//   }

// const fakePromise = (url) => {
//     return new Promise((resolve,reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if(delay > 4000) {
//                 reject('connection timeout')
//             } else {
//                 resolve(`Here is your fake data from ${url}`  )
//             }
//         },delay)
//     })
// }

// fakePromise('yelp.com/api/coffee/page1')
//     .then( ()=> {
//         console.log('promise resolved');
//         fakePromise('yelp.com/api/coffee/page2')
//             .then( ()=> {
//                 console.log('promise resolved page2');  
//             })
//             .catch( ()=> {
//             console.log('promise rejected paghe2')
//             }) 

// })
// .catch( ()=> {
//     console.log('promise rejected');
// })

// fakePromise('yelp.com/api/coffee/page1')
// .then((data) => {
//     console.log('it worked');
//     console.log(data);
//     return fakePromise('yelp.com/api/coffee/page1');
// })
// fakePromise('yelp.com/api/coffee/page2')
// .then((data) => {
//     console.log('it worked');
//     console.log(data);
//     return fakePromise('yelp.com/api/coffee/page2');
// })
// fakePromise('yelp.com/api/coffee/page3')
// .then((data) => {
//     console.log('it worked');
//     console.log(data);
//     return fakePromise('yelp.com/api/coffee/page3');
// })
// .catch((err) => {
//     console.log(err);
//     console.log('Failed request');
// })

// creating promises
// new Promise((resolve, reject) => {
//     resolve();
// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//        const rand = Math.random();
//        setTimeout(() =>{
//         if(rand < 0.7){
//             resolve('yor fake data here');
//         } else{
//             reject('request error');
//         }
//        },1000) 
//     })
// }

// fakeRequest('/dogs/1');
//     .then((data) => {
//         console.log('it worked');
//         console.log(data);
//         return fakeRequest('/dogs/1');
//     })
//     .catch((err) => {
//         console.log('Nope', err);
//     })


function colorchange(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

colorchange('red',1000)
 .then(() => colorchange('orange',1000))
 .then(() => colorchange('yellow',1000))
 .then(() => colorchange('blue',1000))
 .then(() => colorchange('green',1000))
 .then(() => colorchange('yellow',1000))
 .then(() => colorchange('indigo',1000))
 .then(() => colorchange('violet',1000))


 async function sing(){
    throw new Error('oops');
    return 'bla bla bla';
 }

 sing()
 .then((data) => {
    console.log('promise resolved with'+ data);
 })

 sing()
 .then(data => {
    console.log('promise resolved')
    console.log(data)
 })
 .catch(err => {
    console.log('promise rejected');
    console.log(err)
 })

 const login = async(username, password) => {
    if(!username || !password) throw 'missing credentials';
    if(password === 'meeeee') return 'welcome'
 }

 login('ssskkk', 'meeeee')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log(err, 'ERRor')
    })