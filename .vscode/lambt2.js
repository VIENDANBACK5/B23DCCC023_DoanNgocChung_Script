document.addEventListener("DOMContentLoaded", function () {
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const alarmSound = document.getElementById("alarm-sound");
    let countdown;
  
    startButton.addEventListener("click", function () {
      const minutes = parseInt(minutesInput.value);
      const seconds = parseInt(secondsInput.value);
      const totalTimeInSeconds = minutes * 60 + seconds;
      startCountdown(totalTimeInSeconds);
    });
  
    resetButton.addEventListener("click", function () {
      clearInterval(countdown);
      alarmSound.pause();
      minutesInput.value = "";
      secondsInput.value = "";
    });
  
    function startCountdown(totalTimeInSeconds) {
      let remainingTime = totalTimeInSeconds;
      countdown = setInterval(function () {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        displayTime(minutes, seconds);
  
        if (remainingTime <= 0) {
          clearInterval(countdown);
          displayTime(0, 0); // Hiển thị 00:00 khi thời gian kết thúc
          alarmSound.play();
          setTimeout(function () {
            alarmSound.pause();
            alert("Time's up!"); // Hiển thị thông báo khi thời gian kết thúc
          }, 5000); // Dừng âm thanh sau 5 giây
        }
      }, 1000);
    }
  
    function displayTime(minutes, seconds) {
      minutesInput.value = minutes < 10 ? "0" + minutes : minutes;
      secondsInput.value = seconds < 10 ? "0" + seconds : seconds;
    }
  });
  