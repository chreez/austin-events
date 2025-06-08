# API Documentation

## GET /api/events
Returns a JSON array of events. Each event object includes:
- `id`: unique identifier
- `title`: event name
- `category`: event category
- `url`: ticket purchase link
- `image`: optional image URL
- `start`: ISO start date
- `end`: ISO end date
- `averageCost`: average price if available
- `tags`: list of category tags

## GET /api/events/[id]
Fetch details for a single event by `id`.
