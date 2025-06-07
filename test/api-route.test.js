import assert from 'assert/strict';
import handler from '../pages/api/events.js';

await (async () => {
  const req = {};
  let status;
  let data;
  const res = {
    status(code) { status = code; return this; },
    json(body) { data = body; }
  };
  await handler(req, res);
  assert.equal(status, 200);
  assert.ok(Array.isArray(data));
  assert.equal(data.length, 3);
})();
