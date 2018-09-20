import Component from '@ember/component';

export default Component.extend({

    
    actions: {

        deleteTag(param){
            
            param.destroyRecord();

        }

    }
    
});
