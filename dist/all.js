import"./sass/main.scss";const refs={button:document.querySelector(".main-section__button"),modalWindow:document.querySelector(".backdrop"),closeBtn:document.querySelector(".popup__close-btn"),counter:document.querySelector(".popup__accent"),resetBtn:document.querySelector(".popup__reset-btn")},{button,modalWindow,closeBtn,counter,resetBtn}=refs;button.addEventListener("click",openModalWindow),closeBtn.addEventListener("click",closeModalWindow),modalWindow.addEventListener("click",onBackdropClick),resetBtn.addEventListener("click",resetCouner);let count=0;const Storage_Key="count-value";function openModalWindow(){window.addEventListener("keydown",onEscKeyPress),modalWindow.classList.remove("visually-hidden")}function closeModalWindow(){window.removeEventListener("keydown",onEscKeyPress),modalWindow.classList.add("visually-hidden")}function onBackdropClick(e){e.currentTarget===e.target&&closeModalWindow()}function onEscKeyPress(e){"Escape"===e.code&&closeModalWindow()}function resetCouner(){count=0,c.textContent=""+count,resetBtn.classList.add("visually-hidden"),localStorage.removeItem("count-value")}button.addEventListener("click",()=>{count=localStorage.getItem(Storage_Key),count++,console.log(count),localStorage.setItem(Storage_Key,count),c.textContent=""+count,5<=count&&resetBtn.classList.remove("visually-hidden")});