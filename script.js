const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
var type = document.querySelector(".typewriter")
function loaded() {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    type.innerText = type.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return type.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= type.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 50);
}