console.log ("Phone Application");

const phones = [
    {
        brand: "Samsung",
        model: "Galaxy S21",
        camera: "64 megapixel",
        price: 799,
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    },  
    {  
        brand: "Apple",
        model: "iPhone 14",
        camera: "12 megapixel",
        price: 799,
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
    },  
    {  
        brand: "Google",
        model: "Pixel 7",
        camera: "50 megapixel",
        price: 599,
        image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl-.jpg",
    },  
    {  
        brand: "OnePlus",
        model: "10 Pro",
        camera: "48 megapixel",
        price: 899,
        image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-ace-3v.jpg",
    },  
    {  
        brand: "Xiaomi",
        model: "Redmi Note 11",
        camera: "50 megapixel",
        price: 199,
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t-pro.jpg",
    },  
    {  
        brand: "Sony",
        model: "Xperia 5 III",
        camera: "12 megapixel",
        price: 999,
        image: "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-v-new.jpg",
    },  
    {  
        brand: "Nokia",
        model: "G50",
        camera: "48 megapixel",
        price: 299,
        image: "https://fdn2.gsmarena.com/vv/bigpic/nokia-g42-5g.jpg",
    },  
    {  
        brand: "Oppo",
        model: "Find X3 Pro",
        camera: "50 megapixel",
        price: 1149,
        image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg",
    },  
    {  
        brand: "Vivo",
        model: "X70 Pro",
        camera: "50 megapixel",
        price: 899,
        image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro-mini.jpg",
    },  
    {  
        brand: "Huawei",
        model: "P40 Pro",
        camera: "50 megapixel",
        price: 999,
        image: "https://fdn2.gsmarena.com/vv/bigpic/huavei-nova-13-pro.jpg",
    },  
    {  
        brand: "Asus",
        model: "ROG Phone 5",
        camera: "64 megapixel",
        price: 999,
        image: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone6-pro.jpg",
    },  
    {  
        brand: "Realme",
        model: "GT 2 Pro",
        camera: "50 megapixel",
        price: 799,
        image: "https://fdn2.gsmarena.com/vv/bigpic/realme-p1-speed.jpg",
    },
    {
        brand: "Motorola",
        model: "Edge 20",
        camera: "108 megapixel",
        price: 499,
        image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g75.jpg",
    },
    {  
        brand: "LG",
        model: "Wing",
        camera: "64 megapixel",
        price: 999,
        image: "https://fdn2.gsmarena.com/vv/bigpic/lg-w41-pro.jpg",
    },  
    {  
        brand: "Honor",
        model: "Magic 3 Pro",
        camera: "50 megapixel",
        price: 899,
        image: "https://fdn2.gsmarena.com/vv/bigpic/honor-x5b-plus.jpg",
    },  
    {  
        brand: "ZTE",
        model: "Axon 20",
        camera: "32 megapixel",
        price: 499,
        image: "https://fdn2.gsmarena.com/vv/bigpic/zte-blade-v60-design.jpg",
    },  
    {  
        brand: "TCL",
        model: "10 Pro",
        camera: "64 megapixel",
        price: 449,
        image: "https://fdn2.gsmarena.com/vv/bigpic/tcl-50-pro-nxtpaper.jpg",
    },  
    {  
        brand: "Microsoft",
        model: "Surface Duo 2",
        camera: "12 megapixel",
        price: 1499,
        image: "https://fdn2.gsmarena.com/vv/bigpic/microsoft-surface-duo.jpg",
    },  
    {  
        brand: "Panasonic",
        model: "Eluga Ray 600",
        camera: "13 megapixel",
        price: 299,
        image: "https://fdn2.gsmarena.com/vv/bigpic/panasonic-eluga-ray-600.jpg",
    },  
    {  
        brand: "BlackBerry",
        model: "Key2 LE",
        camera: "13 megapixel",
        price: 399,
        image: "https://fdn2.gsmarena.com/vv/bigpic/blackberry-key2-le-.jpg",
    },      
];

console.log (phones);

const div = document.querySelector ("#cards");
const counting = document.querySelector ("#counting");

let cartItems;
let num = 0;

const check_Data_From_Local_Storage = JSON.parse (localStorage.getItem ("cartItems"));

if (check_Data_From_Local_Storage === null) {
    cartItems = [];
}
else {
    cartItems = [...check_Data_From_Local_Storage];
}

console.log ("cartItems" , cartItems);

phones.map ((item , index) => {
    
    div.innerHTML += `
    <div class="cards">
        <img src="${item.image}" alt"images" width="180px">
        <h1>Brand: ${item.brand}</h1>
        <h2>Model: ${item.model}</h2>
        <h2>Camera: ${item.camera}</h2>
        <h2>Price: $${item.price}</h2>
        <button onclick="addToCart(${index})" class="btn">Add To Cart</button>
    </div>`;    
});

function addToCart(index) {

    const checkIndex = cartItems.indexOf (phones[index]);

    if (checkIndex === -1) {
        phones[index].quantity = 1;
        cartItems.push (phones[index]);

        Swal.fire ({
            position: "top-end",
            icon: "success",
            title: "Your Item has been Added to Cart Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        cartItems[checkIndex].quantity += 1;

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Item has been Updated to Cart Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }

    console.log (cartItems);
 
    num++;
    counting.innerHTML = "0" + num;

    if (num > 9) {
        counting.innerHTML = num;
    }
}

function checout_Button () {
    console.log ("Checkout Button Clicked");

    // For Storing Data in Local Storage:-

    const covert_Array_Into_String = JSON.stringify (cartItems);
    localStorage.setItem ("cartItems" , covert_Array_Into_String);
    
    window.location = "./cart.html";
}