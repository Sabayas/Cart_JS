let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "1",
    name: "Casual Shirt",
    price: "45",
    des: "lorem8",
    img: "img-1.png",
  },
  {
    id: "2",
    name: "Shirt",
    price: "145",
    des: "lorem8",
    img: "img-2.png",
  },
  {
    id: "3",
    name: "Office Shirt",
    price: "245",
    des: "lorem8",
    img: "img-3.png",
  },
  {
    id: "4",
    name: "T-Shirt",
    price: "305",
    des: "lorem8",
    img: "img-4.png",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      // let { id, name, price, desc, img } = x;
      // let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
          <img width="220" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>$ ${price} </h2>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                ${search.item === undefined ? 0 : search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join(""));
};
generateShop();
