console.log('Hello');

async function displayJson () {
    try {

        const info = await fetch('http://localhost:5000/home/');
        // console.log(info);

        if (info.status === 200) {
            const data = await info.json();
            console.log(data);
        
        } else {
            throw new Error('Not working')
        }

    } catch (error) {
        console.log('error')

    }
}

displayJson();


// EXERCISE 3:
const button = document.getElementById('mybutton');
button.addEventListener('click', () => {
    alert('YES ! you clicked me, now I am happy')
})