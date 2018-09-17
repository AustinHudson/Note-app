import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.createRecord('tag');
    },

    actions: {

        saveTag(newTag) {
            newTag.save().then(() => this.transitionTo('tags'));
        },


        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
          }


    }

});
