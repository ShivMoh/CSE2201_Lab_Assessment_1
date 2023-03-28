var products = document.getElementsByClassName("product")
var sortBy = document.getElementById("sort-by")
var category =  document.getElementById("category")
var next_page_btn =  document.getElementById("next-page")
var prev_page_btn =  document.getElementById("prev-page")
var page_number = document.getElementById("page-num")

var page_num = 1

function pageToggle(i) {
    if((page_num + i) == 1) {
        prev_page_btn.style.display = "none"
        next_page_btn.style.borderRadius = "1em 1em 1em 1em"
    } else {
        prev_page_btn.style.display = "inline"
        // next_page_btn.style.display = "block"
        next_page_btn.style.borderRadius = "1em 5em 5em 1em"
    }

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // for chrome
    page_num+=i
    page_number.innerText = "Page " + page_num + ""
}


// there's not database to pull data to sort items
// so this just randomly swaps the items to create some effect 
// purely for demonstrative reasons
sortBy.addEventListener('change', randomize())

function randomize() {
    var random = 0;
    var src
    var arr = []
    var arr2 = []
    for(var x = 0; x < products.length; x++) {
        random = Math.floor(Math.random() * products.length);
        arr.push(x)
        arr2.push(random)
        src = products[x].children[0].src
        products[x].children[0].src = products[random].children[0].src
        products[random].children[0].src = src

    }
}

// var x = 0
// var y = 0
// var count = 0
// var ratings = []

// for(x = 0; x < products.length; x++) {
//     for(y=0;y<(products[x].children[1].children).length; y++) {
//         if(products[x].children[1].children[y].classList.contains("checked")) {
//             count++
//         }
//     }
//     ratings.push(count)
//     count = 0
// }

// console.log(products[x].children[1].children[y].classList.contains("checked"))