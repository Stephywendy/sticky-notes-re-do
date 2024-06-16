

    const title = document.getElementById("Title");
    const content = document.getElementById("content");
    const save = document.getElementById("Save");
    const notesArea = document.getElementById("notes-area");

    let notes = [];

    if (localStorage.getItem("notes")) {
        notes = JSON.parse(localStorage.getItem("notes"));
    }
  
    function displayNotes() 

       notesArea.innerHTML = " " ;

       notes.forEach(function(note, index){
    let noteDiv = document.createElement("div");
       noteDiv.className = "note";
       noteDiv.innerHTML = 
      
      
       }
    );
        
