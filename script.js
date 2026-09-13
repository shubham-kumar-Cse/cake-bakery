function babahariharnath() {
  const mycontent = document.getElementById("mybox1id");
  const mybutton = document.getElementById("ReadMore");
  const span1 = document.getElementById("span1");

  if (mycontent.style.display === "none" || mycontent.style.display === "") {
    mycontent.style.display = "inline";
    span1.style.display = "none";
    mybutton.textContent = "Read Less";
  } else {
    mycontent.style.display = "none";
    mybutton.textContent = "Read More";
    span1.style.display = "inline";
  }
}





// Guchru Code start

const boxes = document.querySelectorAll(".guchru");


// popup,,,,,,,,,,,,start//
let selectedPrice = 0;
let selectedImage = "";
let selectedName = "";
//end popup,,,,,,,//
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    debugger;
    if (box.classList.contains("selected")) {
      box.classList.remove("selected");

      document.getElementById("Price").innerText = "";
      document.getElementById("ProductName").innerText = "";
      document.getElementById("image9135").style.backgroundImage = "";
       selectedPrice = 0;
        selectedImage = "";
         selectedName = "";
    } else {
      boxes.forEach((item) => item.classList.remove("selected"));
      box.classList.add("selected");
      document.getElementById("Price").innerText = box.children[1].innerText;
      document.getElementById("ProductName").innerText =
        box.children[2].innerText;

      document.getElementById("image9135").style.backgroundImage =
        "url('" + box.children[0].src + "')";

      document.getElementById("maincontainer15").scrollIntoView({
        behavior: "smooth",
      });

      //start popup ,,,,,,,,,2,,//
      document.getElementById("image9135").style.backgroundImage =
        "url('" + box.children[0].src + "')";
      selectedImage = box.children[0].src;

      selectedPrice = parseFloat(box.children[1].innerText.replace("$", ""));

      selectedName = box.children[2].innerText;
      //end popup ,,,,,,,,,2,,,//
    }
  
  });
});

// Guchru Code End
//  var clickbutton = document.getElementById("buynow1");
//  clickbutton.addEventListener("click",function(){

//  })

//start popup,,,,,,,,,,,3,,,,,,//
let quantity = 1;

const popup = document.getElementById("popup");

document.getElementById("buynow1").onclick = function () { debugger;
  if (selectedName == "") {
    alert("Please Select Product");

    return;
  }

  quantity = 1;

  document.getElementById("qty").innerText = quantity;

  document.getElementById("popupImage").src = selectedImage;

  document.getElementById("popupName").innerText = selectedName;

  document.getElementById("popupPrice").innerText = "$" + selectedPrice;

  document.getElementById("totalPrice").innerText = (
    selectedPrice * quantity
  ).toFixed(2);

  popup.style.display = "flex";
};

//,,,,,,,,,,,,,,,,,,//
document.getElementById("plus").onclick = function () {
  quantity++;

  document.getElementById("qty").innerText = quantity;

  document.getElementById("totalPrice").innerText = (
    selectedPrice * quantity
  ).toFixed(2);
};
//,,,,,,,,,,,,,,,,,//
document.getElementById("minus").onclick = function () {
  if (quantity > 1) {
    quantity--;

    document.getElementById("qty").innerText = quantity;

    document.getElementById("totalPrice").innerText = (
      selectedPrice * quantity
    ).toFixed(2);
  }
};
//,,,,,,,,,,,,,,,,,,,,,,//
document.getElementById("closePopup").onclick = function () {
  popup.style.display = "none";
};
//,,,,,,,end popup ,,,,,,,,,,,,3,,,,,,//
