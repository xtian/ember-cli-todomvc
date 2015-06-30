import Ember from 'ember';

export default Ember.Controller.extend({
	allCompleted: Ember.computed('model.@each.isCompleted', {
		get() {
			return this.get('model').isEvery('isCompleted');
		},

		set(_, value) {
			this.get('model').setEach('isCompleted', value);
			return value;
		}
	}),

	remaining: Ember.computed.filterBy('model', 'isCompleted', false)
});
