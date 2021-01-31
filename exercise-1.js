const button=document.querySelector('#exercise-button-1');
button.addEventListener('click',event => 
{
    event.target.value++;
});