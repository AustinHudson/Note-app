import DS from 'ember-data';
import { Model } from 'ember-pouch';
import { notEmpty } from '@ember/object/computed';

export default Model.extend({

    name: DS.attr('string'),
    notes: DS.hasMany('note'),

    isValid: notEmpty('name')

});

