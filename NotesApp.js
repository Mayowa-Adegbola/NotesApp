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
        else{for(let i = 0; i < this.notes.length; i++){
                console.log("\nNote ID: " + this.notes[i]);
                console.log(this.notes[i]);
                console.log("\n\nBy Author " + this.author + "\n");
         } 

    this.get = function(note_id) {
      return "Note ID: " + this.notes[note_id];
    }

    
}