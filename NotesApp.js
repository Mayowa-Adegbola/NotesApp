function NoteApplication (author) {
	this.author = author;
	this.notes = [];

	this.create = function(note_content) {
		if (note_content.length > 0) {
      		this.notes.push(note_content);
      		return "You have created a note";
      	}
    	else {
      		return "You haven't entered a valid note";
      	}

	}

	this.listNotes = function(){
        if(this.noteArray.length < 1){
            console.log("There are no notes in the collection.");
        }
        else{for(let i = 0; i < this.noteArray.length; i++){
                console.log("\nNote ID: " + this.noteArray[i]);
                console.log(this.noteArray[i]);
                console.log("\n\nBy Author " + this.author + "\n");
         }    
}