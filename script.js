const form = document.querySelector("#form-contact");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const projectInput = document.querySelector("#project");
const budgetInput = document.querySelector("#budget");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#form-message");

const formFields = [nameInput, emailInput, projectInput, budgetInput, messageInput];

form.addEventListener("submit", function(event){
    event.preventDefault();
    let isValid = true;

    formFields.forEach(field => field.classList.remove("error"));

    const contactRequest = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        project: projectInput.value,
        budget: budgetInput.value,
        message: messageInput.value.trim()
        

    }

   for(let key in contactRequest){
      if(contactRequest[key] === ""){
        const field = document.querySelector(`#${key}`);
        field.classList.add("error");
         isValid = false
        console.log(field);
         
        

      }
   }
   if(isValid){
    formMessage.textContent = "Form sent successfully.";
   } else {
    formMessage.textContent = "Please fill in all required fields.";
   }
console.log(contactRequest);
})
