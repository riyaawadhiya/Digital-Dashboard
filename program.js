const progressBar = document.querySelector(".progress-bar");
      const speedValue = document.getElementById("speedValue");

      // Set min and max values for speed
      const minSpeed = 100;
      const maxSpeed = 220;

      function setRandomWidth() {
        // Get a random width between 20% and 100%
        const randomWidth = Math.floor(Math.random() * 80) + 20;

        // Set the new width with a smooth transition
        progressBar.style.width = randomWidth + "%";

        // Calculate the darkness based on width
        const redValue = Math.floor((100 - randomWidth) * 2.55); // More width, less red (darker)
        const blueValue = Math.floor(randomWidth * 2.55); // More width, more blue
        const color = `rgba(${redValue}, 255, ${blueValue},0.6)`;

        // Apply the new color
        progressBar.style.backgroundColor = color;

        // Calculate speed value based on width (from 100 to 220 km/h)
        const speed = Math.floor(
          (randomWidth / 100) * (maxSpeed - minSpeed) + minSpeed
        );
        speedValue.textContent = speed;
      }

      function startProgress() {
        setRandomWidth();

        // Repeat this function every 2 seconds
        setInterval(setRandomWidth, 2000);
      }

      window.onload = startProgress;