
const form = document.forms.myform;
form.addEventListener('submit',submitForm)

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];


function submitForm (e) {
   
    // Retrive the values from the inputs inside the form
    e.preventDefault();
    
    const name = form.elements.name.value;
    const desc = form.elements.text.value; 
    const start = form.elements.startdate.value;
    const end = form.elements.enddate.value; 
    
    // Send the values to the local storage + o
    if (name != '' && desc != '' && start != '' && end != '') {
        
        
        
    
        // pressing add
        const button = document.getElementById('mybutton');
        button.addEventListener('click', function () {

            window.location.href = 'file:///Users/jessesaidoff/Desktop/DI/w6/d5/showtasks.html';
            
            let object = {
                task : name,
                description : desc,
                startdate : start,
                enddate : end
            };

            allTasks.push(object)

            localStorage.setItem("Task", JSON.stringify(allTasks))  

           
        })
        
        
        // pressing add
        // const button = document.getElementById('mybutton');
        // button.addEventListener('click',function (e){
            
        //     window.location.href = 'file:///Users/jessesaidoff/Desktop/DI/w6/d5/showtasks.html';
        // })

        
        

        
        
      


    } else {
        console.log('missed something');
        let body = document.body;
        let p = document.createElement('p');
        p.classList.add('note')
        p.innerText = 'Please fill the missing detail !'
        body.appendChild(p);
    }

    

    

}





