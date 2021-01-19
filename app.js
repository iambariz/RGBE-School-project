const buttons = document.querySelectorAll('.btn-custom');



//console.log(buttons);

buttons.forEach(item =>{
    item.addEventListener('click', function(e){
        e.preventDefault(); //Prevent refresh site on click
        alert("Coming soon!");
    })
})

