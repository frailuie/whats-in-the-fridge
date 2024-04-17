// master food object

const food = {
  bakery: [
    {
      item: "",
      emoji: "",
      desc: "",
      quantity: 0,
      left: "",
      expirationDate: "",
    },
    {
      item: "",
      emoji: "",
      desc: "",
      quantity: 0,
      left: "",
      expirationDate: "",
    },
  ],
  deli: [
    {
      item: "",
      emoji: "",
      desc: "",
      quantity: 0,
      left: "",
      expirationDate: "",
    },
    {
      item: "",
      emoji: "",
      desc: "",
      quantity: 0,
      left: "",
      expirationDate: "",
    },
  ],
  produce: [
    {
      item: "cantaloupe",
      emoji: "🍈",
      desc: "small container of cantaloupe from publix",
      quantity: 10,
      left: 8,
      expirationDate: "EAT SOON",
    },
    {
      item: "apples",
      emoji: "🍎",
      desc: "cosmic crisp apples",
      quantity: 3,
      left: 3,
      expirationDate: "EAT SOON",
    },
    {
      item: "grapes",
      emoji: "🍇",
      desc: "cotton candy grapes",
      quantity: 100,
      left: 20,
      expirationDate: "EAT SOON",
    },
  ],
  beverages: [
    {
      item: "coffee k-cups",
      emoji: "☕",
      desc: "dunkin & starbucks assorted flavors",
      quantity: 40,
      left: 40,
      expirationDate: "2024-10-24",
    },
    {
      item: "soda",
      emoji: "🥤",
      desc: "dr. pepper strawberries & creme / dr. pepper cream soda",
      quantity: 12,
      left: 9,
      expirationDate: "2024-05-27",
    },
  ],
  snacks: [
    {
      item: "nature valley wafer bars",
      emoji: "🥨",
      desc: "pretzel peanut butter wafer bars",
      quantity: 10,
      left: 10,
      expirationDate: "2024-07-07",
    },
    {
      item: "honeycrisp & strawberry applesauce",
      emoji: "🫙",
      desc: "motts applesauce (2 packs)",
      quantity: 12,
      left: 12,
      expirationDate: "2025-03-14",
    },
  ],
  condiments: [
    {
      item: "ketchup",
      emoji: "🍅",
      desc: "publix ketchup (large)",
      quantity: 10,
      left: 6,
      expirationDate: "2024-12-28",
    },
    {
      item: "grape jelly",
      emoji: "🍇",
      desc: "greenwise grape jelly",
      quantity: 10,
      left: 7,
      expirationDate: "2024-05-01",
    },
    {
      item: "duck sauce",
      emoji: "🥢",
      desc: "duck sauce",
      quantity: 10,
      left: 10,
      expirationDate: "2026-06-07",
    },
    {
      item: "peanut butter",
      emoji: "🥜",
      desc: "peter pan crunchy peanut butter (large)",
      quantity: 10,
      left: 8,
      expirationDate: "2025-03-30",
    },
  ],
  frozenFoods: [
    {
      item: "hash browns",
      emoji: "🥔",
      desc: "publix seasoned diced hash browns",
      quantity: 1,
      left: 1,
      expirationDate: "FROZEN",
    },
    {
      item: "jalapeno poppers",
      emoji: "🌶️",
      desc: "tgi fridays jalapeno poppers",
      quantity: 15,
      left: 15,
      expirationDate: "FROZEN",
    },
    {
      item: "stuffed hash browns",
      emoji: "🥔",
      desc: "jimmy dean stuffed hash browns meat lovers",
      quantity: 4,
      left: 2,
      expirationDate: "FROZEN",
    },
    {
      item: "spicy chicken sandwiches",
      emoji: "🐔",
      desc: "tyson chicken sandwiches (large)",
      quantity: 8,
      left: 7,
      expirationDate: "FROZEN",
    },
  ],
  iceCream: [
    {
      item: "pecan caramel cluster",
      emoji: "🍨",
      desc: "godiva pecan caramel cluster ice cream (1 pint)",
      quantity: 1,
      left: 1,
      expirationDate: "FROZEN",
    },
    {
      item: "noosa sea salt caramel",
      emoji: "🍦",
      desc: "noosa sea salt caramel frozen yogurt (1 pint)",
      quantity: 1,
      left: 1,
      expirationDate: "FROZEN",
    },
  ],
};

// function to calculate percent bar
function percentBar(category, i) {
  let whatsLeft = food[category][i].left;
  let totalQuantity = food[category][i].quantity;

  return (whatsLeft / totalQuantity) * 100;
}

// function to check if the expiration date is within 7 days or in the past
function checkExpiration(expirationDate) {
  const currentDate = new Date();
  const daysDifference = Math.ceil(
    (expirationDate - currentDate) / (1000 * 60 * 60 * 24)
  ); // calculate difference in days

  return daysDifference;
}

// function to complete loops
function addToDom(category) {
  for (let i = 0; i < food[category].length; i++) {
    const newItem = document.createElement("li");
    const foodItem = food[category][i]; // making this a variable so the code looks cleaner

    newItem.innerHTML = `<div class="item-box">
    <div class="emoji-box">${foodItem.emoji}</div>
    <div class="food-info">
      <div class="food-title">${foodItem.item}</div>
      <div class="food-desc">${foodItem.desc}</div>
      <div class="quantity food-quantity">
      <div class="quantityBar" style="width: ${percentBar(
        category,
        i
      )}px"></div>
      <span class="expDate">  ${foodItem.expirationDate}</span>
    </div>
      
    </div>
  </div>
  <div class="separator"></div>`;

    // check when food will expire
    const itemExpiration = new Date(foodItem.expirationDate);
    const itemExpText = newItem.querySelector(".expDate");

    if (foodItem.expirationDate === "FROZEN") {
      itemExpText.style.color = "#3878b5"; // change text blue
    } else if (
      (checkExpiration(itemExpiration) <= 7 &&
        checkExpiration(itemExpiration) >= 0) ||
      foodItem.expirationDate === "EAT SOON"
    ) {
      itemExpText.style.color = "#ef8f28"; // change text orange
      itemExpText.style.fontWeight = "bold";
    } else if (checkExpiration(itemExpiration) < 0) {
      itemExpText.style.color = "#ef2c28"; // change text red
      itemExpText.style.fontWeight = "bold";
    }

    // changing the color of the fill bar
    const quantityFill = newItem.querySelector(".quantityBar");

    if (percentBar(category, i) <= 50) {
      quantityFill.style.backgroundColor = "#e54e50";
    }
    document.querySelector(`.${category} .item-info`).appendChild(newItem);

    if (foodItem.quantity === 0) {
      document.querySelector(`.${category} .item-info`).removeChild(newItem);
      document.querySelector(`.${category}`).style.display = "none"; // if category is empty, remove it
      return;
    }
  }
}

addToDom("bakery");
addToDom("deli");
addToDom("produce");
addToDom("beverages");
addToDom("snacks");
addToDom("condiments");
addToDom("frozenFoods");
addToDom("iceCream");
