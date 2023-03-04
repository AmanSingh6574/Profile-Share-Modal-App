const modalCard = document.querySelector(".modal-card");
const modalcardConnect = document.querySelector(".modal-card-connect");
const overlay = document.querySelector(".overlay");
const openModal = () => {
    console.log("Modal is Open");
    modalCard.classList.add("active");
    overlay.classList.add("overlayactive");
  
};
const closeModal = () => {
    modalCard.classList.remove("active");
    overlay.classList.remove("overlayactive");
    
};
const openModalconnect = () => {
    modalcardConnect.classList.add("active");
    overlay.classList.add("overlayactive");
}
const closeModalconnect = () =>{
    modalcardConnect.classList.remove("active");
    overlay.classList.remove("overlayactive");
}
