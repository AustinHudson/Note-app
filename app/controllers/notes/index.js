import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Controller.extend({

  query_param: 'filter',
  filteredList: computed('model.@each', 'filter', 'filterTag', function () {

    let titleMatch = this.model;
    let contentMatch = this.model;
    let tagMatchArray = this.model.toArray();
    
    const query = this.filter;
    const tagQuery = this.filterTag;
    
    if(query) {
      // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      // i: case insensitive, g: global
      const regex = new RegExp(regexString, 'ig');

      titleMatch = titleMatch.filter((item) => item.get('title').match(regex));
      contentMatch = contentMatch.filter((item) => item.get('content').match(regex))
    }
    
    if(tagQuery){
      const regexString = '(' + tagQuery.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      let tagMatch = []

      tagMatchArray.forEach(function(note){
        let noteTags = (note.get('tags'))
        noteTags.forEach(function(tag){
            if ((tag.name).match(regex)){
              tagMatch.push(note);
            }
         })         
          tagMatchArray = tagMatch;
        })  
      }

      if (!query && !tagQuery){
        return this.model;
      }

      if (query && !tagQuery){
        tagMatchArray = [];
      }

      if (tagQuery && !query){
        contentMatch = [];
        titleMatch = [];
      }

    return [...new Set([...titleMatch, ...contentMatch, ...tagMatchArray])];

  })

});
