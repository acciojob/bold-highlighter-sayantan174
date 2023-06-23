function highlight() {
    //Write your code here
	let s = document.querySelectorAll('p>strong');
	s.forEach((ele)=>{
		ele.className = "high";
	})
	// console.log(s);
	// return false;
}


function return_normal() {
    //Write your code here
	let s = document.querySelectorAll('p>strong');
		s.forEach((ele)=>{
			ele.className = "def";
		})
    
}