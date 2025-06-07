import assert from 'assert/strict';
import { fetchEvents, recommendEvents } from '../src/api.js';

await (async () => {
  const events = await fetchEvents();
  assert.equal(events.length, 3);
  assert.ok(events[0].tags.includes('music'));

  const rec = recommendEvents(events, 'music');
  assert.ok(rec.length >= 1);
})();
