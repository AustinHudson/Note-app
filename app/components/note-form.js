import Component from '@ember/component';

export default Component.extend({

    tagName: '',

    actions: {
  
        buttonClicked(param, param2) {
          this.sendAction('action', param, param2);
        }
    
      }

});
