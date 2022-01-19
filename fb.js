const element = document.getElementById("submit-button");

element.addEventListener("click", (event) => {
  event.preventDefault();
});

function myFunction() {
  const x = document.getElementById("inputPassword5");
  const sh = document.getElementById("show");

  if (x.type === "password") {
    x.type = "text";
    sh.innerHTML = `<i class="fas fa-eye-slash icon" ></i>`;
  } else {
    x.type = "password";
    sh.innerHTML = `<i class="fas fa-eye icon" ></i></i>`;
  }
}
