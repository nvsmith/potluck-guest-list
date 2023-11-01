// Step 4 of 6
// Assemble a Potluck Guest List

// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// appears when guest list is full (not yet visible)
const assignButton = document.querySelector(".assign");
// list with guest name and dish assignment (not yet visible)
const assignedItems = document.querySelector(".assigned-items");

// On click, add user input to guest list
addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
        addToList(guest);
        clearInput();
        updateGuestCount();
    }
});

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const clearInput = function () {
    guestInput.value = "";
};

updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potluckItems = [
        "Bruschetta",
        "Nori Rolls",
        "Caprese Skewers",
        "Stuffed Peppadews",
        "Couscous Salad",
        "Icebox Cake",
        "Pasta Salad",
        "Ribs",
        "Buffalo Chicken",
        "Cheese Board",
    ];

    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(
            Math.random() * potluckItems.length
        );
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        let listItem = document.createElement("li");

        /* Use guest.innerText to get name inside the li. 
        Otherwise you’d get the li element itself */
        listItem.innerText = `${guest.innerText}: ${randomPotluckItem}`;
        assignedItems.append(listItem);

        /* Prevent duplicate assignments */
        potluckItems.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});
