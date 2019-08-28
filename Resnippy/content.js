console.log("content is running");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
  if (msg.txt === "resnippy") {

    // extract ingredients from realplans webiste without preceding quantities
        // items is a nodelist object with N spans
    let objIngredients = document.querySelectorAll("span[data-ing]");

    // could extract ingredients with preceding quantities
    // em.shopping-list-Name  or  label.cl-checkmark-text.data-Class

    // convert nodelist to array and extract ingredient name
    let arrIngredients = Array.prototype.map.call(objIngredients, extractText);

    // concatenate ingredients into shopping list
    // 1 line per ingredient
    let shoppingList = arrIngredients.join("\n");

    // copy shoppinglist to clipboard and open ocado website
    copyToClipboard(shoppingList)
    alert("Shopping list successfuly copied to clipboard!")
    window.open('https://www.ocado.com/', '_blank')
  }
}

function extractText(item) {
  return item.innerHTML
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  // Be careful if you use texarea. setAttribute('value', value), which work
  // with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
