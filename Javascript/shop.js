var products = document.getElementsByClassName("product")
var sortBy = document.getElementById("sort-by")
var category =  document.getElementById("category")

sortBy.addEventListener('change', () => {
    var random = 0;
    var src
    var arr = []
    var arr2 = []
    for(var x = 0; x < products.length; x++) {
        // while(true) {
        //     random = Math.floor(Math.random() * products.length);
        //     if(!arr.includes(random)) {
        //         arr.push(random)
        //         break;
        //     }
        // }
        random = Math.floor(Math.random() * products.length);
        arr.push(x)
        arr2.push(random)
        src = products[x].children[0].src
        products[x].children[0].src = products[random].children[0].src
        products[random].children[0].src = src
        console.log(products[x].children[0].src)
        console.log(products[random].children[0].src)
        console.log(arr)
        console.log(arr2)

    }
})