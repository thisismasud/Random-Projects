/**
 * Date: 08.1.23
 * Editor: Masud Parvez
 * Description: Color picker application with DOM functionalities
 */

//Gloabals
let toastContainer = null;

//onload hadler
window.onload = () => {
    main();
}

//main function- it will take care of DOM references.
function main(){
    //dom references


    //event listeners
    
}

//event handlers

// DOM functions
/**
 * Generate a dynamic DOM element to show a toast message
 * @param {string} msg
 */
function generateToastMessage(msg) {
	toastContainer = document.createElement('div');
	toastContainer.innerText = msg;
	toastContainer.className = 'toast-message toast-message-slide-in';

	toastContainer.addEventListener('click', function () {
		toastContainer.classList.remove('toast-message-slide-in');
		toastContainer.classList.add('toast-message-slide-out');

		toastContainer.addEventListener('animationend', function () {
			toastContainer.remove();
			toastContainer = null;
		});
	});

	document.body.appendChild(toastContainer);
}

/**
 * find the checked elements from a list of radio buttons
 * @param {Array} nodes
 * @returns {string | null}
 */


/**
 * update dom elements with calculated color values
 * @param {object} color : ;
 */


// Utils

/**
 * generate and return an object of three color decimal values
 * @returns {object}}
 */


/**
 * take a color object of three decimal values and return a hexadecimal color code
 * @param {object} color
 * @returns {string}
 */

/**
 * take a color object of three decimal values and return a rgb color code
 * @param {object} color
 * @returns {string}
 */
function getRGBColor({red, green, blue}){
    //const  = getColorDecimal()
    return `rgb(${red}, ${green}, ${blue})`;
}


/** Convert hex color to decimal colors object
 * @param {string} hex
 * @returns {object}
 */
function hexToDecimalColors(hex){
	const red = parseInt(hex.slice(0, 2), 16);
	const green = parseInt(hex.slice(2, 4), 16);
	const blue = parseInt(hex.slice(4, 6), 16);

	return {
		red, 
		green,
		blue
	}
}

/**
 * validate hex color code
 * @param {string} color;
 * @returns {boolean}
 */
function isHexValid(color){
    if(color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color)  
}



console.log("hello")
