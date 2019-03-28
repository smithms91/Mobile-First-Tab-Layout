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


/* Call Section */
