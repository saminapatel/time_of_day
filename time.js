var today = new Date();
var hourNow = today.getHours();

//First declare the DOM styling for the images
var timeOfDay = document.querySelector('.day');

document.querySelector('.day').addEventListener('load', function(){

    //If the hourNow is greater than 18, the evening image will pop up with a message called good evening
    if (hourNow >= 18){
        timeOfDay.src = 'evening.jpg';
        document.querySelector('.message').textContent = 'Good Evening';
    }
    //Else if hourNow > 12, afternoon image will pop up with a message called good afternoon
    else if (hourNow > 12){
        timeOfDay.src = 'afternoon.jpg';
        document.querySelector('.message').textContent = 'Good Afternoon';
    } //else if hourNow > 0, then morning image will pop up with Message good morning.

    else if(hourNow > 0){
        timeOfDay.src = 'morning.jpg';
        document.querySelector('.message').textContent = 'Good Morning';
    }   

});