import Route from '@ember/routing/route';

export default Route.extend({

    model(params) {
        return this.store.findRecord('note', params.id);
    },

    setupController(controller, model) {
        this._super(controller, model);
    
        controller.set('title', 'Edit Note');
        controller.set('buttonLabel', 'Save Note');
        controller.set('tagNames', "testing tag names")
      },


      renderTemplate() {
        this.render('notes/form');
      },  

      actions: {

        getTags(){
            return "Testing";
        },
    
        saveNote(newNote, newTagName) {

            if (newTagName){
                let addedTags = newTagName.split(',');
           
            for (let i = 0; i < addedTags.length; i++){
                let newTag = this.store.createRecord('tag', {
                    name: addedTags[i]
                });
               
                newNote.get('tags').then((tags) => tags.pushObject(newTag)).then(() => newTag.save());
                };

                let currentDate = new Date(); 
                newNote.set('lastEdit', currentDate);
                newNote.save().then(() => this.transitionTo('notes'));
                
            }else{
                let currentDate = new Date(); 
                newNote.set('lastEdit', currentDate);
                newNote.save().then(() => this.transitionTo('notes'));
                }
    
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
