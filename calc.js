// This is what the window is listening to
const calculator = document.querySelector(".calulator")
const keys = document.querySelector(".calculator__keys")

//targeting buttons to do what we want
keys.addEventListener("click", e => {
    if (e.target.matches("button")){
        // determines type of key being used
        const key = e.target
        const action = keys.dataset.action
    }
  })

// if the key doesn't have data attribute it must be a number key
if(!action){
    console.log("number key!")
}

// operator keys
if (
    action === "add" ||
    action === "subtract" ||
    action === "mulitply" ||
    action === "divide"
){
    console.log("operator key!")
}

//data action keys
if (
    action === "decimal"
){
    console.log("decimal key!")
}

if (
    action === "clear"
){
    console.log("clear key!")
}

if (
    action === "calculate"
){
    console.log("equal key!")
}


