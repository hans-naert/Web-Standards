const button = document.querySelector("#player-button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}


let json;
(() => {
    fetch("https://httpbin.org/json")
    .then(response => response.json())
    .then(data => 
        {   json=data;
            console.log(data) });    
})();

