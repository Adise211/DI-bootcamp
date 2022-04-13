// Exercise 1: Conversion
/*
Convert the below promise into async await:  */

fetch("https://swapi.dev/api/starships/9/")
   .then(response => response.json())
   .then(result => console.log(result));      

async function sameThing() {
	let first = await fetch("https://swapi.dev/api/starships/9/")
	try {
		if (first.status === 200) { 
		 	console.log(first.json());
		} else {
			throw new Error("404")
		}

	} catch (err) {
		console.log(err.message);	
	}
}

sameThing();





// Exercise 2: Analyze
/* Analyze the code provided above what will be the outcome? */


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Exepted outcome :
// 'calling' 
// 'resolved' - will be diplayed after 2 seconds

