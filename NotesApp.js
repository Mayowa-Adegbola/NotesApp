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

}