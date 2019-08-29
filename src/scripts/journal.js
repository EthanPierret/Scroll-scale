





const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
   console.log(audrey);
   if (window.scrollY >= 50) {

       

    audrey.style.width = Math.round(window.scrollY/3);
    } else {
     audrey.style.height = 50;
    }


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   if (window.scrollY >= 100) {
    console.log(Math.round(window.scrollY));
   audrey.style.height = Math.round(10);
   audrey.height = 10;
   } else {
    audrey.style.height = 100;
   }

})

    document.querySelector("body").addEventListener("click", function(event) {
        console.log("You clicked on the body of the DOM");
        event.target.classList.add('MyClass');
    })

    /*

    document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');

    */


