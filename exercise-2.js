const btn_increment=document.querySelector("#increment");
btn_increment.addEventListener("click",(event)=>{
    let val = parseInt(document.querySelector("#displayNumber").value);
    val--;
    document.querySelector("#displayNumber").value=val;
});

const btn_decrement=document.querySelector("#decrement");
btn_decrement.addEventListener("click",(event)=>{
    let val = parseInt(document.querySelector("#displayNumber").value);
    val++;
    document.querySelector("#displayNumber").value=val;
});