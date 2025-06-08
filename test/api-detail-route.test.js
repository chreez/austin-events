import assert from 'assert/strict';
import handler from '../pages/api/events/[id].js';

await (async () => {
  const req = { query: { id: '1' } };
  let status;
  let data;
  const res = {
    status(code) { status = code; return this; },
    json(body) { data = body; }
  };
  await handler(req, res);
  assert.equal(status, 200);
  assert.ok(data.id);
})();
