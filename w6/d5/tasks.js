
// --- Display all the tasks ---
const box = document.getElementById('box');
let isCompleted = false;

const storage = JSON.parse(localStorage.getItem("Task"));


function diplayOnPage () {
    
    storage.forEach(element => {
        
        // console.log(element.task);
        // console.log(element.description);
        // console.log(element.startdate);
        // console.log(element.enddate);

        // Create html elements 
        const div = document.createElement('div');
        div.classList.add('each');
        div.innerText = element.task
        

        // Task name
        const p1 = document.createElement('p');
        p1.innerText = `Name : ${element.task}`
        div.appendChild(p1);

        // Starting date
        const p2 = document.createElement('p');
        p2.innerText = `Starting date: ${element.startdate}`
        div.appendChild(p2);

        // How many days left to complete the task
        const oneDay = 24 * 60 * 60 * 1000;      // hours*minutes*seconds*milliseconds
        const firstDate = new Date(element.startdate);
        const secondDate = new Date(element.enddate);

        const daysLeft = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        


        const p3 = document.createElement('p');
        p3.innerText = `Days left to complete the task: ${daysLeft}`
        div.appendChild(p3);
        


        // --- Make each task clickable ---
        div.addEventListener('dblclick',function () {
           
            // double click to show description
            const p4 = document.createElement('p');
            p4.innerText = `Description: ${element.description}`
            p4.classList.add('descrip')
            div.appendChild(p4);
            
            div.addEventListener('dblclick',function (e) {
                p4.remove();
    
            })

        })

        


       // --- Make to each task checkbox ---
       
       const input = document.createElement('input');
       input.setAttribute('type','checkbox')
       input.setAttribute('name',element.task)
       input.setAttribute('value',isCompleted)
       div.appendChild(input);
       
       // completed --> green
       const done = document.createElement('button')
       done.innerText = 'Completed'
       done.classList.add('yes')
       done.addEventListener('click', function () {
           input.checked = true
           div.style.backgroundColor = 'lightgreen'
       })
       div.appendChild(done);
       

       // not completed --> red
       const notDone = document.createElement('button')
       notDone.innerText = 'Not completed'
       notDone.classList.add('no')
       notDone.addEventListener('click', function () {
           input.checked = false
           div.style.backgroundColor = '#E76B50'
       })
       div.appendChild(notDone);

    
       

    

       // --- Delete the task ---
       const deleteTask = document.createElement('button');
       deleteTask.innerText = 'X'
       deleteTask.classList.add('deletetask')
       div.appendChild(deleteTask);

       deleteTask.addEventListener('click',function () {
           let userSay = confirm('Are you sure you want to delete the task ?')
           if (userSay == true) {
               div.remove();
               localStorage.removeItem('Task');
           } else {
               alert('You saved the task from been deleted !')
           }

       })



       // -- Edit the task ---
       const editTask = document.createElement('button')
       editTask.innerText = 'Edit'
       editTask.classList.add('edittask')
       div.appendChild(editTask)

       editTask.addEventListener('click', function (e) {
            window.location.href = 'file:///Users/jessesaidoff/Desktop/DI/w6/d5/mini-project.html'  
       })
       

        

       
       

        box.appendChild(div);


    });


}




diplayOnPage();
















/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input> */



