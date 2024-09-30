const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const openButton1 = document.querySelector(".open-button1");
const closeButton1 = document.querySelector(".close-button1");

const openButton2 = document.querySelector(".open-button2");
const closeButton2 = document.querySelector(".close-button2");

const openButton3 = document.querySelector(".open-button3");
const closeButton3 = document.querySelector(".close-button3");

function openModalWindow(button, modal) {
  button.addEventListener("click", () => {
    modal.showModal();
  });
}

function closeModalWindow(button, modal) {
  button.addEventListener("click", () => {
    modal.close();
  });
}

openModalWindow(openButton1, modal1);
closeModalWindow(closeButton1, modal1);
openModalWindow(openButton2, modal2);
closeModalWindow(closeButton2, modal2);

openModalWindow(openButton3, modal3);
closeModalWindow(closeButton3, modal3);
