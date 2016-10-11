import Ember from 'ember';
import ContentFilterableMixin from 'canvas-editor/mixins/content-filterable';
import { module, test } from 'qunit';

module('Unit | Mixin | content filterable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ContentFilterableObject = Ember.Object.extend(ContentFilterableMixin);
  let subject = ContentFilterableObject.create();
  assert.ok(subject);
});
