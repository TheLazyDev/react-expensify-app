const promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('this is my resolved data');
            // reject('Something went wrong');
        },5000)
      
})

console.log('before');
promise.then((data)=>{
   console.log('1',data);
   return new Promise((resolve,reject)=>{
    
            setTimeout(()=>{
                resolve('this is my other resolved data');
                // reject('Something went wrong');
            },5000)
          
    })
    
}).then((d)=>{
  console.log('data',d)
})
 .catch((e)=>{
  console.log('error: ',e)
})

// promise.then((data)=>{
//     console.log('2',data);
//  })
console.log('after');