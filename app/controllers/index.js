import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'project',
  sortProperties: ['id']
});