import Ember from 'ember';

export default Ember.Controller.extend({
	completedTodos: Ember.computed.filterBy('model', 'isCompleted', true)
});
