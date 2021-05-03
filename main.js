let textInput = document.getElementById("textInput");
let addButton = document.querySelector("#add");
let notes = [];
let  notesList = document.getElementById("notesList");

//display note if there is something in Local Storage
let fetchNote = () =>{
        console.log("radi");
        const fetchData = localStorage.getItem("array");
        const fetchArray = JSON.parse(fetchData);
        notes  = fetchArray;
         console.log(fetchArray);
    
}
//ispis svih prethodih poruka
let displayNote = (value) =>{
    let noteElement = document.createElement("div");
    let p = document.createElement('p');
    let button = document.createElement('button');
    noteElement.setAttribute("class","noteElement");
     p.className ="note"
    console.log("prebacaj"+value);
    p.innerHTML = ` <p>${notes[value].message}</p>`;
    button.innerHTML = "delete"
    //adding custom IDs so we can delete exact notes 
    //    noteElement.setAttribute("id","noteIndex"+value);
    //    button.setAttribute("onclick","deleteNote("+notes[value].id+")");
    //    button.setAttribute("id","button"+value);
    //new delete
        setIDs(noteElement,button,notes[value].id);
    //append child to container
      notesList.appendChild(noteElement);
      noteElement.appendChild(p);
      noteElement.appendChild(button);

    // notesList.appendChild(noteElement);
    
}
let setIDs = (container,delButton,id) =>{
        container.setAttribute("id","deletes"+id);
        delButton.setAttribute("onclick","deleteNote("+id+")");
        
}


//check if there is something in local storage and display if is
    if(localStorage.getItem("array")!==null){
        console.log("ima nesto");
        fetchNote();
        for(let i =0; i<notes.length; i++){
            displayNote(i);
        }
        
    }
    else{
        console.log("nema nista");
        
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
          
          console.log("ovo je vrednost i "+ i)
       
    }
    console.log("ovo je vrednost i van petlje"+ i)
         // 
        displayNote(notes.length-1);
        
            setLocalStorage();
    }
    else
    {
        textInput.placeholder ="Please enter some text...";
    }
}
//Setting local storage data from user message
    const setLocalStorage = () =>{
        const stringifyArray = JSON.stringify(notes);
        localStorage.setItem("array",stringifyArray);
    }

    let deleteNote = (value) =>{
      
         console.log(value);
        
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