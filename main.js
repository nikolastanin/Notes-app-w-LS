let textInput = document.getElementById("textInput");
let addButton = document.querySelector("#add");
let notes = [];
let  notesList = document.getElementById("notesList");

//displaying notes 
let displayNote = (value) =>{
    //varibales
    let noteElement = document.createElement("div");
    let p = document.createElement('p');
    let button = document.createElement('button');
    // let date = document.createElement("p");
    // let newDate = new Date();
    //setting variable values and attributes
    noteElement.setAttribute("class","noteElement");
     p.className ="note"
    p.innerHTML = ` <p>${notes[value].message}</p>`;
    button.innerHTML = "delete"
    // date.innerHTML =newDate.toLocaleDateString();
    // date.id = "date";
    //setting custom IDs so we can use those for deleting later
    setIDs(noteElement,button,notes[value].id);
    //append child to container
      notesList.appendChild(noteElement);
      noteElement.appendChild(p);
    //   noteElement.appendChild(date);
      noteElement.appendChild(button);   
    
}

//not the best way to set ids but it works 
let setIDs = (container,delButton,id) =>{
        container.setAttribute("id","deletes"+id);
        delButton.setAttribute("onclick","deleteNote("+id+")");       
}

//fetching data from local storage if any displaying it
const fetchData = localStorage.getItem("array");
const fetchArray = JSON.parse(fetchData);
if(fetchArray.length!==0){
    notes = fetchArray;
    console.log("Local storage has something>>>");
    console.log(fetchArray);
    for(let i =0; i<notes.length; i++){
                 displayNote(i);
         }     
}
else{
    console.log("Local storage is empty");
}

//creating new note and sending data to setLocalStorage function
const newNote = () =>{
    if(textInput.value!=0 ){
        console.log("click");
        let noteObj  = new Object();
        let i ;
        noteObj.id = Date.now();
        noteObj.message = textInput.value;
        notes.push(noteObj);
        
        for(i = 0; i<notes.length; i++){
            
            noteObj.id = Date.now();
            noteObj.delete = "onclick=delete"+i;
          
          console.log("let i value in the loop = "+ i)
       
    }
    console.log("let i value outside the loop = "+ i)
         // -1 because the i is +1 outside the loop so a simple fix
            displayNote(notes.length-1);   
            setLocalStorage();
    }
    else
    {
        //making sure there is something written in the input field
        textInput.placeholder ="Enter some text...";
    }
}
//Setting local storage data from user message
    const setLocalStorage = () =>{
        const stringifyArray = JSON.stringify(notes);
        localStorage.setItem("array",stringifyArray);
    }
// deleting the notes with custom IDs, and onclick... 
// again not the best but it works 
    let deleteNote = (value) =>{
        //  console.log(value);
        let deleteNoteElement = document.getElementById("deletes"+value);
        deleteNoteElement.remove();
        var lists = notes.filter(x => {
            return x.id != value;
          });
          notes = lists;
        setLocalStorage();
     }

    addButton.addEventListener("click",newNote);


    // Created by Nikola Stanin 03.05.2021.