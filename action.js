/* create a submit variable that can be used later
create a variable that links to the ul element so that 
we can and the dad joke as a list item*/
let getJoke = $("#submit");
let unorderedList = $(".list");
// alert('If your Dad went to go get milk and never came back, dont worry this sight will provide you will all the Dad jokes that you need.')
// let jokeList = unorderedList.append($("<li></li>"))
// create a jquery that when you click the button will generate a random dad joke
getJoke.click(function(){
$.ajaxSetup({
    headers:{
        Accept: "application/json"
    }
})   

$.get("https://icanhazdadjoke.com/", function(data){
   //console logged this so that i can see that the information 
   // i am requesting is showing properly, i am getting the joke
    // console.log(data['joke'])
    //what i want to do now is add that text of the joke to the
    //unordered list in html
    //i will now create a variable that will hold the joke
    let theJoke = data['joke']
    unorderedList.append(`<li>${theJoke}</li>`)
})
})
//creating a function for the button that will clear
// all the dad jokes that have been randomly created
$("#clear").click(function(){
    unorderedList.empty()
})
