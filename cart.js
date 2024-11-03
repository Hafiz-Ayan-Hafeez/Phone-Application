console.log ("Phone Application");

const local_Storage_Data = localStorage.getItem ("cartItems");
const convert = JSON.parse (local_Storage_Data);

console.log (convert);

const div = document.querySelector ("#cards");
const total_Cost = document.querySelector ("#total_Cost");

let total = 0;


function render () {

    convert.map ((item , index) => {
    
        div.innerHTML += `
        <div class="cards">
            <img src="${item.image}" alt"images" width="180px">
            <h1>Brand: ${item.brand}</h1>
            <h2>Model: ${item.model}</h2>
            <h2>Camera: ${item.camera}</h2>
            <h2>Quantity: 
                <button class="quantity-btn" onclick="addQuantity(${index} , ${index.price})"><b>+</b></button>
                <span id="quantity-number${index}">${item.quantity}</span>
                <button class="quantity-btn" onclick="lessQuantity(${index} , ${index.price})"><b>-</b></button>
            </h2>
            <h2>Price: $<span id="price-quantity${index}">${item.price * item.quantity}</span></h2>
            <button class="btn-2" onclick="deleteItem(${index})">Delete</button>
        </div>`;
    });

    total += convert.reduce ((accumalator , currentvalue) => {
        return accumalator + (currentvalue.price * currentvalue.quantity);
    } , 0);

    total_Cost.innerHTML = `Total Amount = $${total}`;
}
render ();

function addQuantity (index) {

    let quantity_number = document.querySelector (`#quantity-number${index}`);
    let price_quantity = document.querySelector (`#price-quantity${index}`);

    quantity_number.innerHTML ++;
    price_quantity.innerHTML = convert[index].price * quantity_number.innerHTML;

    console.log ("Item Quantity has been Increased");

    Swal.fire ({
        position: "top-end",
        icon: "success",
        title: "Your Item Quantity has been Increased Successfully",
        showConfirmButton: false,
        timer: 1500
    });

    total += convert.reduce ((accumalator , currentvalue) => {
        return accumalator + (currentvalue.price * currentvalue.quantity);
    } , 0);

    total_Cost.innerHTML = `Total Amount = $${total}`;
}

function lessQuantity (index) {

    let quantity_number = document.querySelector (`#quantity-number${index}`);
    let price_quantity = document.querySelector (`#price-quantity${index}`);

    if (quantity_number.innerHTML > 1) {

        quantity_number.innerHTML --;
        price_quantity.innerHTML = convert[index].price * quantity_number.innerHTML;

        console.log ("Item Quantity has been Decreased");

        Swal.fire ({
            position: "top-end",
            icon: "success",
            title: "Your Item Quantity has been Decreased Successfully",
            showConfirmButton: false,
            timer: 1500
        });

        total += convert.reduce ((accumalator , currentvalue) => {
            return accumalator - currentvalue.price;
        } , 0);
    
        total_Cost.innerHTML = `Total Amount = $${total}`;
    }
    else {
        convert.splice (index , 1);
        console.log ("Item has been Deleted Because the Quantity is 0");

        Swal.fire ({
            position: "top-end",
            icon: "success",
            title: "Your Item has been Deleted Because The Quantity is '0'",
            showConfirmButton: false,
            timer: 1500
        });

        div.innerHTML = "";
        render ();

        total += convert.reduce ((accumalator , currentvalue) => {
            return accumalator - currentvalue.price;
        } , 0);
    
        total_Cost.innerHTML = `Total Amount = $${total}`;
    }
}

function deleteItem (index) {

    Swal.fire({
        title: "Are you Sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete It!"
    })  .then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
        title: "Deleted!",
        text: "Your Item has been Deleted Successfully",
         icon: "success"
    });

        div.innerHTML = "";

        convert.splice (index , 1);
        
        total += convert.reduce ((accumalator , currentvalue) => {
            return accumalator - currentvalue.price;
        } , 0);
    
        total_Cost.innerHTML = `Total Amount = $${total}`;

        render ();
        console.log ("Item Deleted");
        }
    });
}

function buyNow() {
    Swal.fire ({
        position: "top-end",
        icon: "success",
        title: "Your Order Has Been Saved",
        showConfirmButton: false,
        timer: 1500
    });

    div.innerHTML = "";
    total_Cost.innerHTML = "Thank You!";
}