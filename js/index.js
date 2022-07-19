// // esto sirve para cambiar el idioma
// let check = document.querySelector(".check");
// check.addEventListener("click", idioma);

// function idioma() {
//   let id = check.checked;
//   if (id == true) {
//     location.replace("./html/indexx.html");
//   } else {
//     location.replace("../index.html");
//   }
// }

// delacando variables btc
const btc = document.querySelector("#btc");
const simbole = document.querySelector(".simbole");
const marketcap = document.querySelector("#marketcap");
//consumiendo api
async function getResponse() {
  const response = await fetch("https://api.coinlore.net/api/ticker/?id=90");
  const data = await response.json(); // Extracting data as a JSON Object from the response
  const parseNumber1 = data[0].price_usd;
  simbole.innerHTML = data[0].symbol;
  const parseNumber = data[0].market_cap_usd;
  marketcap.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber);
  btc.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber1);
}

getResponse();

/// declarando variables eth
const eth = document.querySelector("#eth");
const sEth = document.querySelector(".simbole-eth");
const mkEth = document.querySelector("#marketcap-eth");
//consumiendo api
async function getResponseE() {
  const response = await fetch("https://api.coinlore.net/api/ticker/?id=80");
  const data = await response.json(); // Extracting data as a JSON Object from the response
  const parseNumber1 = data[0].price_usd;
  sEth.innerHTML = data[0].symbol;
  const parseNumber = data[0].market_cap_usd;
  mkEth.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber);
  eth.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber1);
}

getResponseE();
//declarando variables  polkadot
const polkadot = document.querySelector("#dot");
const mkDot = document.querySelector("#marketcap-dot");
const sDot = document.querySelector(".simbole-dot");

async function getResponseD() {
  const response = await fetch("https://api.coinlore.net/api/ticker/?id=45219");
  const data = await response.json(); // Extracting data as a JSON Object from the response
  const parseNumber1 = data[0].price_usd;
  sDot.innerHTML = data[0].symbol;
  const parseNumber = data[0].market_cap_usd;
  mkDot.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber);
  polkadot.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber1);
}
getResponseD();

//declarando variables  Dog
const dog = document.querySelector("#dog");
const mkDog = document.querySelector("#marketcap-dog");
const sDog = document.querySelector(".simbole-dog");

async function getResponseDog() {
  const response = await fetch("https://api.coinlore.net/api/ticker/?id=2");
  const data = await response.json(); // Extracting data as a JSON Object from the response
  const parseNumber1 = data[0].price_usd;
  sDog.innerHTML = data[0].symbol;
  const parseNumber = data[0].market_cap_usd;
  mkDog.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber);
  dog.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber1);
}
getResponseDog();
//declarando variables  bnb
const bnb = document.querySelector("#bnb");
const mkBnb = document.querySelector("#marketcap-bnb");
const sBnb = document.querySelector(".simbole-bnb");

async function getResponseBnb() {
  const response = await fetch("https://api.coinlore.net/api/ticker/?id=2710");
  const data = await response.json(); // Extracting data as a JSON Object from the response
  const parseNumber1 = data[0].price_usd;
  sBnb.innerHTML = data[0].symbol;
  const parseNumber = data[0].market_cap_usd;
  mkBnb.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber);
  bnb.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseNumber1);
}
getResponseBnb();
