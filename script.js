"use strict";

function handleSubmit() {
  // Lấy giá trị của input email và chuyển sang in thường

  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  // Lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  // Điều kiện để là một email
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Kiểm tra email vừa nhập với match
  const checkEmail = emailValue.match(regex);

  // Lấy phần thông tin user
  const sectionContent = document.querySelector("#info .section-content-2");

  // Lấy element dể kiểm soát submit
  const submitControl = document.querySelector(".submit-email");

  // Kiểm tra format email, nếu đúng thì hiển thị thông tin
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";

    // Nếu nhập sai format email thì hiển thị ra một dòng lỗi
  } else {
    errorEmail.innerHTML = "Please enter a correct email format!";
  }
}

// Khi di chuột vào trong element
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

// Khi di chuột ra ngoài element
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("view-less")) {
    viewMore.style.display = "none";
  }
}

// Khi bấm vào nút View More
function handleViewMoreClick(element) {
  const parents = element.closest(".parent");
  const section = parents.querySelectorAll(".section-content-3");
  const viewMore = parents.querySelector(".control-view");

  if (viewMore.classList.value.includes("view-more")) {
    section.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more")
    viewMore.classList.remove("view-less")
    viewMore.innerHTML = "View Less";
  } else {
    section.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less")
    viewMore.classList.add("view-more")
    viewMore.innerHTML == "View More";
  }
}
