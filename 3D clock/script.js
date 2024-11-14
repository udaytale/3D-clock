// script.js
function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zero to hours, minutes, and seconds if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Format time string
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
    
    // Get and format date
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = monthsOfYear[now.getMonth()];
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();
    
    const currentDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
    dateElement.textContent = currentDate;
  }
  
  // Update clock immediately, then every second
  updateClock();
  setInterval(updateClock, 1000);
  