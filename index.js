


let isValid = (form)=>{
    let inpObj = document.getElementById(form);
    if (!validateEmail(inpObj.value)) {
        inpObj.classList.add("invalid");
        document.querySelector(`#${form} + .error`).style.visibility = "visible"
      } else {
        console.log("true") // to be done
        inpObj.classList.remove("invalid");
        document.querySelector(`#${form} + .error`).style.visibility = "hidden"
      } 
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let inputs = document.querySelectorAll(".userEmail");

inputs.forEach((input)=>{
    input.addEventListener("input",()=>{
        if (validateEmail(input.value)) {
            input.classList.remove("invalid");
            document.querySelector(`#${input.getAttribute('data-error')}`).style.visibility = "hidden"
          }
    })
})