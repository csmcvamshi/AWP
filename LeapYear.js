function LeapYear(){
    let year = parseInt(document.getElementById("year").value);
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("leap").textContent = "it is a leap year";
    } else {
        document.getElementById("leap").textContent = "it is not a leap year";
    }
}
