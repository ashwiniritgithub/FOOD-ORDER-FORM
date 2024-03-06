


document.getElementById('addItem').addEventListener('click', function() {
    var foodItem = document.getElementById('foodItem').value;
    var table = document.getElementById('itemTable');
    var errorElement = document.getElementById('error');
    foodItem = foodItem.charAt(0).toUpperCase() + foodItem.slice(1).toLowerCase();

    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[0].textContent === foodItem) {
            errorElement.textContent = 'This item is already in the table.';
            return;
        }
    }

    if (foodItem != '') {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = foodItem;
        cell2.innerHTML = '<button class="table-button" onclick="decreaseQuantity(this)">-</button><span>1</span><button class="table-button" onclick="increaseQuantity(this)">+</button>';
        cell3.innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button>';
        document.getElementById('foodItem').value = '';
        errorElement.textContent = '';
    }
});

function decreaseQuantity(btn) {
    var quantity = btn.nextSibling.textContent;
    if (quantity > 1) {
        btn.nextSibling.textContent = --quantity;
    }
}


function increaseQuantity(btn) {
    var quantity = btn.previousSibling.textContent;
    btn.previousSibling.textContent = ++quantity;
}


function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
    
    
    
    document.getElementById('name').addEventListener('input', function() {
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    var name = nameInput.value.trim();
    
    if (!isValidName(name)) {
        nameError.textContent = 'Please enter a valid name (only letters and spaces)';
        nameInput.setCustomValidity('Please enter a valid name (only letters and spaces)');
    } else {
        nameError.textContent = '';
        nameInput.setCustomValidity('');
    }
    });
    
    function isValidName(name) {
    var nameRegex = /^[a-zA-Z\s]+$/; 
    return nameRegex.test(name);
    }
    
     
    
    
    document.getElementById('mobile').addEventListener('input', function() {
    var mobileInput = document.getElementById('mobile');
    var mobileError = document.getElementById('mobileError');
    var mobile = mobileInput.value;
    
    if (!/^[0-9]{10}$/.test(mobile)) {
        mobileError.textContent = 'Mobile number must be 10 digits long and contain only numbers';
        mobileInput.setCustomValidity('Mobile number must be 10 digits long and contain only numbers');
    } else {
        mobileError.textContent = '';
        mobileInput.setCustomValidity('');
    }
    });
    
    // document.getElementById('email').addEventListener('input', function() {
    // var emailInput = document.getElementById('email');
    // var emailError = document.getElementById('emailError');
    // var email = emailInput.value;
    
    // if (!isValidEmail(email)) {
    //     emailError.textContent = 'Please enter a valid email address';
    //     emailInput.setCustomValidity('Please enter a valid email address');
    // } else {
    //     emailError.textContent = '';
    //     emailInput.setCustomValidity('');
    // }
    // });
    // function validateEmail() {
    //     var emailInput = document.getElementById("emailInput").value;
    //     var validationMessage = document.getElementById("validationMessage");
        
        
    //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    //     if (emailRegex.test(emailInput)) {
    //         validationMessage.style.color = "green";
    //         validationMessage.textContent = "Valid email address!";
    //     } else {
    //         validationMessage.style.color = "red";
    //         validationMessage.textContent = "Invalid email address!";
    //     }
    // }

    function validateEmail() {
        var email = document.getElementById('email').value;
        var error = document.getElementById('emailError');
        var re = /\S+@\S+\.\S+/;
        if(!re.test(email)) {
            error.innerText = 'Please enter a valid email address.';
            return false;
        }
        error.innerText = '';
        return true;
    }

//     document.getElementById('orderForm').addEventListener('submit', function(event) {
       
//     var addressInput = document.getElementById('address');
//     var addressError = document.getElementById('addressError');
//     var address = addressInput.value.trim();
    
//     if (address === '') {
//         event.preventDefault(); 
//         addressError.textContent = 'Address is required';
//     } else {
//         addressError.textContent = '';
//     }
// })

function validateAddress() {
    var address = document.getElementById('address').value;
    var error = document.getElementById('addressError');
    if(address.length < 10) {
        error.innerText = 'Address must be at least 10 characters long.';
        return false;
    }
    error.innerText = '';
    return true;
}
    
    
    
         
    
    
    // function handelsubmit(){
    //     console.log("hi")
    //     alert("Thankyou for the response")
    // }
    
    // function generateCaptcha() {
    //     let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     let captcha = '';
    //     for (let i = 0; i < 6; i++) {
    //         captcha += chars[Math.floor(Math.random() * chars.length)];
    //     }
    //     return captcha;
    // }
    
    // // Function to display the CAPTCHA
    // function displayCaptcha() {
    //     // console.log("in generate captcha")
    //     let captcha = generateCaptcha();
    //     // console.log("captcha",captcha)
    
    //     document.getElementById('capDisplay').value = captcha;
        
    // }
    
    
    // // Function to refresh the CAPTCHA
    // function refreshCaptcha() {
    //     // console.log("refresh captcha")
    //     displayCaptcha();
        
    // }
    
    // // Function to check if the user input matches the CAPTCHA
    // function checkCaptcha() {
    //     console.log("in checkcaptcha")
    //     let userInput = document.getElementById('captcha-form').value;
    //     let captcha = document.getElementById('capDisplay').value;
    //     if (userInput === captcha) {
    //         document.getElementById('capmsg').innerText = " ";
    //     } else {
    //         document.getElementById('capmsg').innerText = "CAPTCHA Incorrect!";
    //         document.getElementById('capmsg').style.color="red"
    //     }
    // }
    
    // // Generate CAPTCHA when page loads
    // window.onload = function() {
    // displayCaptcha()
    // };

    function generateCaptcha() {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var captcha = '';
        for (var i = 0; i < 5; i++) {
            captcha += chars[Math.floor(Math.random() * chars.length)];
        }
        document.getElementById('captcha').innerText = captcha;
    }
    window.onload = generateCaptcha;
    function validateCaptcha() {
        var userCaptcha = document.getElementById('userCaptcha').value;
        var captcha = document.getElementById('captcha').innerText;
        var error = document.getElementById('captchaError');
        if(userCaptcha != captcha) {
            error.innerText = 'Captcha does not match.';
            return false;
        }
        error.innerText = '';
        return true;
    }
    
    
    
    
    
    function submitForm() {
        
        
        window.location.href = "thank-you.html";
    
       
        return false;
      }