const SHOP_DATA = [
  {
    title: "jeans",
    imageUrl:
      "https://images.unsplash.com/photo-1572897938832-fcce7f53ccaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    id: 1,
    linkUrl: "jeans",
    items: [
      {
        id: 1,
        name: "White Slim Jeans",
        imageUrl:
          "https://images.unsplash.com/photo-1541119659434-d0224808cd58?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        price: "50",
      },
      {
        id: 2,
        name: "Daily casual denim",
        imageUrl:
          "https://images.unsplash.com/photo-1529809773508-cd894c3de760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: "40",
      },
      {
        id: 3,
        name: "Torn Denim Blue",
        imageUrl:
          "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: "50",
      },
      {
        id: 4,
        name: "Summer Shorts",
        imageUrl:
          "https://images.unsplash.com/photo-1530954979821-95eba64037a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        price: "50",
      },
      {
        id: 5,
        name: "Denim Shorts",
        imageUrl:
          "https://images.unsplash.com/photo-1520936113839-69b3b2475037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80",
        price: "50",
      },
    ],
  },
  {
    title: "shirts",
    imageUrl:
      "https://images.unsplash.com/photo-1520410006060-eb5c4710b802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80",
    id: 2,
    linkUrl: "",
    items: [
      {
        id: 1,
        name: "Black T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1499803446510-a56bc9b84caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: "25",
      },
      {
        id: 2,
        name: "Light Grey T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1528478246253-b119d2406290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: "29",
      },
      {
        id: 3,
        name: "White T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1553798397-0aee146267a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: "50",
      },
      {
        id: 4,
        name: "Denim Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: "50",
      },
      {
        id: 5,
        name: "Black Check Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1589992896387-140e940257d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80",
        price: "50",
      },
      {
        id: 6,
        name: "Red Check Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1520410006060-eb5c4710b802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80",
        price: "50",
      },
    ],
  },
  {
    title: "sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1553012780-32f198e6749d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    id: 3,
    linkUrl: "",
    items: [
      {
        id: 1,
        name: "Blue Casual Sneaker",
        imageUrl:
          "https://images.unsplash.com/photo-1584386450584-c6d766612a45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: "50",
      },
    ],
  },
  {
    title: "women",
    imageUrl:
      "https://images.unsplash.com/photo-1513441863195-bd50bb875298?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    id: 4,
    size: "large",
    linkUrl: "",
    items: [
      {
        id: 1,
        name: "Red Skirt",
        imageUrl:
          "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        price: "50",
      },
    ],
  },
  {
    title: "men",
    imageUrl:
      "https://images.unsplash.com/photo-1530555418970-00d62041e8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    id: 5,
    size: "large",
    linkUrl: "",
    items: [
      {
        id: 1,
        name: "White Slim Jeans",
        imageUrl:
          "https://images.unsplash.com/photo-1541119659434-d0224808cd58?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        price: "50",
      },
      {
        id: 2,
        name: "Daily casual denim",
        imageUrl:
          "https://images.unsplash.com/photo-1529809773508-cd894c3de760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: "40",
      },
      {
        id: 3,
        name: "Torn Denim Blue",
        imageUrl:
          "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: "50",
      },
      {
        id: 4,
        name: "Summer Shorts",
        imageUrl:
          "https://images.unsplash.com/photo-1530954979821-95eba64037a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        price: "50",
      },
      {
        id: 5,
        name: "Denim Shorts",
        imageUrl:
          "https://images.unsplash.com/photo-1520936113839-69b3b2475037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80",
        price: "50",
      },
      {
        id: 6,
        name: "Blue tank top",
        imageUrl:
          "https://images.unsplash.com/photo-1521338488115-be37accc5bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        price: "50",
      },
      {
        id: 7,
        name: "Black T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1499803446510-a56bc9b84caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: "25",
      },
      {
        id: 8,
        name: "Light Grey T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1528478246253-b119d2406290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: "29",
      },
      {
        id: 9,
        name: "White T-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1553798397-0aee146267a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: "50",
      },
      {
        id: 10,
        name: "Denim Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        price: "50",
      },
      {
        id: 11,
        name: "Black Check Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1589992896387-140e940257d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80",
        price: "50",
      },
      {
        id: 12,
        name: "Red Check Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1520410006060-eb5c4710b802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80",
        price: "50",
      },
    ],
  },
];

export default SHOP_DATA;
