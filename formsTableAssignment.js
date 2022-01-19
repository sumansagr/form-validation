const submitElement = document.getElementById('submit')
submitElement.addEventListener('click', function () {
    const nameVal = document.getElementById('name').value
    const ageVal = document.getElementById('age').value
    const emailVal = document.getElementById('email').value
    const passwordVal = document.getElementById('password').value
    //    const agreeVal=document.getElementById('agree')
    const isNameValid = validateName(nameVal)
    const isAgeValid = validateAge(ageVal)
    const isEmailValid = validateEmail(emailVal)
    const isPasswordValid = validatePassword(passwordVal)
    // const isGenderValid=validateGender();
    // validateGender()

    if (isNameValid && isAgeValid && isEmailValid && isPasswordValid) {
        alert('data valid')
        addRow()
    }
    else {
        alert('invalid data')
    }

})

function validateName(name) {

    let char = /^[a-zA-Z]+$/;
    let num= /[0-9]/g;
    if (name && name.match(char)) {
        console.log(name);
        showNameError(false);
        return true
    }
    else {
        showNameError(true)
        return false;
    }
}

function showNameError(isNameError) {
    const ele = document.getElementById('nameerror')
    if (isNameError) {
        ele.innerText = '*please provide a valid name'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

function validateAge(age) {
    if (age > 18 && age < 150) {
        console.log(age);
        showAgeError(false);
        return true
    }
    else {
        showAgeError(true)
        return false
    }
}

function showAgeError(isAgeError) {
    const ele = document.getElementById('ageerror')
    if (isAgeError) {
        ele.innerText = '*please provide a valid age between 18 to 150'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

function validateEmail(email) {
    let atPosition = email.indexOf("@")
    let dotPosition = email.lastIndexOf(".")
    if (atPosition > 1 && dotPosition > atPosition + 2 && dotPosition + 2 <= email.length) {
        console.log(email);
        showEmailError(false)
        return true
    }
    else {
        showEmailError(true)
        return false
    }
}

function showEmailError(isEmailError) {
    const ele = document.getElementById('emailerror')
    if (isEmailError) {
        ele.innerText = '*please provide a valid email'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }

}

function validatePassword(password) {
  
    if (password && password.length>6) {
        console.log(password);
        showPasswordError(false)
        return true;
    }
    else {
        showPasswordError(true)
        return false;
    }
}

function showPasswordError(isPassworError) {
    const ele = document.getElementById('passworderror')

    if (isPassworError) {
        ele.innerText = '*please provide a valid password'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }

}

let x=0;
let n=1;

let list1=[];
let list2=[];
let list3=[];
let list4=[];


function addRow(){
    let addRow = document.getElementById("show")
    let newRow = addRow.insertRow(n);

    list1[x]= document.getElementById('name').value
    list2[x]= document.getElementById('age').value
    list3[x]= document.getElementById('email').value
    list4[x]= document.getElementById('password').value

    let cel1=newRow.insertCell(0);
    let cel2=newRow.insertCell(1);
    let cel3=newRow.insertCell(2);
    let cel4=newRow.insertCell(3);


    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];

    x++
    n++
}