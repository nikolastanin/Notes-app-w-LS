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
    console.log("prebacaj"+value);
    noteElement.innerHTML = ` <p>${notes[value].message}</p>`;
    notesList.appendChild(noteElement);
    
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
        //ovo je je menjano 
      
        let i ;
        noteObj.id = i;
        noteObj.message = textInput.value;
        notes.push(noteObj);
        
        for(i = 0; i<notes.length; i++){
            
            noteObj.id = i;
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
        console.log("ispisi neki unis");
    }
}
//Setting local storage data from user message
    const setLocalStorage = () =>{
        const stringifyArray = JSON.stringify(notes);
        localStorage.setItem("array",stringifyArray);
    }

    addButton.addEventListener("click",newNote);


