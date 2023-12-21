document.addEventListener("DOMContentLoaded", function () {
    const anim = document.getElementById("anim");
    const work = document.getElementById("work");
    const playBtn = document.getElementById("playBtn");
    const closeBtn = document.getElementById("closeBtn");
    const reloadBtn = document.getElementById("reloadBtn");
    const animBtn = document.getElementById("animBtn");
    const textin5 = document.getElementById("textin5");
    const mapin5 = document.getElementById("mapin5");
    const output = document.getElementById("output");
    const circle_start = document.getElementById("circle_start");
    let circle = document.createElement("div");
      circle.className = "circle";
      anim.appendChild(circle);
        circle_start.style.display="none";

    let animationInterval;
    let step = 1;
    var index = 0;
    function startAnimation() {
      playBtn.disabled = true;
      reloadBtn.style.display = "none";
  
      
      animationInterval = setInterval(() => {
        moveCircle(circle);
      }, 10);
  
    }
  
    function stopAnimation() {
      clearInterval(animationInterval);
      playBtn.style.display = "none";
      reloadBtn.style.display = "block";
    }
  
    function moveCircle(circle) {
      const radius = 10;
      const maxWidth = anim.clientWidth - radius * 2;
      const maxHeight = anim.clientHeight - radius * 2;
        if(step<=maxHeight-radius){
            if(index == 0){
                circle.style.left = circle.offsetLeft - step + "px";
                index++;
            } else if(index == 1){
                circle.style.top = circle.offsetTop + step + "px";
                index++;
            } else if(index == 2){
                circle.style.left = circle.offsetLeft + step + "px";
                index++;
            } else if(index == 3){
                circle.style.top = circle.offsetTop - step + "px";
                index++;
            } else if(index == 4){
                circle.style.left = circle.offsetLeft - step + "px";
                index = 1;
            }
            step++;
     } else {
        stopAnimation();
     }
      
    }

    animBtn.addEventListener("click", function(){
        animBtn.style.display = "none";
        playBtn.style.display = "block";
        playBtn.disabled = false;
        reloadBtn.style.display = "none";
        closeBtn.style.display = "block";
        textin5.style.display = "none";
        mapin5.style.display = "none";
        work.style.display = "block";
        step = 1;
        const maxWidth = anim.clientWidth;
      const maxHeight = anim.clientHeight;
        circle.style.left = (maxWidth/2) + "px";
      circle.style.top = (maxHeight/2) + "px";
      index = 0;
        
    });
  
    playBtn.addEventListener("click", startAnimation);
  
    reloadBtn.addEventListener("click", function () {
        const radius = 10;
      const maxWidth = anim.clientWidth;
      const maxHeight = anim.clientHeight;
      step = 1;
      playBtn.style.display = "block";
      playBtn.disabled = false;
      reloadBtn.style.display = "none";
      circle.style.left = (maxWidth/2) + "px";
      circle.style.top = (maxHeight/2) + "px";
      index = 0;
    });

    closeBtn.addEventListener("click", function(){
        reloadBtn.style.display = "none";
        work.style.display = "none";
        textin5.style.display = "block";
        mapin5.style.display = "block";
        closeBtn.style.display = "none";
        playBtn.style.display = "none";
        animBtn.style.display = "block";
    })
  });
  