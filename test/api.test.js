import assert from 'assert/strict';
import { fetchEvents, recommendEvents } from '../src/api.ts';

await (async () => {
  const events = await fetchEvents();
  assert.equal(events.length, 3);
  assert.ok(events[0].tags.includes('music'));
  assert.ok('averageCost' in events[0]);

  const rec = recommendEvents(events, 'music');
  assert.ok(rec.length >= 1);
})();
