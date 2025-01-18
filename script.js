let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); //by using querySelectorAll it gets all of the buttons 

let string = "";

let arr = Array.from(buttons);   //it gives array of all the buttons which are stored in arr variable ........ 
                                // Here Array is a class and from is the function 
                                //for each loop not works on buttons thats why we have created arr

arr.forEach(button =>{              //'=>' -arrow function or we can use callback function 
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);          // 'eval' - its is inbuilt fun in js which is gives the evalute value  inside the string
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";                         //empty string will be shown when we click on the AC button
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0 , string.length-1); //to remove the last digit alabrt //substring function
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})                               