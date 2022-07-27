let bookmark = document.getElementById("bookmark");
let text = document.getElementById("book_text");
let mark = document.getElementById("mark");

var click = false;

bookmark.addEventListener("click", () => {
  if(click == false){ 
  text.innerHTML = "Bookmarked";
  bookmark.style.color = "hsl(176, 50%, 47%)";
  bookmark.style.backgroundColor = "hsla(176, 50%, 47%, 0.127)";
  click = true;
  }else{
  text.innerHTML = "Bookmark";
  bookmark.style.color = "#000";
  bookmark.style.backgroundColor = "rgba(128, 128, 128, 0.073)";
  click = false;
  }
})
  
let back = document.getElementById("back");
let modal = document.getElementById("section");
back.addEventListener("click", ()=>{
  modal.style.display = "block";
  
  const body = 'body::before { display: block; content: ""; position: fixed; width: 100%; height: 100%; z-index: 2; background-color: rgba(0, 0, 0, 0.361); top: 0; left: 0;}';
  const styleTag = document.createElement("style");
  styleTag.innerHTML = body;
  document.head.insertAdjacentElement('beforeend', styleTag);
})

let label = document.getElementById("pledge");
let label_1 = document.getElementById("pledge_1");
let label_2 = document.getElementById("pledge_2");
let continu = document.getElementById("just_continue");
let continu_1 = document.getElementById("choose_pledge_1");
let continu_2 = document.getElementById("choose_pledge_2");

let simplepledge = document.getElementById("simplepledge");
let pledge_card_1 = document.getElementById("pledge_card_1");
let pledge_card_2 = document.getElementById("pledge_card_2");

label.addEventListener("click", ()=>{
  continu.style.display = "flex";
  continu_1.style.display = "none";
  continu_2.style.display = "none";
  simplepledge.style.outline = "2px solid var(--clr-btn)";
  pledge_card_1.style.outline = "1px solid black";
  pledge_card_2.style.outline = "1px solid black";
})
label_1.addEventListener("click", ()=>{
  continu.style.display = "none";
  continu_1.style.display = "flex";
  continu_2.style.display = "none";
  simplepledge.style.outline = "1px solid black";
  pledge_card_1.style.outline = "2px solid var(--clr-btn)";
  pledge_card_2.style.outline = "1px solid black";
})
label_2.addEventListener("click", ()=>{
  continu.style.display = "none";
  continu_1.style.display = "none";
  continu_2.style.display = "flex";
  simplepledge.style.outline = "1px solid black";
  pledge_card_1.style.outline = "1px solid black";
  pledge_card_2.style.outline = "2px solid var(--clr-btn)";
})

let btn_continu = document.getElementById("continue");
let btn_continu_1 = document.getElementById("continue_1");
let btn_continu_2 = document.getElementById("continue_2");
let closer = document.getElementById("closer");
let finish = document.getElementById("finish");
let end_modal = document.getElementById("end_modal");

btn_continu.addEventListener("click", ()=>{
  end_modal.style.display = "flex";
  modal.style.display = "none";
  
  const body = 'body::before { display: block; content: ""; position: fixed; width: 100%; height: 100%; z-index: 2; background-color: rgba(0, 0, 0, 0.361); top: 0; left: 0;}';
  const styleTag = document.createElement("style");
  styleTag.innerHTML = body;
  document.head.insertAdjacentElement('beforeend', styleTag);
})
btn_continu_1.addEventListener("click", ()=>{
  end_modal.style.display = "flex";
  modal.style.display = "none";
  
  const styleTag = document.createElement("style");
  styleTag.innerHTML = body;
  document.head.insertAdjacentElement('beforeend', styleTag);
})
btn_continu_2.addEventListener("click", ()=>{
  end_modal.style.display = "flex";
  modal.style.display = "none";
  
  const styleTag = document.createElement("style");
  styleTag.innerHTML = body;
  document.head.insertAdjacentElement('beforeend', styleTag);
})

finish.addEventListener("click", ()=>{
  end_modal.style.display = "none";
  const styleTag = document.createElement("style");
  const body = 'body::before { display: none; content: ""; position: fixed; width: 100%; height: 100%; z-index: 2; background-color: rgba(0, 0, 0, 0.361); top: 0; left: 0;}';
  styleTag.innerHTML = body;
  document.head.insertAdjacentElement('beforeend', styleTag);
})

closer.addEventListener("click", ()=>{
  modal.style.display = "none";
  const styleTag = document.createElement("style");
  const body = 'body::before { display: none; content: ""; position: fixed; width: 100%; height: 100%; z-index: 2; background-color: rgba(0, 0, 0, 0.361); top: 0; left: 0;}';
  styleTag.innerHTML = body;
  document.head.insertAdjacentElement('beforeend', styleTag);
})


let choose_1 = document.getElementById("choose_1");
let choose_2 = document.getElementById("choose_2");

choose_1.addEventListener("focusout", ()=>{
  if(choose_1.value < 25){
     choose_1.value = 25;
  }
})
choose_2.addEventListener("focusout", ()=>{
  if(choose_2.value < 75){
     choose_2.value = 75;
  }
})


let menu = document.getElementById("menu");
let close = document.getElementById("close");

let new_menu = document.getElementById("new_menu");

menu.addEventListener("click", ()=>{
  new_menu.style.display = "flex";
  menu.style.display = "none";
  document.getElementById("close").style.display = "block";
})

document.getElementById("close").addEventListener("click", ()=>{
  new_menu.style.display = "none";
  menu.style.display = "block";
  document.getElementById("close").style.display = "none";
})






