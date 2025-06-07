const boxes = document.querySelectorAll(".box");
const radios = document.querySelectorAll("input[type='radio']");
const totalPrice = document.getElementById("total-price");

// Set the default box active
const defaultIndex = 1; 
boxes.forEach((b) => b.classList.remove("active"));
boxes[defaultIndex].classList.add("active");
radios[defaultIndex].checked = true;
totalPrice.textContent = "$" + boxes[defaultIndex].dataset.price + ".00";

boxes.forEach((box, index) => {
    console.log('box', box);
  box.addEventListener("click", () => {
    boxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
    radios[index].checked = true;
    totalPrice.textContent = "$" + box.dataset.price + ".00";
  });
});
