let  products = {
    data:[
        {
            productname : "Regular White T-Shirt",
            category: "Topwear",
            price: "31",
            image: "image/Regular white T-shirt.jpeg"
        },
        {
            productname: "Beige Short Skirt",
            category: "Bottomwear",
            price: "48.9",
            image: "image/BEIGE SHORT SKIRT.jpeg"
        },
        {
            productname: "Sport SmartWatch",
            category: "Watch",
            price: "103",
            image: "image/SPORTY SMARTWATCH.jpeg"
        },
        {
            productname: "Basic Knitted Top",
            category: "Topwear",
            price: "28",
            image: "image/BASIC KNITTED TOP.jpeg"
        },
        {
            productname: "Black Leather Jacket",
            category: "Jack",
            price: "145",
            image: "image/BLACK LEATHER JACKET.jpeg"
        },
        {
            productname: "Stylish Pink Trouser",
            category: "Bottomwear",
            price: "91",
            image: "image/STYLISH PINK TROUSERS.jpeg"
        },
        {
            productname: "Brown Men's Jacket",
            category: "Jacket",
            price: "185",
            image: "image/BROWN MEN'S JACKET.jpeg"
        },
        {
            productname: "Comy Gray Pants",
            category: " Bottomwear",
            price: "45",
            image: "image/COMFY GRAY PANTS.jpeg"
        }
    ]
};
for(let i of products.data){
//create card
let card = document.createElement("div");
// Card shounld have category and should stay hidden initially
card.classList.add("card",i.category,"hide");
// create image div
let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");
//image tag
let image = document.createElement("img");
image.setAttribute("src",i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);
// container
let container = document.createElement("div");
container.classList.add("container");
// Product name
let name = document.createElement("h5");
name.classList.add("Product-name");
name.innerHTML = i.productname.toUpperCase();
container.appendChild(name);
//price
let price = document.createElement("h6");
price.innerHTML = "$" + i.price;
container.appendChild(price);

card.appendChild(container);
document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value){
    //Button class code
let buttons = document.querySelectorAll(".button-value");
buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
    } else {
        button.classList.remove("active");
    }  
});
    // select all card
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
    //display all cards on 'all' button click
        if (value == "all"){
        element.classList.remove("hide");
        } else {
        //check if element contains category class
        if (element.classList.contains(value)) {
        // should display based on the category
        element.classList.remove("hide");
        } else {
        // Hide other elements
        element.classList.add("hide");
        }
    }
});
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //Initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product");
    let cards = document.querySelectorAll(".call");

    // loop through all element
    elements.forEach((element, index) => {
        //checking if the text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())){
            // display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

// Intially displaying all products
window.onload = () => {
    filterProduct("all");

}
