const formatTime = (hours, minutes, seconds) => {
    const validateAndFormat = value => (value < 10 ? `0${value}` : value);
    if (hours >= 24 || hours < 0 || minutes >= 60 || minutes < 0 || seconds >= 60 || seconds < 0) {
      hours = (hours + Math.floor(minutes / 60) + Math.floor(seconds / 60 / 60)) % 24;
      minutes = (minutes + Math.floor(seconds / 60)) % 60;
      seconds = seconds % 60;
    }
    hours = validateAndFormat(hours);
    minutes = validateAndFormat(minutes);
    seconds = validateAndFormat(seconds);
    console.log(`${hours}:${minutes}:${seconds}`);
  };
  
  formatTime(12, 7, 8); 
  formatTime(12, 67, 62); 
  formatTime(46, 2, 138); 