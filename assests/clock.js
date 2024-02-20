function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridiem = hours < 12 ? "AM" : "PM";
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    // Add leading zeros to minutes and seconds if less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    let timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("time").innerHTML = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();