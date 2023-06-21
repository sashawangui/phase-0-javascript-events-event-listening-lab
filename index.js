/*For the below, commented-out code, it (the anonymous callback function)
would only work where we need to call it once, if we need to 
call it more than once we'd have to rewrite the code which is 
tiring and repetitive*/

// addEventListener(() =>
// {
//     const input = document.getElementById("input")
//     input.addEventListener("click", ()=>{
//         alert("I was clicked!")
//     })
// })

// addEventListener()



/* if we were to use it more than once we'd need to create
a seperate named function that we can call whenever a specific 
action (Event!) occurs */
function addEventListener(){
    const input = document.getElementById('input');

    function clickAlert() {
      alert('I was clicked!');
    }
input.addEventListener('click', clickAlert);
}
addEventListener()
