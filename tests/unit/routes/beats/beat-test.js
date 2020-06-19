import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | beats/beat', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:beats/beat');
    assert.ok(route);
  });
});
