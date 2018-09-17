import DS from 'ember-data';
import { Model } from 'ember-pouch';
import { notEmpty } from '@ember/object/computed';


export default Model.extend({

    title: DS.attr('string'),
    content: DS.attr('string'),
    
    lastUpdate: DS.attr('date'),
    createdOn: DS.attr('date', {
        defaultValue(){ return new Date();}
    }),
    lastEdit: DS.attr('date', {
        defaultValue(){return null;}
    }),
    tags: DS.hasMany('tag'),
    isValid: notEmpty('title')
    
});
