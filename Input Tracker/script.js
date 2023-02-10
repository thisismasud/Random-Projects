const reset = document.querySelector(".reset-btn")
const submit = document.querySelector(".submit-btn")
const pName = document.querySelector(".name")
const input = document.querySelector(".input")
const paragraph = document.querySelector(".paragraph")

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    if(input.value !== ""){
        pName.innerText = input.value;
        paragraph.style.display = "block";
        input.value = '';
    }else{
        alert("Please input your name");
        return false;
    }      
})
reset.addEventListener("click", (e)=>{
    paragraph.style.display = "none";
    pName.innerText = "";
});
