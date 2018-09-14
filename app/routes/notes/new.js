import Route from '@ember/routing/route';

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

        saveNote(newNote) {
            newNote.save().then(() => this.transitionTo('notes'));
        },


        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
          }


    }


    
    
});
