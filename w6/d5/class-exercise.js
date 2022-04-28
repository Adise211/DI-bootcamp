

// will click the  button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions

let theButton = document.getElementById('mybutton');

theButton.addEventListener('click',() => {
    let section = document.getElementById('container');
    let para = document.createElement('p');
    para.innerText = "New Paragraph"
    section.appendChild(para)

    para.addEventListener('mouseover', (e) => {
        e.target.style.color = 'red';

    });

    para.addEventListener('mouseout', (e) => {
        e.target.style.color = 'black'
    });

});








// Task number 24 :
/*
1. Create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
2. Make sure to use try and catch */


async function fetchTheData () {

    try {
        let response = await fetch('https://catfact.ninja/fact');
        if (response.status !== 200) {
            throw new Error ('Something wrong');
        } else {
            return await response.json();
            // console.log(data['fact']);
            
        }

   
    } catch (error) {
        console.log(error.message);
    }
  }



async function displayAll() {
    
    let first = await fetchTheData();
    

    let show = first['fact'];
    console.log(show);

    const box = document.getElementById('box');
    const h2 = document.createElement('h2');
    h2.innerText = `Facts about cats: ${show}`;
    h2.style.color = "lightcoral"
    box.appendChild(h2)
}

displayAll();