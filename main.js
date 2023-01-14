const frontNumber = document.getElementById("frontCardNumber");
const frontName = document.getElementById("frontCardName");
const frontDateMonth = document.getElementById("frontCardExpMonth");
const frontDateYear = document.getElementById("frontCardExpYear");
const backCardCvc = document.getElementById("backCardCvc");
const cardName = document.getElementById("name");
const cardNumber = document.getElementById("cardNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const btn = document.getElementById("btn");
const thankYouBtn = document.getElementById("thankYouBtn");
const nameError = document.querySelector(".name-error");
const numberError = document.getElementById("numberError");
const dateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");

// Añadir valores a la tarjeta 

cardName.onkeyup = function () {
  if (cardName.value !== "") {
    frontName.innerHTML = cardName.value;
  } else {
    frontName.innerHTML = "jose avila";
  }
};

// cardNumber.onkeyup = () => {
//   if (cardNumber.value !== "") {
//     frontNumber.innerHTML = cardNumber.value;
//   } else {
//     frontNumber.innerHTML = "0000 0000 0000 0000";
//   }
// };

cardNumber.addEventListener("input",(e)=> {

  frontNumber.innerHTML=cc_format(e.target.value)



})


month.onkeyup = () => {
  if (month.value !== "") {
    frontDateMonth.innerHTML = month.value;
  } else {
    frontDateMonth.innerHTML = "00";
  }
};

year.onkeyup = () => {
  if (year.value !== "") {
    frontDateYear.innerHTML = year.value;
  } else {
    frontDateYear.innerHTML = "00";
  }
};

cvc.onkeyup = () => {
  if (cvc.value !== "") {
    backCardCvc.innerHTML = cvc.value;
  } else {
    backCardCvc.innerHTML = "000";
  }
};

// errores de pantalla 

// errores de nombre

btn.addEventListener("click", () => {
  if (/\S+/gi.test(cardName.value) == false) {
    nameError.style.display = "block";
    cardName.style.border = "2px solid rgba(255, 0, 0, 0.3)";

  } else {
    nameError.style.display = "none";
    cardName.style.border = "2px solid rgba(238,130,238)";
    card();
  }

  // errores del numero de tarjeta 

  if (/\d{16}/gi.test(cardNumber.value) == false) {
    numberError.style.display = "block";
    cardNumber.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    numberError.style.display = "none";
    cardNumber.style.border = "2px solid rgba(238,130,238)";
  }

  // error de fecha

  if (
    /\d{2}/gi.test(month.value) == false ||
    /\d{2}/gi.test(year.value) == false
  ) {
    dateError.style.display = "block";
    month.style.border = "2px solid rgba(255, 0, 0, 0.3)";
    year.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    dateError.style.display = "none";
    month.style.border = "2px solid rgba(238,130,238)";
    year.style.border = "2px solid rgba(238,130,238)";
  }

  //  Error CVC

  if (/\d{3}/gi.test(cvc.value) == false) {
    cvcError.style.display = "block";
    cvc.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    cvcError.style.display = "none";
    cvc.style.border = "2px solid rgba(238,130,238)";
  }

  if (
    nameError.style.display != "block" &&
    numberError.style.display != "block" &&
    dateError.style.display != "block" &&
    cvcError.style.display != "block"
  ) {
    document.querySelector(".card-info").style.display = "none";
    document.querySelector(".thank-you").style.display = "flex";
  }
});

thankYouBtn.addEventListener("click", () => {
  document.querySelector(".card-info").style.display = "flex";
  document.querySelector(".thank-you").style.display = "none";
  window.location.reload();
});


function cc_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];
  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}
//local storage
//localStorage.setItem('name','card');
//sessionStorage.setItem('name','card');


const card = () => {

  const newTarjInfo = { 

      name: frontName.value,
      number: frontNumber.value,
      month: frontDateMonth.value,
      year: frontDateYear.value,
      cvc: backCardCvc.value
  };

  
  localStorage.setItem("datos",JSON.stringify(newTarjInfo));

  const tarjeta = JSON.parse(localStorage.getItem("datos"));

  console.log(tarjeta);
  
}
//localStorage.clear();



