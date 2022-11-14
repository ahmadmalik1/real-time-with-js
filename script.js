// creating a time function 

// auto recall after every 1 sec
setInterval(time_func, 1000);

function time_func(){

    var time = new Date();
    var full_time = time.toLocaleTimeString();
    // checking console what we got
    var split = full_time.split(":");
    // console.log(split);

    var hours = split[0];
    var minuts = split[1];
    var seconds = split[2];
    // split again for getting AM and PM
    // console.log(seconds.split(" "));
    var sec = seconds.split(" ");
    
    // now putt in time DIVs

    // hours
    document.getElementById("hours").innerHTML = hours+ "<small>hours</small>";
    // APPLY FOR ALL
    // minuts
    document.getElementById("minuts").innerHTML = minuts+ "<small>minuts</small>";
    // seconds
    document.getElementById("seconds").innerHTML = sec[0]+ "<small>seconds</small>";
    // am pm
    document.getElementById("ampm").innerHTML = sec[1];

}
// now set the date
date_func();
function date_func(){
    var full_date = new Date();
    var day = full_date.getDay();
    var date = full_date.getDate();
    var month = full_date.getMonth();
    var year = full_date.getFullYear();
    // get id from div
    // now make week array and month array
    var week_name = ["Sunday", "Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", "Saturday"];
    var month_name = ["January","February","March",
    "April","May","June","July",
    "August","September","October",
    "November","December"];
    // now putt this in div
    document.getElementById("date").innerHTML =
    week_name[day] + ", " + date + " " + month_name[month]
    + " " + year;
}