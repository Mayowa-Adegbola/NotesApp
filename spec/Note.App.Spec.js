var note = new noteApplication('stephen');

//I test to see if all methods exists i.e if true

  describe('Notes Application', function(){

    it('should have create property', function(){
      expect(note.hasOwnProperty('create')).toBe(true);
    });
    it('should have listNotes property', function(){
      expect(note.hasOwnProperty('listNotes')).toBe(true);
    });
    it('should have get property', function(){
      expect(note.hasOwnProperty('get')).toBe(true);
    });
    it('should have search property', function(){
      expect(note.hasOwnProperty('search')).toBe(true);
    });
    it('should have delete property', function(){
      expect(note.hasOwnProperty('delete')).toBe(true);
    });
    it('should have edit property', function(){
      expect(note.hasOwnProperty('edit')).toBe(true);
    });

  
  }); 

  describe("Checks the class variables", function() {
    it("if the author property is created", function() {
    	expect(typeof note.author).toBe('string');
    });

    it("if note object is an array", function() {
    	
    	expect(typeof note.notes).toEqual('object');
    });

  });

  describe("Checks the create method", function() {

    it("if a note is created", function() {
    	
    	expect(note.create('This is a test note')).toBe("You have just created a note");
    });

    it("if whitespaces are not treated as notes", function() {
      
      expect(note.create('  ')).toBe("Nothing entered. Try and enter a valid note.");
    });

  });

  describe("Checks the get method", function() {
    it('should be able to get the note with that id from the notesList', function(){
        var note_id;
        expect(note.get(note_id)).toBe(note.notes[note_id])
      });
   });

  describe("Checks the edit method", function() {
   it("should be able to edit a note", function() {
        var new_note = "My last note";
        var old_note = "My first note";
        note.create(old_note);
        expect(note.edit(0, new_note) === new_note).toBeFalsy();
    });
  });

  describe("Checks the delete method", function() {
    it("should be able to delete a note", function() {
        var new_note = "My first note";
        note.create(new_note);
        note.delete(0);
        expect(note).not.toContain(new_note);
    });
  });


  


   





   