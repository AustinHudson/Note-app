import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Controller.extend({

  query_param: 'filter',

  filteredList: computed('model.@each', 'filter', function () {

    let results = this.model;


    const query = this.filter;

    if(query) {

      // One of the best regular expression website: http://www.regexr.com/
      // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      // i: case insensitive, g: global
      const regex = new RegExp(regexString, 'ig');


      results = results.filter((item) => item.get('title').match(regex));




    }

    return results;
  })

});
