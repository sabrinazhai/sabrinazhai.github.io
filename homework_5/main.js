var cartArray = [];

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


    }

    function addToCart(){
        var colorValue = document.querySelector(".colors.selected").innerHTML; 
        var fillValue = document.querySelector(".fill.selected").innerHTML; 
        var currentItem = {
            color: colorValue,
            fill: fillValue
        }
        cartArray.push(currentItem);
        console.log("currently:" + cartArray.length)

        if (cartArray.length > 0){
            document.getElementById("cart").innerHTML = cartArray.length + " cart";
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