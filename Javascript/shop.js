var products = document.getElementsByClassName("product")
var sortBy = document.getElementById("sort-by")
var category =  document.getElementById("category")

// there's not database to pull data to sort items
// so this just randomly swaps the items to create some effect 
// purely for demonstrative reasons
sortBy.addEventListener('change', () => {
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
})