const btn=document.getElementById("btn1");
btn.addEventListener("click",function handleClick(event){ 
    event.preventDefault();
    const name1=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("pass").value;
    console.log("button clicked - work.js:7");
    console.log(name1,email,password);
}
);
btn.addEventListener("click",function click(event){});