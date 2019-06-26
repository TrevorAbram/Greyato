import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dev-goodies', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dev-goodies');
    assert.ok(route);
  });
});
