let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let topara = document.getElementById("to");
let frompara = document.getElementById("from");
let greetText = document.getElementById("greetText");

let newgreetings = JSON.parse(greeting);

topara.textContent = "To:" + newgreetings.to;
frompara.textContent = "From:" + newgreetings.from;
greetText.textContent = newgreetings.greetText;
