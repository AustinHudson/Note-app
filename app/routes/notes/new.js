import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

    model(){
        return this.store.createRecord('note');
    },

    setupController(controller, model){
        this._super(controller, model);

        controller.set('title', 'Create a new note');
        controller.set('buttonLabel', 'Save Note');
    },

    renderTemplate() {
        this.render('notes/form');
    },

    

    actions: {

        saveNote(newNote, newTagName) {
        if (newTagName){
            let addedTags = newTagName.split(',');
       
        for (let i = 0; i < addedTags.length; i++){
            let newTag = this.store.createRecord('tag', {
                name: addedTags[i]
            });
           
            newNote.get('tags').then((tags) => tags.pushObject(newTag)).then(() => newTag.save());
            };

            newNote.save().then(() => this.transitionTo('notes'));
            
        }else{

            newNote.save().then(() => this.transitionTo('notes'));
        }
        
            
        

            

        },


        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
          }
    }


    
    
});
