var products = document.getElementsByClassName("product")
var sortBy = document.getElementById("sort-by")
var category =  document.getElementById("category")
var next_page_btn =  document.getElementById("next-page")
var prev_page_btn =  document.getElementById("prev-page")
var page_number = document.getElementById("page-num")

var page_num = 1

sortBy.addEventListener('change', randomize)
category.addEventListener('change', randomize)

// this function toggles through pages on the shop page
// there's only really one page and its a static site
// so the content won't actually change
// only the page number changes
function pageToggle(i) {
    if((page_num + i) == 1) {
        prev_page_btn.style.display = "none"
        next_page_btn.style.borderRadius = "1em 1em 1em 1em"
    } else {
        prev_page_btn.style.display = "inline"
        next_page_btn.style.borderRadius = "1em 5em 5em 1em"
    }

    page_num+=i
    page_number.innerText = "Page " + page_num + ""
}

// this function moves the page to the top
function scrollTop()
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // for chrome
}



// there's no database to pull data to sort items
// so this just randomly swaps the items to create some effect 
// purely for demonstrative reasons
function randomize() {
    var random = 0;
    var src;
    var name;
    
    for(var x = 0; x < products.length; x++) {
        random = Math.floor(Math.random() * products.length);
        src = products[x].children[0].src
        name = products[x].children[2].innerText
        products[x].children[0].src = products[random].children[0].src
        products[x].children[2].innerText = products[random].children[2].innerText
        products[random].children[0].src = src
        products[random].children[2].innerText = name

    }
}

// searching utilizes randomize to create effect
// does not actually search, purely for demonstarative purposes
function search() {
    randomize()
    document.getElementsByClassName("search-container")[0].children[0].value = ""
}

