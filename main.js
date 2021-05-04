let textInput = document.getElementById("textInput");
let addButton = document.querySelector("#add");
let notes = [];
let  notesList = document.getElementById("notesList");

//fetch the stored notes from local storage
let fetchNote = () =>{
        console.log("radi");
        const fetchData = localStorage.getItem("array");
        const fetchArray = JSON.parse(fetchData);
        notes  = fetchArray;
         console.log(fetchArray);
    
}
//displaying notes 
let displayNote = (value) =>{
    let noteElement = document.createElement("div");
    let p = document.createElement('p');
    let button = document.createElement('button');
    noteElement.setAttribute("class","noteElement");
     p.className ="note"
    console.log("sent value"+value);
    p.innerHTML = ` <p>${notes[value].message}</p>`;
    button.innerHTML = "delete"
    //setting custom IDs so we can use those for deleting later
    setIDs(noteElement,button,notes[value].id);
    //append child to container
      notesList.appendChild(noteElement);
      noteElement.appendChild(p);
      noteElement.appendChild(button);   
}
//not the best way to set ids but it works 
let setIDs = (container,delButton,id) =>{
        container.setAttribute("id","deletes"+id);
        delButton.setAttribute("onclick","deleteNote("+id+")");       
}


//check if there is something in local storage and display if there is
    if(localStorage.getItem("array")!==null){
        console.log("there is something");
        fetchNote();
        for(let i =0; i<notes.length; i++){
            displayNote(i);
        }      
    }
    else{
        console.log("empty as a glass");    
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
        textInput.placeholder ="Please enter some text...";
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