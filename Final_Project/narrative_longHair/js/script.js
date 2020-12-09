window.onload = function () {
  let video = document.querySelector("#videoElement");

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

  let hoverText = document.getElementById("hover_text");

  hoverText.addEventListener("mouseover", function () {
    document.getElementById("overlay_text").style.opacity = 1;
    hoverText.style.opacity = 0;
  });

  document.getElementById("testLink").addEventListener("click", closeWin);

  function closeWin() {
    console.log("closeWindow");
    // window.close();
    open(location, "_self").close();
  }
};
