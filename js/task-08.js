const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", formSubmitHandler)

function formSubmitHandler(event){
    event.preventDefault()

    const { elements: {email, password} } = event.target;
  
    if (email.value === "" || password.value === "") {
      return alert("Будь ласка, заповніть усі поля!");
    }
  
    const objectData = {
      email: email.value,
      password: passwor.value,
    };
  
    console.log(objectData);
  
    event.target.reset();
  }

