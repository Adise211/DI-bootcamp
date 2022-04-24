
const theButton = document.getElementById('button');

theButton.addEventListener("click", findSomeone)




//Function for retrive the data from the API + create "p" elements for each infromation :
async function findSomeone () {

	try {
		
		const getDiv = document.getElementById('box');
	  	while (getDiv.firstChild) {
			getDiv.firstChild.remove()
 	 	}
		
		  	
		let number = Math.floor(Math.random() * 85);
		let char = await fetch(`https://www.swapi.tech/api/people/${number}`)

		if (char.status !== 200) {
			throw new Error ('Something went wrong')
			
		} else {
		
			const data = await char.json();
			
			
			const getDiv = document.getElementById('box');
			const name = document.createElement('h2');
			const height = document.createElement('p');
			const gender = document.createElement('p');
			const birthYear = document.createElement('p');
			const home = document.createElement('p');
			getDiv.appendChild(name)
			getDiv.appendChild(height)
			getDiv.appendChild(gender)
			getDiv.appendChild(birthYear)
			getDiv.appendChild(home)

			name.textContent = data['result']['properties']['name'];
			height.textContent = `Height: ${data['result']['properties']['height']}`
			gender.textContent = `Gender: ${data['result']['properties']['gender']}`
			birthYear.textContent = `Birth year: ${data['result']['properties']['birth_year']}`
			home.textContent = `Home: ${data['result']['properties']['homeworld']}`

		 	
			// setTimeout((event) => {
			// 	const getTheDiv = getDiv;
			// 	getTheDiv.style.display = "none"
				
			// } ,2000)
		}

	
	} catch (error) {
		console.log(error.message);
		const getDiv2 = document.getElementById('box');
		const errorP = document.createElement('p');
		getDiv2.appendChild(errorP)
		errorP.textContent = "oh Noo ! that person is not available"

	}	

}








/* For tommorrow 20/04 :
1. Try to retrive the data (proprites) from the response object
2. Match between the "p" to the right propertiy from the response.
3. Check it's really rendom !
3. Display the result on the page.
4. Use CSS and make it look nicer!!! */


