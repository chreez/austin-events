async function loadEvents() {
  const res = await fetch('/api/events');
  return res.json();
}

function recommend(events) {
  return events.slice(0, 1);
}

function filterEvents(events, category, role) {
  return events.filter(e => {
    return (!category || e.category === category) &&
           (!role || e.role === role);
  });
}

function render(events) {
  const list = document.getElementById('events');
  list.innerHTML = '';
  events.forEach(e => {
    const li = document.createElement('li');
    li.textContent = `${e.title} - ${e.category}`;
    list.appendChild(li);
  });
}

function renderRecommend(events) {
  const list = document.getElementById('recommend');
  list.innerHTML = '';
  events.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e.title;
    list.appendChild(li);
  });
}

async function init() {
  const events = await loadEvents();
  const categorySel = document.getElementById('category');
  const roleSel = document.getElementById('role');

  function update() {
    const filtered = filterEvents(events, categorySel.value, roleSel.value);
    render(filtered);
    renderRecommend(recommend(filtered));
  }

  categorySel.onchange = update;
  roleSel.onchange = update;
  update();
}

init();
