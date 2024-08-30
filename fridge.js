// master food object

const food = {
  bakery: [
    {
      item: "apple fritter",
      emoji: "🍩",
      desc: "publix apple fritter donuts",
      quantity: 0,
      left: 0,
      expirationDate: "EAT SOON",
    },
    {
      item: "cookies",
      emoji: "🍪",
      desc: "publix banana oatmeal cookies",
      quantity: 0,
      left: 0,
      expirationDate: "EAT SOON",
    },
  ],
  deli: [
    {
      item: "potato wedges",
      emoji: "🥔",
      desc: "",
      quantity: 0,
      left: 0,
      expirationDate: "EAT SOON",
    },
    {
      item: "chicken bacon ranch dip",
      emoji: "🥓",
      desc: "publix chicken bacon ranch drip",
      quantity: 0,
      left: 0,
      expirationDate: "2024-05-11",
    },

     {
      item: "jumbo pickle",
      emoji: "🥒",
      desc: "zesty garlic and hot",
      quantity: 2,
      left: 1,
      expirationDate: "2026-03-11",
    },
  ],
  produce: [
    {
      item: "orange honeydew",
      emoji: "🍈",
      desc: "small container of orangedew melons",
      quantity: 10,
      left: 5,
      expirationDate: "EAT SOON",
    },

    {
      item: "honeydew",
      emoji: "🍈",
      desc: "small container of honeydew from publix",
      quantity: 0,
      left: 0,
      expirationDate: "EAT SOON",
    },
    {
      item: "apples",
      emoji: "🍎",
      desc: "cosmic crisp apples",
      quantity: 2,
      left: 2,
      expirationDate: "EAT SOON",
    },
    {
      item: "watermelon",
      emoji: "🍉",
      desc: "watermelon chunks",
      quantity: 10,
      left: 5,
      expirationDate: "EAT SOON",
    },
    {
      item: "mango",
      emoji: "🥭",
      desc: "mangoes",
      quantity: 0,
      left: 0,
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
      desc: "starbucks creme brulee, lavazza espresso, lavazza classico, dunkin french vanilla",
      quantity: 34,
      left: 22,
      expirationDate: "2025-01-25",
    },
    {
      item: "soda",
      emoji: "🥤",
      desc: "canada dry ginger ale",
      quantity: 17,
      left: 8,
      expirationDate: "2024-11-19",
    },
     {
      item: "starbucks caramel frappucino",
      emoji: "☕",
      desc: "starbucks caramel frappucino bottle",
      quantity: 0,
      left: 0,
      expirationDate: "2024-12-04",
    },
  ],
  snacks: [
    {
      item: "nature valley wafer bars",
      emoji: "🥨",
      desc: "pretzel peanut butter wafer bars",
      quantity: 0,
      left: 0,
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
      desc: "red velvet cupcake",
      quantity: 0,
      left: 0,
      expirationDate: "2024-07-27",
    },
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "coconut caramel cookie",
      quantity: 0,
      left: 0,
      expirationDate: "2024-08-03",
    },
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "key lime crumble",
      quantity: 1,
      left: 1,
      expirationDate: "2024-09-25",
    },
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "salted caramel crunch",
      quantity: 0,
      left: 0,
      expirationDate: "2024-09-07",
    },
    {
      item: "chobani flip greek yogurt",
      emoji: "🥣",
      desc: "boston cream pie",
      quantity: 0,
      left: 0,
      expirationDate: "2024-07-29",
    },
  ],
  condiments: [
    {
      item: "ketchup",
      emoji: "🍅",
      desc: "publix ketchup (large)",
      quantity: 10,
      left: 10,
      expirationDate: "2025-08-28",
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
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },
     {
      item: "loaded potato skins",
      emoji: "🥔",
      desc: "tgi fridays loaded potato skins bacon and cheese",
      quantity: 5,
      left: 1,
      expirationDate: "FROZEN",
    },
    {
      item: "jalapeno chicken nuggets",
      emoji: "🐔",
      desc: "chicken nuggets filled with jalapeno and cheese",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },
    {
      item: "stuffed hash browns",
      emoji: "🥔",
      desc: "jimmy dean stuffed hash browns meat lovers",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },
    {
      item: "spicy chicken sandwiches",
      emoji: "🐔",
      desc: "tyson chicken sandwiches (large)",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },

    {
      item: "stuffed scallops",
      emoji: "🐟",
      desc: "large scallops",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },

    {
      item: "griddle sandwiches",
      emoji: "🥞",
      desc: "jimmy dean blueberry pancake sandwiches with sausage and cheese",
      quantity: 5,
      left: 4,
      expirationDate: "FROZEN",
    },

    {
      item: "stuffed clams",
      emoji: "🐟",
      desc: "large clams",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },

    {
      item: "donuts",
      emoji: "🍩",
      desc: "krispy kreme glazed donuts",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },

    {
      item: "philly cheesesteak spring rolls",
      emoji: "🥩",
      desc: "publix premium philly cheesesteak spring rolls",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },

      {
      item: "crispy dill pickles",
      emoji: "🥒",
      desc: "farm rich crispy dill pickle slices",
      quantity: 24,
      left: 24,
      expirationDate: "FROZEN",
    },

      {
      item: "mozzarella sticks",
      emoji: "🧀",
      desc: "farm rich mozzarella sticks",
      quantity: 21,
      left: 21,
      expirationDate: "FROZEN",
    },
  ],
  iceCream: [
    {
      item: "pecan caramel cluster",
      emoji: "🍨",
      desc: "godiva pecan caramel cluster ice cream (1 pint)",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },
    {
      item: "noosa sea salt caramel",
      emoji: "🍦",
      desc: "noosa sea salt caramel frozen yogurt (1 pint)",
      quantity: 0,
      left: 0,
      expirationDate: "FROZEN",
    },
    {
      item: "cold brew coffee sorbet",
      emoji: "🍦",
      desc: "talenti cold brew coffee sorbet (1 pint)",
      quantity: 5,
      left: 4,
      expirationDate: "FROZEN",
    },
    {
      item: "yasso greek yogurt bar",
      emoji: "❄️",
      desc: "vanilla chocolate crunch",
      quantity: 4,
      left: 4,
      expirationDate: "FROZEN",
    },

    {
      item: "yasso greek yogurt bar",
      emoji: "❄️",
      desc: "peanut butter chocolate crunch",
      quantity: 0,
      left: 0,
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

    // displaying info
    let isAmountVisible = false;

    // check when food will expire
    const itemExpiration = new Date(foodItem.expirationDate);
    const itemExpText = newItem.querySelector(".expDate");

    if (foodItem.expirationDate === "FROZEN") {
      itemExpText.style.color = "#3878b5"; // change text blue
      itemExpText.style.fontWeight = "700";
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

    // when quantity bar is clicked, display whats left amount
    quantityFill.addEventListener("click", function () {
      if (isAmountVisible) {
        quantityFill.innerHTML = ""; // remove text
      } else {
        quantityFill.innerHTML = `<div class="quantityShow">${foodItem.left} left</div>`;
      }
      isAmountVisible = !isAmountVisible;
    });

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
      itemExpText.style.fontWeight = "600";
      itemExpText.classList.remove("moveAround");

      if (checkExpiration(itemExpiration) <= 7) {
        itemExpText.style.color = "#ef8f28"; // orange
        itemExpText.style.fontWeight = "800";
      } else if (checkExpiration(itemExpiration) < 0) {
        itemExpText.style.color = "#ef2c28"; // red
      }
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
