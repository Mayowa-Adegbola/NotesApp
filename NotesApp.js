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
        if (this.noteArray.length < 1){
            console.log("There are no notes in the collection.");
        }
        else { 
        	for(let i = 0; i < this.notes.length; i++) {
                console.log("\nNote ID: " + this.notes[i]);
                console.log(this.notes[i]);
                console.log("\n\nBy Author " + this.author + "\n");
            }
        }
    } 

    this.get = function(note_id) {
      return "Note ID: " + this.notes[note_id];
    }

    this.search = function(search_text){
    	if (this.notes.includes(search_text)){
        	return "Note ID: " + this.note_id + "\n" + note_content + "\n\n" + "By Author " + this.author;
    	} else {
        return "search text not found"
    }

    this.delete = function(note_id){
    	delete this.notes[note_id]
	}


	this.edit = function(note_id, new_content){
    	this.notes[note_id] = new_content;
	}

    
}