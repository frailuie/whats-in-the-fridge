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
      item: "potato wedges",
      emoji: "🥔",
      desc: "",
      quantity: 10,
      left: 10,
      expirationDate: "EAT SOON",
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
      quantity: 0,
      left: 0,
      expirationDate: "EAT SOON",
    },
    {
      item: "apples",
      emoji: "🍎",
      desc: "cosmic crisp apples",
      quantity: 3,
      left: 2,
      expirationDate: "EAT SOON",
    },
    {
      item: "watermelon",
      emoji: "🍉",
      desc: "watermelon chunks",
      quantity: 10,
      left: 10,
      expirationDate: "EAT SOON",
    },
    {
      item: "grapes",
      emoji: "🍇",
      desc: "cotton candy grapes",
      quantity: 0,
      left: 0,
      expirationDate: "EAT SOON",
    },
  ],
  beverages: [
    {
      item: "coffee k-cups",
      emoji: "☕",
      desc: "dunkin & starbucks assorted flavors",
      quantity: 60,
      left: 60,
      expirationDate: "2024-10-24",
    },
    {
      item: "soda",
      emoji: "🥤",
      desc: "dr. pepper strawberries & creme / dr. pepper cream soda",
      quantity: 12,
      left: 8,
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
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "strawberry cheesecake",
      quantity: 1,
      left: 1,
      expirationDate: "2024-05-30",
    },
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "coconut caramel cookie",
      quantity: 1,
      left: 1,
      expirationDate: "2024-05-12",
    },
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "key lime crumble",
      quantity: 1,
      left: 1,
      expirationDate: "2024-05-29",
    },
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "salted caramel crunch",
      quantity: 1,
      left: 1,
      expirationDate: "2024-05-22",
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
      left: 9,
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
      desc: "publix seasoned diced hash browns (1 bag)",
      quantity: 20,
      left: 20,
      expirationDate: "FROZEN",
    },
    {
      item: "jalapeno poppers",
      emoji: "🌶️",
      desc: "tgi fridays jalapeno poppers",
      quantity: 15,
      left: 12,
      expirationDate: "FROZEN",
    },
    {
      item: "stuffed hash browns",
      emoji: "🥔",
      desc: "jimmy dean stuffed hash browns meat lovers",
      quantity: 4,
      left: 1,
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
      quantity: 10,
      left: 9,
      expirationDate: "FROZEN",
    },
    {
      item: "noosa sea salt caramel",
      emoji: "🍦",
      desc: "noosa sea salt caramel frozen yogurt (1 pint)",
      quantity: 10,
      left: 9,
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
      itemExpText.style.fontWeight = "500";
    } else if (
      (checkExpiration(itemExpiration) <= 7 &&
        checkExpiration(itemExpiration) >= 0) ||
      foodItem.expirationDate === "EAT SOON"
    ) {
      itemExpText.style.color = "#ef8f28"; // change text orange
      itemExpText.style.fontWeight = "800";
    } else if (checkExpiration(itemExpiration) < 0) {
      itemExpText.style.color = "#ef2c28"; // change text red
      itemExpText.style.fontWeight = "800";
    }

    // changing the color of the fill bar
    const quantityFill = newItem.querySelector(".quantityBar");

    if (percentBar(category, i) <= 50) {
      quantityFill.style.backgroundColor = "#e5974e"; // orange
    }

    if (percentBar(category, i) <= 20 || foodItem.left <= 1) {
      quantityFill.style.backgroundColor = "#e54e50"; // red
      itemExpText.textContent = "RUNNING LOW";
      itemExpText.style.color = "#e52d30";
      itemExpText.style.fontWeight = "800";
      itemExpText.classList.add("moveAround");
    }

    // added condition for when there's only one food item
    if (foodItem.left == 1 && foodItem.quantity == 1) {
      quantityFill.style.backgroundColor = "#4e9ee5"; // blue
      itemExpText.textContent = foodItem.expirationDate;
      itemExpText.style.color = "#3d3d3f";
       itemExpText.style.fontWeight = "300";
      itemExpText.classList.remove("moveAround");
    }
    document.querySelector(`.${category} .item-info`).appendChild(newItem);

    if (foodItem.quantity === 0) {
      document.querySelector(`.${category} .item-info`).removeChild(newItem); // if item's quantity is 0, take it out

      // looping through all items' quantities to check if a category is empty
      let isEmpty = true;

      for (let i = 0; i < food[category].length; i++) {
        if (food[category][i].quantity > 0) {
          isEmpty = false; // if quantity is greater than 0, it's not empty
        }
      }

      if (isEmpty) {
        document.querySelector(`.${category}`).style.display = "none"; // if it is 0, don't display it
      }
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
