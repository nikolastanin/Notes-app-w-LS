let textInput = document.getElementById("textInput");
let addButton = document.querySelector("#add");
let notes = [];
// let p = document.getElementById("pag");


//display note if there is something in Local Storage
let fetchNote = () =>{
        console.log("radi");
        const fetchData = localStorage.getItem("array");
       const fetchArray = JSON.parse(fetchData);
      notes  = fetchArray;
       console.log(fetchArray);
    //   displayNote(notes);

}
//ispis svih prethodih poruka
let displayNote = () =>{
 
  
    for( let i =0; i<notes.length; i++){
        let x = document.createElement("p");
        console.log(notes[i].message); 
        x.innerHTML = notes[i].message;
        document.body.appendChild(x);
       console.log(i+"!!");
   
    }  
 
   
  
  
    
        
}



//check if there is something in local storage

    if(localStorage.getItem("array")!==null){

        console.log("ima nesto");
        fetchNote();
        displayNote();
    }
    else{
        console.log("nema nista");
        
    }




//creating new note and sending data to setLocalStorage function
const newNote = () =>{
    
    console.log("click");
    let noteObj  = new Object();
    let i ;
    for( i = 0; i<=notes.length; i++){

        noteObj.id = i;
        noteObj.delete = "onclick=delete"+i;
        noteObj.message = textInput.value;
        // console.log(i);
       
    }
     notes.push(noteObj);
     //ispis trenutno iskucane poruke
  //i-1 because i goes up when out of loop
     console.log(notes[i-1].message+"ovo je poruka ispisana od kor trenutno");
    //  x.innerHTML = ` <p>${notes[i-1].message}</p>`
    let y = document.createElement("p");
    y.innerHTML = ` <p>${notes[i-1].message}</p>`;
    document.body.appendChild(y);
    
        
    
    setLocalStorage();
    
    

}
//Setting local storage data from user message
    const setLocalStorage = () =>{

        const stringifyArray = JSON.stringify(notes);
        localStorage.setItem("array",stringifyArray);
    }
       
     
    






addButton.addEventListener("click",newNote);