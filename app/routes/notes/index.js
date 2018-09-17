import Route from '@ember/routing/route';
import { filterBy } from '@ember/object/computed';

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
        },

    //     filterResults(searchParam) {
    //         console.log(searchParam);
    //     }
     }
   


    

});
