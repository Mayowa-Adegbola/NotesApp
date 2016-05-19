function noteApplication (author) {
	this.author = author;
	this.notes = [];

	this.create = function(note_content) {
		if (note_content.trim().length > 0) {
      		this.notes.push(note_content);
      		return "You have just created a note";
      	}
    	else {
      		return "Nothing entered. Try and enter a valid note.";
      	}

	};

	this.listNotes = function(){
        if (this.notes.length < 1){
            console.log("There are no notes in the library.");
        }
        else { 
        	for(let i = 0; i < this.notes.length; i++) {
                console.log("\nNote ID: " + i);
                console.log(this.notes[i]);
                console.log("\n\nBy Author " + this.author + "\n");
            }
        }
    };

    this.get = function(note_id) {
    	if ((note_id < 0) || (note_id > (this.notes.length - 1))){
			console.log("The note you requested does not exist. Try a valid note.");
		}
		else{
			console.log(this.notes[note_id]);
		}
    };

    this.search = function(search_text){
		foundIndex = [];
		for(let i = 0; i < this.notes.length; i++){
			if(this.notes[i].search(search_text) !== -1){
				foundIndex.push(i);
			}
		}
		if (foundIndex.length > 0){
			console.log("Showing results for search '[" + search_text + "]'");
			this.printResult(foundIndex);
		}
		else{
			console.log("No results found for search: " + search_text);
		}
	};

	this.printResult = function(arrIndex){
		for(let i = 0; i < arrIndex.length; i++){
			console.log("\nNote ID: " + arrIndex[i]);
			console.log(this.notes[arrIndex[i]]);
			console.log("\n\nBy Author " + this.author + "\n");
		}
	};

    this.delete = function(note_id){
		if((note_id < 0)||(note_id > this.notes.length - 1)){
			console.log("Invalid Note ID. Please, Try again.");
		}
		else{
			this.notes.splice(note_id, 1);
			console.log("Note successfully deleted.");
		}
	};

	this.edit = function(note_id, new_content){
		if ((note_id < 0) || (note_id > (this.notes.length - 1))){
			console.log("Invalid Note ID. Please, Try again.");
		}
		else{
			this.notes[note_id] = new_content;
			console.log("Note Edited Successfully");
		}
	};
}