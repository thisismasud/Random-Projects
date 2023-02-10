//Class
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear()
    }
    clear(){
     this.currentOperand = '';
     this.previousOperand = '';
     this.operation = undefined   
    }
    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand + this.operation;
        this.currentOperand = ''
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break;
            case "-":
                computation = prev - current
                break;
            case '×':
                computation = prev * current
                break;
            case '÷':
                computation = prev / current
                break;
            default: 
                return
        }
        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = undefined
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}



//Selectors
const allClearButton = document.querySelector('[data-all-clear]')
const dataDelete = document.querySelector('[data-delete]')
const operationButtons = document.querySelectorAll('[data-operation]')
const numberButtons = document.querySelectorAll('[data-number]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//Declaring object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
	button.addEventListener("click", ()=>{
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay()
	})
})
operationButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay()
    })
})
dataDelete.addEventListener("click", ()=>{
    calculator.delete()
    calculator.updateDisplay()
})
allClearButton.addEventListener("click", ()=>{
    calculator.clear()
    calculator.updateDisplay()
})
equalsButton.addEventListener("click", ()=>{
    calculator.compute()
    calculator.updateDisplay()
})

let value = 2
console.log(value + " hello")