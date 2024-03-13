const btn = document.getElementById("ekle-btn");
const noteContainer = document.getElementById("note-container");


{/* <div class="note-box">
      <div class="note-bar">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
      </div>
      <div class="text-area-main">
        <div class="note hide">
        </div>
        <div class="text-area-div">
          <textarea class="text-area"></textarea>
        </div>
      </div>
    </div>   */}


const doSomethin = () =>{

let noteBox = document.createElement("div");
noteBox.classList.add("note-box");
noteContainer.appendChild(noteBox);

noteBox.innerHTML = `

<div class="note-bar">
  <div class="pin-div hide"> 
   <i class="fa-solid fa-thumbtack"></i>
  </div>
  <div>
    <i class="fa-solid fa-pen-to-square edit-btn"></i>
    <i class="fa-solid fa-trash-can sil-btn"></i>
  </div>
</div>
  <div class="text-area-main">
    <div class="note hide"></div>
  <div class="text-area-div ">
    <textarea class="text-area "></textarea>
  </div>
</div>

`
const editBtn = noteBox.querySelector(".edit-btn");
const silBtn = noteBox.querySelector(".sil-btn");
const textarea = noteBox.querySelector(".text-area");
const note = noteBox.querySelector(".note");
const pin = noteBox.querySelector(".pin-div");

silBtn.addEventListener("click",()=>{
  noteBox.remove();
})

editBtn.addEventListener("click",()=>{
  note.classList.toggle("hide");
  textarea.classList.toggle("hide");
  note.innerText = textarea.value;
  pin.classList.toggle("hide");
})

}


btn.addEventListener("click",doSomethin)
