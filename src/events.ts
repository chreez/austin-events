/** Stub data returned when the API key is missing */
export interface Event {
  id: number
  title: string
  category: string
  url: string
  image: string
  start: string
  end: string
  price: number
  role: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Live Music Night',
    category: 'Music',
    url: 'https://ticketmaster.com/event/1',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    start: '2025-07-01T20:00:00',
    end: '2025-07-01T23:00:00',
    price: 20,
    role: 'user'
  },
  {
    id: 2,
    title: 'Food Truck Festival',
    category: 'Food',
    url: 'https://ticketmaster.com/event/2',
    image: 'https://images.unsplash.com/photo-1532635016-bdecb0d88475?auto=format&fit=crop&w=600&q=80',
    start: '2025-07-05T12:00:00',
    end: '2025-07-05T18:00:00',
    price: 10,
    role: 'guest'
  },
  {
    id: 3,
    title: 'Charity Marathon',
    category: 'Sports',
    url: 'https://ticketmaster.com/event/3',
    image: 'https://images.unsplash.com/photo-1520779186725-4a38b51c9a02?auto=format&fit=crop&w=600&q=80',
    start: '2025-07-10T08:00:00',
    end: '2025-07-10T12:00:00',
    price: 30,
    role: 'user'
  },
  {
    id: 4,
    title: 'Stand Up Showcase',
    category: 'Comedy',
    url: 'https://ticketmaster.com/event/4',
    image: 'https://images.unsplash.com/photo-1581905764498-6dfc3846cd31?auto=format&fit=crop&w=600&q=80',
    start: '2025-07-12T19:00:00',
    end: '2025-07-12T21:00:00',
    price: 25,
    role: 'guest'
  }
];

export default events;
