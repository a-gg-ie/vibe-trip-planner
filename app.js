// Silence Tailwind CDN warnings in console
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('cdn.tailwindcss.com')) return;
  originalWarn(...args);
};

// Theme configurations
const THEMES = {
  cyberpunk: { bg: '#0f172a', cardBg: '#1e293b', text: '#38bdf8', accent: '#f43f5e' },
  cozy: { bg: '#fef3c7', cardBg: '#fffbe8', text: '#78350f', accent: '#d97706' },
  chaos: { bg: '#ec4899', cardBg: '#fef08a', text: '#000000', accent: '#a855f7' }
};

// Map URL Helper
function getMapUrl(activityName, cityName) {
  const query = encodeURIComponent(`${activityName}, ${cityName}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('VibeTrip initialized cleanly with external JS!');
});