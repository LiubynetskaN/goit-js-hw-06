const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", formSubmitHandler)

function formSubmitHandler(event){
    event.preventDefault()

    const inputEmail = event.target.elements.email
    
    const inputPassword = event.target.elements.password

    if (inputEmail.value === "" || inputPassword.value === "" ){
        return alert("Будь ласка, заповніть усі поля!");
    } const data = {
        email : inputEmail.value,
        password : inputPassword.value,
    } 
    console.log(data)
    event.target.reset()
}
