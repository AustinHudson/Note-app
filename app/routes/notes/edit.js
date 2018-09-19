import Route from '@ember/routing/route';

export default Route.extend({

    model(params) {
        return this.store.findRecord('note', params.id);
    },

    setupController(controller, model) {
        this._super(controller, model);
    
        controller.set('title', 'Edit Note');
        controller.set('buttonLabel', 'Save Note');
      },
      renderTemplate() {
        this.render('notes/form');
      },  

      actions: {
    
        saveNote(note) {

          let currentDate = new Date(); 
          note.set('lastEdit', currentDate);
          note.save().then(() => this.transitionTo('notes'));
        },
    
        willTransition(transition) {
    
          let model = this.controller.get('model');
    
          if (model.get('hasDirtyAttributes')) {
            let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
    
            if (confirmation) {
              model.rollbackAttributes();
            } else {
              transition.abort();
            }
          }
        }
      }

});
