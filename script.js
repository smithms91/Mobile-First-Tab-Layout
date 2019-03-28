"use strict";

/* Global */
let callBtn = document.getElementById("call_tab");
let priceBtn = document.getElementById("price_tab");
let fbBtn = document.getElementById("fb_tab");
let staffBtn = document.getElementById("staff_tab");
let hoursBtn = document.getElementById("hours_tab");


/* Prices Section */
let priceOpen = false;
/* Event Listeners */
if(priceBtn.addEventListener) {
  priceBtn.addEventListener("click", openPriceSection, false);
} else if(priceBtn.attachEvent) {
  priceBtn.addEventListener("onclick", openPriceSection);
}

/* Open / Close Section */
function openPriceSection() {
  let priceSection = document.getElementById("price_section");
  if(!priceOpen) {
    priceSection.style.transform = "translateX(-20%)";
    if(staffOpen) {
      openStaffSection();
      hoursBtn.style.top = "0px";
    } else {
      hoursBtn.style.top = "0px";
    }
    priceOpen = !priceOpen;
  } else {
    priceSection.style.transform = "translateX(-100%)";
    hoursBtn.style.top = "-55px";
    priceOpen = !priceOpen;
  }
}

/* Staff Section */
let staffOpen = false;
/* Event Listeners */
if(staffBtn.addEventListener) {
  staffBtn.addEventListener("click", openStaffSection, false);
} else if(staffBtn.attachEvent) {
  staffBtn.addEventListener("onclick", openStaffSection);
}

/* Open / Close Section */
function openStaffSection() {
  let staffSection = document.getElementById("staff_section");
  if(!staffOpen) {
    staffSection.style.transform = "translateX(45%)";
    if(priceOpen) {
      openPriceSection();
      hoursBtn.style.top = "0px";
    } else {
      hoursBtn.style.top = "0px";
    }
    staffOpen = !staffOpen;
  } else {
    staffSection.style.transform = "translateX(125%)";
    hoursBtn.style.top = "-55px";
    staffOpen = !staffOpen;
  }

}

/* Hours Section */
let hoursOpen = false;
/* Event Listeners */
if(hoursBtn.addEventListener) {
  hoursBtn.addEventListener("click", openHoursSection, false);
} else if(hoursBtn.attachEvent) {
  hoursBtn.addEventListener("onclick", openHoursSection);
}

/* Open / Close Section */
function openHoursSection() {
  let hoursSection = document.getElementById("hours_section");
  if(!hoursOpen) {
    hoursSection.style.transform = "translateY(0px)";
    hoursOpen = !hoursOpen;
  } else {
    hoursSection.style.transform = "translateY(100%)";
    hoursOpen = !hoursOpen;
  }
  console.log("test");
}


/* Open / Close Price Tabs */
let haircut = document.getElementById("haircut_header");
let massage = document.getElementById("massage_header");
let spa = document.getElementById("spa_header");
let wax = document.getElementById("wax_header");

let haircutBox = document.getElementById("haircut_box");
let massageBox = document.getElementById("massage_box");
let spaBox = document.getElementById("spa_box");
let waxBox = document.getElementById("wax_box");

if(haircut.addEventListener) {
  haircut.addEventListener("click", openCloseHaircut, false);
} else if(haircut.attachEvent) {
  haircut.addEventListener("onclick", openCloseHaircut);
}

let openHaircut = true;
function openCloseHaircut() {
  if(!openHaircut) {
    haircutBox.style.height = "auto";
    haircutBox.style.display = "block";
    openHaircut = !openHaircut;
  } else {
    haircutBox.style.height = "0";
    haircutBox.style.display = "none";
    openHaircut = !openHaircut;
  }
}

if(massage.addEventListener) {
  massage.addEventListener("click", openCloseMassage, false);
} else if(massage.attachEvent) {
  massage.addEventListener("onclick", openCloseMassage);
}

let openMassage = false;
function openCloseMassage() {
  if(!openMassage) {
    massageBox.style.height = "auto";
    massageBox.style.display = "block";
    openMassage = !openMassage;
  } else {
    massageBox.style.height = "0px";
    massageBox.style.display = "none";
    openMassage = !openMassage;
  }
}

if(spa.addEventListener) {
  spa.addEventListener("click", openCloseSpa, false);
} else if(spa.attachEvent) {
  spa.addEventListener("onclick", openCloseSpa);
}

let openSpa = false;
function openCloseSpa() {
  if(!openSpa) {
    spaBox.style.height = "auto";
    spaBox.style.display = "block";
    openSpa = !openSpa;
  } else {
    spaBox.style.height = "0";
    spaBox.style.display = "none";
    openSpa = !openSpa;
  }
}

if(wax.addEventListener) {
  wax.addEventListener("click", openCloseWax, false);
} else if(wax.attachEvent) {
  wax.addEventListener("onclick", openCloseWax);
}

let openWax = false;
function openCloseWax() {
  if(!openWax) {
    waxBox.style.height = "auto";
    waxBox.style.display = "block";
    openWax = !openWax;
  } else {
    waxBox.style.height = "0";
    waxBox.style.display = "none";
    openWax = !openWax;
  }
}
