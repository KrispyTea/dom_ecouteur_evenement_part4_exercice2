let h1 = document.querySelector("h1")

h1.addEventListener("dblclick", () => {
    h1.setAttribute("style", "backgroundcolor: red;color: white");
})

let h3 = document.querySelector("h3")

h3.addEventListener("mouseover", () => {
    h3.innerText = h3.innerText.slice(0,-1)
})