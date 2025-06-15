document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guest-form");
  const input = document.getElementById("guest-name");
  const list = document.getElementById("guest-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = input.value.trim();

    // Don't add if input is empty
    if (name === "") {
      alert("Please enter a guest name.");
      return;
    }

    // Limit to 10 guests
    if (list.children.length >= 10) {
      alert("You can only add up to 10 guests.");
      return;
    }

    // Create list item
    const li = document.createElement("li");

    // Guest name
    const span = document.createElement("span");
    span.textContent = name + " ";

    // Timestamp
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const timeText = document.createElement("small");
    timeText.textContent = "(added at " + hours + ":" + minutes + ") ";

    // RSVP button
    const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "Attending";
    rsvpButton.addEventListener("click", function () {
      if (rsvpButton.textContent === "Attending") {
        rsvpButton.textContent = "Not Attending";
      } else {
        rsvpButton.textContent = "Attending";
      }
    });

    // Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      list.removeChild(li);
    });

    // Put everything together
    li.appendChild(span);
    li.appendChild(timeText);
    li.appendChild(rsvpButton);
    li.appendChild(removeButton);
    list.appendChild(li);

    // Clear input
    input.value = "";
  });
});
