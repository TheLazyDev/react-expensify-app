console.log('App is running');



// const person = {
//     name: 'TEST',
//     age: 26,
//     location: {
//         city: 'Jalandhar',
//         temp: 15
//     }
// }

//  const {name: firstName = 'test', age} = person;
//  const {city, temp: temperature} = person.location

// console.log(`${firstName} is ${age}`);

// console.log(`Its ${temperature} in ${city}`);



// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: "Penguin"
//     }
// }



// const {name: publisherName = 'Self Published'} = book.publisher;





// console.log(publisherName);



// const address = ['1299 S Juniper Street','Jalandhar', "Punjab", "144003"]

// const [, city, state = "Test"] = address;

// console.log(`You are in ${state}`);




const item = ['Coffee (hot)','$2.00','$2.50','$2.75']


const [coffee, ,mediumCupPrice] = item;

console.log(`A medium ${coffee} costs ${mediumCupPrice}`);


