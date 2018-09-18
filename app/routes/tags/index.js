import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('tag');
    },

    actions:{

        deleteTag(tag) {

            // let confirmation = confirm('Are You sure?');

            // if (confirmation) {
            //     tag.destroyRecord();
            // }

            tag.destroyRecord();
        },
        
    }
    
});
