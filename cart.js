
    const cartcontainer = document.querySelector(".cartcontainer");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let clearcart=document.querySelector(".clear");
    if (cart.length === 0) {
        cartcontainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let total = 0;
        cart.forEach(item => {
            const priceNum = parseFloat(item.value);
            total += priceNum;

            cartcontainer.innerHTML += `
                <div class="details">
                    <p>${item.item}</p>
                    <p>${item.price}</p>
                </div>
            `;
        });

        cartcontainer.innerHTML += `
            <hr>
            <div class="details"><strong>Total: ₹${total}</strong></div>

        `;
        console.log(cart+"without clear"+cart.length)
    }
    clearcart.addEventListener("click",()=>{
        cartcontainer.innerHTML="";
        cart=[];
        localStorage.setItem("cart", JSON.stringify(cart));
           
        
        console.log(typeof(cart)+cart.length);
        console.log(cart);
    })
