const quotes = [    
    "The future belongs to those who believe in the beauty of their dreams.",    
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",    
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "You miss 100% of the shots you don’t take.",
    "Believe you can and you’re halfway there."
]

const quotesText = document.querySelector(".quote");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    let index = random();
    quotesText.innerText = quotes[index];
    
})
function random(){
    return Math.floor(Math.random() * quotes.length);
}