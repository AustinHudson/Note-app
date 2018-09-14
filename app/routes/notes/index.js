import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('note');
    },

    actions: {
        deleteNote(note) {
            let confirmation = confirm('Are You sure?');

            if (confirmation) {
                note.destroyRecord();
            }
        }
    }
   


    

});
