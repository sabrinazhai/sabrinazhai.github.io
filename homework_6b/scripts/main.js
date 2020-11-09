var cartArray = [];

//Changing selection and images 
window.onload = function(){
    const colorsButtons = document.getElementsByClassName("colors");
    const fillButtons = document.getElementsByClassName("fill");
    const image = document.getElementById("product-photo");

    for (let i = 0; i < colorsButtons.length; i++) {
        let btn = colorsButtons[i];

        btn.addEventListener('click', function(){
            document.querySelector(".colors.selected").classList.remove('selected');
            this.classList.add("selected");

            image.src = "img/photo" + this.dataset.name + ".png";
        });
    }

    for (let i = 0; i < fillButtons.length; i++) {
        let btn = fillButtons[i];

        btn.addEventListener('click', function(){
            document.querySelector(".fill.selected").classList.remove('selected');
            this.classList.add("selected");
        });
    }
    retrieveCart();
    updateCart();
 
}

//Retrieving cart information from local stroage
function retrieveCart(){
    if (typeof(Storage) !== "undefined") { 
        if("shoppingCart" in localStorage){
            cartArray = JSON.parse(localStorage.getItem("shoppingCart"));
        }
    }
    updateQuantity();
}

//Updating navigation cart quantity
function updateQuantity(){
    if (cartArray.length > 0){
        document.getElementById("cart").innerHTML = cartArray.length + " cart";
    }
}

//Saving item to the cart into an array  
function addToCart(){
    var photoValue = document.getElementById("product-photo").getAttribute("src");
    var nameValue = document.getElementById("product-name").innerHTML;
    var colorValue = document.querySelector(".colors.selected").innerHTML; 
    var fillValue = document.querySelector(".fill.selected").innerHTML; 

    var currentItem = {
        photo: photoValue,
        name: nameValue,
        color: colorValue,
        fill: fillValue
    }
    cartArray.push(currentItem);

    updateQuantity();  
    updateArray(cartArray);  
}

function updateArray(arr){
     if (typeof(Storage) !== "undefined") {  
        localStorage.setItem("shoppingCart", JSON.stringify(arr));      
    } else {
      document.getElementById("result").innerHTML = "Your browser does not support Web Storage...";
    } 
}

function updateCart(){
    document.querySelector(".cart").innerHTML = "<h1> Your Cart</h1>";
    for (let i = 0; i < cartArray.length; i++) { 
        var div = document.createElement('div');
        div.setAttribute('class', 'item');
        div.setAttribute('data-value', i);

        var pic = document.createElement("img");
        pic.setAttribute('src', cartArray[i].photo);
       
        var detail = document.createElement('div');
        detail.innerHTML =  "<h2>" + cartArray[i].name + 
                            "</h2> Color: " + cartArray[i].color + 
                            "<br />"+ "Fill: " + cartArray[i].fill ; 
     
        var btn = document.createElement("button");
        btn.innerHTML = "remove item";
        btn.setAttribute("class", "remove-item")

        //Add all the created elements on to the page
        if (document.querySelector(".cart") !== null) {
            document.querySelector(".cart").appendChild(div);  
            div.appendChild(pic);  
            div.appendChild(detail);  
            div.appendChild(btn);
        }

        btn.addEventListener("click", function(){
            cartArray.splice(i,1);
            updateArray(cartArray);
        })
        
    }
}



function myFunction() {
    var x = document.getElementById("navigationbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// Checking browser support.
function checkBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}