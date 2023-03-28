var x = document.getElementsByClassName("tab");

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(0); // Display the current tab
cartCheckoutTransition(1);

function cartCheckoutTransition(i) {

  if(i == 1) {
    document.getElementById("checkout").style.display = "none"
    document.getElementById("cart").style.display = "block"
  } else {
    document.getElementById("checkout").style.display = "block"
    document.getElementById("cart").style.display = "none"
  }

}

function update(n) {
    //get dom element
    var element = document.getElementById("progress-bar");
    // get computed style inorder to get the current width
    var status = getComputedStyle(element)  
    var fullWidth = parseInt(getComputedStyle(document.getElementById("progress-status")).width) * 0.70
    var statusIncrement = fullWidth/(x.length-1)
    var width = parseInt(status.width);

    if (width >= fullWidth && n > 0) {
        console.log("Progress bar is full")
    } else {
        if (n > 0) {
            width += statusIncrement
        } else {
            width -= statusIncrement
        }
        
        element.style.width = width; 
    }
  }


  
function showTab(n) {
    // This function will display the specified tab of the form ...
    if(n==0) {
        x[currentTab].style.display = "block"
    } else if(currentTab < (x.length - 1) || n < 0) {
        // if(!validateForm(n)) return
        x[currentTab].style.display = "none"
        currentTab+=n;
        x[currentTab].style.display = "block";
    } else {
        return;
    }

    // ... and fix the Previous/Next buttons:
    if (currentTab == 0) {
      document.getElementById("prevBtn").style.display = "none"
      document.getElementById("back-to-cart").style.display = "inline"
    } else {
      document.getElementById("prevBtn").style.display = "inline"
      document.getElementById("back-to-cart").style.display = "none"
    } 

    if (currentTab == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Confirm";
      document.getElementById("nextBtn").onclick = () => {
        alert("Your purchase has been confirmed. Have a nice day :)")
        window.location.href = "../Html/shop.html"
      }
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }

    update(n)
    titleChange(currentTab)

  }

// changes displayed title of the checkout form
function titleChange(currentTab) 
{
    sectionTitle = document.getElementById("form-title")

    titles = new Array('Payment', 'Shipping', 'Review')
    sectionTitle.innerHTML = titles[currentTab]
}

// validates form by checking that required fields are inputted before proceeding
function validateForm(n) {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("p");

    if(n < 0) return valid
   
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if((y[i].innerText).includes("*")) {
     
        if (y[i].children[0].value == "") {
            // add an "invalid" class to the field:
            y[i].children[0].className += "invalid";
            // and set the current valid status to false:
            valid = false;
          }
        }
    } 

    // if form is valid, we'll remove any "invalid" classes added before proceeding
    if(valid) {
        for (i = 0; i < y.length; i++) {
            if((y[i].innerText).includes("*")) {
                y[i].children[0].classList.remove("invalid")
            }
        } 
    }

    return valid; // return the valid status
  }

// function fixStepIndicator(n) {
//     // This function removes the "active" class of all steps...
//     var i, x = document.getElementsByClassName("step");
//     for (i = 0; i < x.length; i++) {
//       x[i].className = x[i].className.replace(" active", "");
//     }
//     //... and adds the "active" class to the current step:
//     x[n].className += " active";
//   }