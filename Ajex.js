
let movie_y=document.getElementById("Year")
let countr = document.getElementById("cont")
let mvie_Actor=document.getElementById("Actor_id")
let M=document.getElementById("movie")

let xyz=document.getElementsByClassName("box");
let xhr = new XMLHttpRequest();
let sum=document.getElementById("submit")
sum.onclick = function(){
	let valueall = document.getElementById("input").value;
	
	xhr.open("GET","https://www.omdbapi.com/?t="+valueall+"&apikey=281f1660");
	xhr.onloadend = postAjaxFunction;
	xhr.send();
	
};				
let postAjaxFunction = function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
       
        
        let movie_name = response.Title;
       	M.innerHTML = "Movie:" +movie_name
        
        let movie_year = response.Year;
       	movie_y.innerHTML = "Year: " +movie_year

        
       	let country_name = response.Country;
       	countr.innerHTML = "Country:" +country_name 
       	
		let d1 = response.Actors;
       	 mvie_Actor.innerHTML = "Actors:" +d1
        
     
    } else {
        xyz[0].innerHTML = "Something went wrong.";
    }
}; 

