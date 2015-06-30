import Ember from 'ember';

export default Ember.Controller.extend({
	activeTodos: Ember.computed.filterBy('model', 'isCompleted', false)
});
