const buttons = document.querySelectorAll('.btn-custom');

//console.log(buttons);

buttons.forEach(item =>{
    item.addEventListener('click', function(){
        alert("Coming soon!");
    })
})