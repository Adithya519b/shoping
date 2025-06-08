document.addEventListener("DOMContentLoaded", function () {

    const username = document.querySelector(".username");
    const password = document.querySelector(".password");
    const submit = document.querySelector(".submit");

    if (submit) {
        submit.addEventListener('click', function (event) {
            event.preventDefault();
            const user = username.value;
            const pass = parseInt(password.value);

            if (user === "adithya" && pass === 2143) {
                window.location.href = "indexhome.html";
            } else {
                document.querySelector(".popup").style.display = "block";
            }
        });
    }

    
    
        const items = {
            "001": { item: "Maggi", quant: "200g", price: "₹57.00", value: "57", img: "groceryitems/maggi.webp" },
            "002": { item: "WheatNoodles", quant: "100g", price: "₹79.00", value: "57", img: "groceryitems/noodles.webp" },
            "003": { item: "Oats", quant: "400g", price: "₹74.00", value: "74", img: "groceryitems/oats.webp" },
            "004": { item: "onion", quant: "1kg", price: "₹30.00", value: "30", img: "groceryitems/onion.jpg" },
            "005": { item: "panner", quant: "400g", price: "₹270.00", value: "270", img: "groceryitems/panner.webp" },
            "006": { item: "peanut Butter", quant: "400g", price: "₹349.00", value: "349", img: "groceryitems/peanutbutter.webp" },
            "007": { item: "potato", quant: "1kg", price: "₹50.00", value: "50", img: "groceryitems/potato.webp" },
            "008": { item: "Rasagulla", quant: "500g", price: "₹279.00", value: "279", img: "groceryitems/rasagulla.webp" },
            "009": { item: "salt", quant: "500g", price: "₹14.00", value: "14", img: "groceryitems/salt.webp" },
            "010": { item: "soyachunks", quant: "300g", price: "₹49.00", value: "49", img: "groceryitems/soyachunks.webp" },
            "011": { item: "sugar", quant: "1kg", price: "₹45.00", value: "45", img: "groceryitems/sugar.webp" }
        };

        const body2 = document.querySelector("#index2");
        if (body2) {
            let html = "";
            for (let id in items) {
                const item = items[id];
                html += `
                    <div class="card">
                        <div class='item'>
                            <img src="${item.img}" alt="${item.item}">
                        </div>
                        <div class="details">
                            <p>${item.item} - ${item.quant}</p>
                            <p>${item.price}</p>
                        
                            <button value="${item.value}" class="add-cart" >Add Cart</button>
                        </div>
                    </div>
                `;
            }
            body2.innerHTML = html;
        
    }
    //let cartcontainer=document.querySelector(".cartcontainer");
    // 1. Add event listeners to all "Add Cart" buttons
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", function () {
        // 2. Find the closest .details container
        const details = this.closest(".details");

        // 3. Get item name and quantity
        const itemText = details.querySelectorAll("p")[0].textContent; 
        const priceText = details.querySelectorAll("p")[1].textContent; 
        const value = this.getAttribute("value");

        // 4. Create a cart item object
        const cartItem = {
            item: itemText,
            price: priceText,
            value: value
        };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add new item
        cart.push(cartItem);

        // Save updated cart
        localStorage.setItem("cart", JSON.stringify(cart));


       
        
        console.log(cartItem.price);
    
       
        });
    

    });
});


