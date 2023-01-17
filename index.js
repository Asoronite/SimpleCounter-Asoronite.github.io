const Decrease = document.getElementById("Decrease");
const Refresh = document.getElementById("Refresh");
const Increase = document.getElementById("Increase");
const CurrentValue = document.getElementById("CurrentValue");

Decrease.addEventListener("click", (decreasing) => {
  CurrentValue.innerHTML = CurrentValue.innerHTML - 1;
  color();
});

Increase.addEventListener("click", (increasing) => {
  CurrentValue.innerHTML++;
  color();
});

Refresh.addEventListener("click", (reset) => {
  CurrentValue.innerHTML = 0;
  color();
});

window.addEventListener("load", (setToZero) => {
  CurrentValue.innerHTML = 0;
  console.log(CurrentValue.innerText);
  
})

 function color () {
if (CurrentValue.innerText > 0) {
  CurrentValue.style.color = "green";
} 
else if (CurrentValue.innerText < 0) {
  CurrentValue.style.color = "red";
}  else {
  CurrentValue.style.color = "black";
}
}
