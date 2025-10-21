document.getElementById("userFirstName").addEventListener("input", (event) => {
    const input = document.getElementById("userFirstName");
    const userFirstName = input.value;
    const regex = /^[A-Za-z]+$/g;
    const found = regex.test(userFirstName);
    const nameError = document.querySelector(".firstnameerror");

    if(!found && userFirstName.length) {
        nameError.innerHTML = "This field is required";
    } else {
        nameError.innerHTML = "";
    }
})

document.getElementById("firstName").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("userFirstName");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, "").trim();
})

document.getElementById("userLastName").addEventListener("input", (event) => {
    const input = document.getElementById("userLastName");
    const userLastName = input.value;
    const regex = /^[A-Za-z]+$/g;
    const found = regex.test(userLastName);
    const nameError = document.querySelector(".lastnameerror");

    if(!found && userLastName.length) {
        nameError.innerHTML = "This field is required";
    } else {
        nameError.innerHTML = "";
    }
})

document.getElementById("lastName").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("userLastName");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, "").trim();
})

document.getElementById("userEmail").addEventListener("input", (event) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/g;
    const input = document.getElementById("userEmail");
    const email = input.value;
    const format = document.querySelector(".emailerror");
    const found = regex.test(email);
    if (!found && email.length) {
        format.innerHTML = "This field is required";
    } else {
        format.innerHTML = "";
    }
})

document.getElementById("email").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("userEmail");
    const regex = / {2,}/g;
    const newEmail = input.value.replaceAll(regex, "").trim();
})

document.getElementById("userSubject").addEventListener("input", (event) => {
    const input = document.getElementById("userSubject");
    const subject = input.value;
    const regex = /^[A-Za-z0-9\s.,!?'-]{3,30}$/g;
    const found = regex.test(subject);
    const format = document.querySelector(".subjecterror");
    if(!found && subject.length) {
        format.innerHTML = "This field is required";
    } else {
        format.innerHTML = ""; 
    }
})

document.getElementById("subject").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("userSubject");
    const regex = / {2,}/g;
    const newSubject = input.value.replaceAll(regex, "").trim();
})

document.getElementById("userMessage").addEventListener("input", (event) => {
    const regex = /^[a-zA-Z0-9\s\W]{2,}$/g;
    const input = document.getElementById("userMessage");
    const message = input.value;
    const format = document.querySelector(".messageerror");
    const found = regex.test(message);

    if(!found && message.length) {
        format.innerHTML = "This field is required";
    } else {
        format.innerHTML = "";
    }
})

document.getElementById("message").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("userMessage");
    const regex = / {2,}/g;
    const newMessage = input.value.replaceAll(regex, "").trim();
})

document.getElementById("submitData").addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("userFirstName").value.trim();
    const lastName = document.getElementById("userLastName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const subject = document.getElementById("userSubject").value.trim();
    const message = document.getElementById("userMessage").value.trim();
    const approvalError =  document.querySelector(".fill");
    const successMessage = document.getElementById("success");

    if (!name || !lastName || !email || !subject ||! message) {
        approvalError.innerHTML = "Please fill all fields";
    } else  {
        approvalError.innerHTML = "";
        successMessage.classList.add("show");
        setTimeout(() => {
            successMessage.classList.remove("show");
            setTimeout(() => successMessage.classList.add("hidden"), 600);
        }, 3000);

        document.getElementById("firstName").reset();
        document.getElementById("lastName").reset();
        document.getElementById("email").reset();
        document.getElementById("subject").reset();
        document.getElementById("message").reset();
    }
})