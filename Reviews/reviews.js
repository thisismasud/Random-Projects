const reviews = [
	{
		id: 1,
		name: "Carlos Brathwait",
		job: "Web Developer",
		img: 
			"https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
		text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
	},
	{
		id: 2,
		name: "Sumon Patwari",
		job: "App Developer",
		img: 
			"https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
		text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
	},
	{
		id: 3,
		name: "Angelina Myth",
		job: "UX Developer",
		img: 
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
		text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
	},
	{
		id: 4,
		name: "Peter Parker",
		job: "Web Developer",
		img: 
			"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
		text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim  "
	}
]
//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItems = 0;
window.addEventListener("DOMContentLoaded", () =>{
	showPerson();
})
function showPerson(){
	const items = reviews[currentItems];
	img.src = items.img;
	author.textContent = items.name;
	job.textContent = items.job;
	info.textContent = items.text;
}
nextBtn.addEventListener("click", ()=>{
	currentItems++;
	if(currentItems > reviews.length -1 ){
		currentItems = 0;
	}
	showPerson();
})
prevBtn.addEventListener("click", ()=>{
	currentItems--;
	if(currentItems < 0 ){
		currentItems = reviews.length - 1;
	}
	showPerson();
})
randomBtn.addEventListener("click", () => {
	currentItems = Math.floor(Math.random() * reviews.length)
	showPerson();
})
