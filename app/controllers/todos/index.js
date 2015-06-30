import Ember from 'ember';

export default Ember.Controller.extend({
	savedTodos: Ember.computed.filterBy('model', 'isNew', false)
});
