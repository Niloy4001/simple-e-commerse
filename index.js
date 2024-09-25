const products = [
    {
        id: "5960bf40-9603-4a39-9ff6-6cf9f1ce4815",
        category: "Cap",
        name: "UNISEX ORIGINALS WASHED BUCKET",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e1e758585df14bbbb7d8aaf000c95bd7_9366/UNISEX_ORIGINALS_WASHED_BUCKET_White_CM3933_01_standard.jpg",
        details: {
            price: 27,
            stock: 14,
            shipping: 14,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 3,
        },
    },
    {
        id: "5991add1-f4ba-4fb9-9b6b-ec59aa2dda60",
        category: "Cap",
        name: "SST Plus Strap-Back Hat",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/92e77a8d84d845d19171ad50003f2ea1_9366/SST_Plus_Strap-Back_Hat_White_FZ8569_01_standard.jpg",
        details: {
            price: 23,
            stock: 14,
            shipping: 47,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 32,
        },
    },
    {
        id: "5690e579-a943-4b42-9ffe-dfc65b71c560",
        category: "Cap",
        name: "Dispatch Trucker Hat",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c3981523051c4a978674ad3c01015664_9366/Dispatch_Trucker_Hat_Black_EY5534_01_standard.jpg",
        details: {
            price: 28,
            stock: 16,
            shipping: 14,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 30,
        },
    },
    {
        id: "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
        category: "Earphones",
        name: "adidas Z.N.E. 01 True Wireless Earbuds",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
        details: {
            price: 142,
            stock: 11,
            shipping: 23,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 5,
            ratingsCount: 22,
        },
    },
    {
        id: "b278e667-ca17-465c-b603-af1af4319b7b",
        category: "Earphones",
        name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b322cdef8e654551ace9adcc00f963ed_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5114_41_detail.jpg",
        details: {
            price: 135,
            stock: 16,
            shipping: 30,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 5,
            ratingsCount: 51,
        },
    },
    {
        id: "1f56c0e5-4407-44bf-9225-90f592d2924a",
        category: "Earphones",
        name: "FWD-01 Sport In-Ear Headphones",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2cdb8652aa2340369ba2aa79010062d1_9366/FWD-01_Sport_In-Ear_Headphones_Black_CM5016_01_standard.jpg",
        details: {
            price: 185,
            stock: 8,
            shipping: 15,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 66,
        },
    },
    {
        id: "4ead4708-68e8-4a93-b28e-5e99ccc4d75c",
        category: "Earphones",
        name: "adidas FWD-02 Sport True Wireless Earbuds",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/523731a02e914d318cb4adcc00f985ba_9366/adidas_FWD-02_Sport_True_Wireless_Earbuds_Grey_EY5113_03_standard_hover.jpg",
        details: {
            price: 162,
            stock: 14,
            shipping: 29,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 6,
        },
    },
    {
        id: "d1116075-10f2-49c4-985e-0d41e19ce1b3",
        category: "Earphones",
        name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
        seller: "Addidas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e6e7967b3b24ef298f5adcc00f983ec_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5115_41_detail.jpg",
        details: {
            price: 110,
            stock: 15,
            shipping: 48,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 5,
            ratingsCount: 9,
        },
    },];



let productsDiv = document.getElementById('push-product');

for (let item of products) {


    let div = document.createElement('div');
    div.innerHTML = `
            <div class="card bg-base-100 w-full shadow-xl h-full">
                    <figure>
                        <img src="${item.img}"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">${item.name}</h2>
                        <p>Price : ${item.details.price}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary" onclick = " updateCart(${item.details.price})">Buy Now</button>
                        </div>
                    </div>
                </div>
`
    productsDiv.appendChild(div)


}

const productAmount = document.getElementById('product-amount');
const productAmount1 = document.getElementById('product-amount-2');
const productPrice = document.getElementById('product-price');

let count = 0;
let productInitialPrice = 0;

let updateCart = (price) => {
    count++;
    productAmount.innerText = count;
    productAmount1.innerText = count;
    productInitialPrice = productInitialPrice + price;
    productPrice.innerText = productInitialPrice;
   
    
    
    
    
} 




