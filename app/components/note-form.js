import Component from '@ember/component';

export default Component.extend({

    tagName: '',

    actions: {
  
        buttonClicked(param) {
          this.sendAction('action', param);
        }
    
      }

});
