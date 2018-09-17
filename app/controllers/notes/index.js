import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Controller.extend({

  query_param: 'filter',

  filteredList: computed('model.@each', 'filter', function () {

    let titleMatch = this.model;
    let contentMatch = this.model;
    //let results;
  

    const query = this.filter;

    if(query) {

      // One of the best regular expression website: http://www.regexr.com/
      // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      // i: case insensitive, g: global
      const regex = new RegExp(regexString, 'ig');


      titleMatch = titleMatch.filter((item) => item.get('title').match(regex));

      contentMatch = contentMatch.filter((item) => item.get('content').match(regex))

    }
    else{
      return this.model;
    }

    return [...new Set([...titleMatch, ...contentMatch])];

  })

});
