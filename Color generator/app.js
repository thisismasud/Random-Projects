
const root = document.querySelector(".container");
const inputField = root.querySelector("#input-field");
const inputField2 = root.querySelector("#input-field2");
const copyBtn = document.querySelector(".copy-btn");
const copyBtn2 = document.querySelector(".copy-btn2");
const changeBtn = root.querySelector(".change-btn");
const colorOutput = root.querySelector(".colorOutput");
const colorOutput2 = root.querySelector(".colorOutput2");

const message = document.querySelector(".message");

//Event listener here for change button..
changeBtn.addEventListener("click", function(){
    const color = getColorDecimal()
    let rgbColor = getRGBColor(color);
    let hexColor = getHexColor(color);
    hexColor.substring(1);
	document.body.style.backgroundColor = `#${hexColor}`;
    inputField.value = hexColor;
    inputField2.value = rgbColor;
    colorOutput.style.backgroundColor = `#${hexColor}`;
    colorOutput2.style.backgroundColor = rgbColor;

    message.classList.remove('active')
})

//Creating event listener for clicking of copy function
copyBtn.addEventListener("click", ()=>{
    if(isHexValid(inputField.value)){
        navigator.clipboard.writeText(`#${inputField.value}`);
        message.classList.add('active')
        setTimeout(function(){
            message.classList.remove('active')
        }, 4000)
    }else{
        alert("Invalid color code")
    }
})
copyBtn2.addEventListener("click", ()=>{
    navigator.clipboard.writeText(inputField2.value);
        message.classList.add('active')
        setTimeout(function(){
            message.classList.remove('active')
        }, 4000)
})

inputField.addEventListener("keyup",(e)=>{
    const color = e.target.value;
    if(color && isHexValid(color)){
        document.body.style.backgroundColor = `#${color}`;
        colorOutput.style.backgroundColor = `#${color}`;

        const mycolor = getColorDecimal()
        let rgbColor = getRGBColor(mycolor);
        inputField2.value = rgbColor;
        colorOutput2.style.backgroundColor = rgbColor;
        console.log(colorOutput2)

    }
})

function getColorDecimal(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return{
        red,
        green,
        blue
    }
}
//Color getting function
function getHexColor({red, green, blue}){
    //const {red, green, blue} = getColorDecimal()
    const getTwoCode = (value) =>{
        const hex = value.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }
    return `${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
}
function getRGBColor({red, green, blue}){
    //const  = getColorDecimal()
    return `rgb(${red}, ${green}, ${blue})`;
}

//Creating a hex code validator function to check keyup value on inputField
function isHexValid(color){
    if(color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color)  
}
