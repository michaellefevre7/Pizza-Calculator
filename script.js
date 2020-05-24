
//Little Caesars
let pizzaDetails = []
pizzaDetails.push({
  name: "Little Caesars",
  pricingInfo : [
    ["large", 5.00]
  ]
})

//Dominos
pizzaDetails.push({
  name: "Dominos",
  pricingInfo: [
    ["small", 5.99],
    ["medium", 7.99],
    ["large", 9.99]
  ]
  
})

//Pizza Huts
pizzaDetails.push({
  name: "Pizza Hut",
  pricingInfo: [
    ["medium", 11.99],
    ["large", 14.99]
  ]
})

//Papa Johns
pizzaDetails.push({
  name: "Papa Johns",
  pricingInfo : [
    ["medium", 13.00],
    ["large", 15.00],
    ["extra large", 17.00]
  ]
})

//Pizza Ranch 
pizzaDetails.push({
  name: "Pizza Ranch",
  pricingInfo : [
    ["mini", 2.99],
    ["small", 6.00],
    ["medium", 10.00],
    ["large", 12.00]
  ]
})

//Papa Murphy's
pizzaDetails.push({
  name: "Papa Murphy's",
  pricingInfo : [
    ["kids", 3.00],
    ["large", 9.00]
  ]
})


//Godfather's Pizza
pizzaDetails.push({
  name: "Godfather's Pizza",
  pricingInfo : [
    ["mini", 3.99],
    ["small", 9.99],
    ["medium", 11.99],
    ["large", 14.99],
    ["Jumbo", 17.99]
  ]
})



let cost



function whenPressed() {
  cost = parseFloat(document.querySelector("#cost").value)
  document.querySelector("#text").innerHTML = ""
  pizzaDetails.map(display)
}






function display(pizza) {
  let container = document.createElement("div")
  
  let title = document.createElement("h3")
  title.innerHTML = pizza.name
  container.appendChild(title)
  
  
  
  pizza.pricingInfo.map(function(info) {
    
    let pizzaNum = calculateNumber(info[1])
    
    let paragraph = document.createElement('p')
    paragraph.innerHTML = pizzaNum + " " + info[0] + " pizzas"
    container.appendChild(paragraph)
  })
  
  
  
  
  document.querySelector("#text").appendChild(container)
}




function calculateNumber(pizzaPrice) {
  if (document.querySelector('#round').value == "roundUp") {
    if (cost % pizzaPrice == 0) {
      return parseInt(String(cost / pizzaPrice))
    }
    return parseInt(String((cost / pizzaPrice) + 1))
  }
  else if (document.querySelector('#round').value == "fraction") {
    return toFixed(cost / pizzaPrice)
  }
  
  if (cost % pizzaPrice == 0) {
    return parseInt(String(cost / pizzaPrice))
  }
  return parseInt(String((cost / pizzaPrice)))
  
}
