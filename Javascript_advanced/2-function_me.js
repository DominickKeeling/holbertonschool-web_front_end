function welcomeMessage(fullName) {
  return function() {
    alert("Welcom " + fullName);
  }
}

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");