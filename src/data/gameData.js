// CDN Configuration
export const CDN_BASE = 'https://d2hvotsd0cvug1.cloudfront.net/games';

// Helper to generate display name from slug
const slugToName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/^Va /, '')
    .replace(/^Rv /, '')
    .replace(/^Cpc /, '');
};

// Game categories
export const CATEGORIES = {
  SLOTS: 'slots',
  CRASH: 'crash',
  INSTANT_WIN: 'instant-win',
  CARD_GAME: 'card-game',
  FISHING: 'fishing',
  LIVE_CASINO: 'live-casino',
};

// All games data - gameId is the slug used for API requests
export const games = [
  // Slot Games
  { id: 1, gameId: 'all-you-can-eat', slug: 'all-you-can-eat', name: 'All You Can Eat', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 2, gameId: 'autumn-moon', slug: 'autumn-moon', name: 'Autumn Moon', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 3, gameId: 'autumn-moon-plus', slug: 'autumn-moon-plus', name: 'Autumn Moon Plus', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 4, gameId: 'aztec-wish', slug: 'aztec-wish', name: 'Aztec Wish', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 5, gameId: 'beauty-contest', slug: 'beauty-contest', name: 'Beauty Contest', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 6, gameId: 'bomber-rush', slug: 'bomber-rush', name: 'Bomber Rush', category: CATEGORIES.INSTANT_WIN, provider: 'Win998', isHot: true, isNew: true },
  { id: 7, gameId: 'boxing-vs-muay-thai', slug: 'boxing-vs-muay-thai', name: 'Boxing vs Muay Thai', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 8, gameId: 'burn-the-office', slug: 'burn-the-office', name: 'Burn The Office', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 9, gameId: 'candy-party', slug: 'candy-party', name: 'Candy Party', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },

  // Crash Games
  { id: 10, gameId: 'cpc-crash-capybara', slug: 'cpc-crash-capybara', name: 'Crash Capybara', category: CATEGORIES.CRASH, provider: 'CPC', isHot: true, isNew: true },
  { id: 11, gameId: 'cpc-crash-cross-chicken', slug: 'cpc-crash-cross-chicken', name: 'Cross Chicken', category: CATEGORIES.CRASH, provider: 'CPC', isHot: true, isNew: false },
  { id: 12, gameId: 'cpc-crash-jetpack', slug: 'cpc-crash-jetpack', name: 'Crash Jetpack', category: CATEGORIES.CRASH, provider: 'CPC', isHot: true, isNew: false },
  { id: 13, gameId: 'cpc-cross-astronaut', slug: 'cpc-cross-astronaut', name: 'Cross Astronaut', category: CATEGORIES.CRASH, provider: 'CPC', isHot: false, isNew: true },

  // Crash Games (continued)
  { id: 14, gameId: 'cpc-mines-pirate', slug: 'cpc-mines-pirate', name: 'Mines Pirate', category: CATEGORIES.CRASH, provider: 'CPC', isHot: true, isNew: false },

  // More Slots
  { id: 15, gameId: 'dragon-jewels', slug: 'dragon-jewels', name: 'Dragon Jewels', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 16, gameId: 'durian-king', slug: 'durian-king', name: 'Durian King', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 17, gameId: 'feed-the-zombie', slug: 'feed-the-zombie', name: 'Feed The Zombie', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 18, gameId: 'gems-rush', slug: 'gems-rush', name: 'Gems Rush', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 19, gameId: 'gods-of-olympus', slug: 'gods-of-olympus', name: 'Gods of Olympus', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 20, gameId: 'golden-century', slug: 'golden-century', name: 'Golden Century', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 21, gameId: 'golden-century-plus', slug: 'golden-century-plus', name: 'Golden Century Plus', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 22, gameId: 'golden-temple', slug: 'golden-temple', name: 'Golden Temple', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 23, gameId: 'happy-prosperous', slug: 'happy-prosperous', name: 'Happy Prosperous', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 24, gameId: 'happy-prosperous-plus', slug: 'happy-prosperous-plus', name: 'Happy Prosperous Plus', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 25, gameId: 'happy-road', slug: 'happy-road', name: 'Happy Road', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 26, gameId: 'labubu-fever', slug: 'labubu-fever', name: 'Labubu Fever', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: true },

  // Legend Slots
  { id: 27, gameId: 'legend-slot-layla', slug: 'legend-slot-layla', name: 'Legend Slot Layla', category: CATEGORIES.SLOTS, provider: 'Legend', isHot: true, isNew: false },
  { id: 28, gameId: 'legend-slot-musashi-cp', slug: 'legend-slot-musashi-cp', name: 'Legend Slot Musashi', category: CATEGORIES.SLOTS, provider: 'Legend', isHot: false, isNew: false },
  { id: 29, gameId: 'legend-slot-nezha', slug: 'legend-slot-nezha', name: 'Legend Slot Nezha', category: CATEGORIES.SLOTS, provider: 'Legend', isHot: true, isNew: false },
  { id: 30, gameId: 'legend-slot-onimaru-cp', slug: 'legend-slot-onimaru-cp', name: 'Legend Slot Onimaru', category: CATEGORIES.SLOTS, provider: 'Legend', isHot: false, isNew: true },
  { id: 31, gameId: 'legend-slot-wukong-cp', slug: 'legend-slot-wukong-cp', name: 'Legend Slot Wukong', category: CATEGORIES.SLOTS, provider: 'Legend', isHot: true, isNew: false },

  // More Slots
  { id: 32, gameId: 'life', slug: 'life', name: 'Life', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 33, gameId: 'lucky-7', slug: 'lucky-7', name: 'Lucky 7', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 34, gameId: 'lullababy', slug: 'lullababy', name: 'Lullababy', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 35, gameId: 'madness-buffalo', slug: 'madness-buffalo', name: 'Madness Buffalo', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 36, gameId: 'magic-box', slug: 'magic-box', name: 'Magic Box', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 37, gameId: 'meow-meow', slug: 'meow-meow', name: 'Meow Meow', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: true },
  { id: 38, gameId: 'money-fortune', slug: 'money-fortune', name: 'Money Fortune', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 39, gameId: 'mr-fortune', slug: 'mr-fortune', name: 'Mr Fortune', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 40, gameId: 'oh-crap', slug: 'oh-crap', name: 'Oh Crap', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 41, gameId: 'panda-magic', slug: 'panda-magic', name: 'Panda Magic', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 42, gameId: 'panda-magic-plus', slug: 'panda-magic-plus', name: 'Panda Magic Plus', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 43, gameId: 'peace-and-long-life', slug: 'peace-and-long-life', name: 'Peace and Long Life', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 44, gameId: 'peace-and-long-life-plus', slug: 'peace-and-long-life-plus', name: 'Peace and Long Life Plus', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 45, gameId: 'pon-pon', slug: 'pon-pon', name: 'Pon Pon', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },

  // RV Games
  { id: 46, gameId: 'rv-howl-o-ween', slug: 'rv-howl-o-ween', name: 'Howl-O-Ween', category: CATEGORIES.SLOTS, provider: 'RV', isHot: true, isNew: false },
  { id: 47, gameId: 'rv-mythic-wolf-extreme', slug: 'rv-mythic-wolf-extreme', name: 'Mythic Wolf Extreme', category: CATEGORIES.SLOTS, provider: 'RV', isHot: true, isNew: true },
  { id: 48, gameId: 'rv-scrooges-bah-humbucks', slug: 'rv-scrooges-bah-humbucks', name: 'Scrooges Bah Humbucks', category: CATEGORIES.SLOTS, provider: 'RV', isHot: false, isNew: false },
  { id: 49, gameId: 'rv-slotty-claus', slug: 'rv-slotty-claus', name: 'Slotty Claus', category: CATEGORIES.SLOTS, provider: 'RV', isHot: false, isNew: false },
  { id: 50, gameId: 'rv-sultans-wishes', slug: 'rv-sultans-wishes', name: 'Sultans Wishes', category: CATEGORIES.SLOTS, provider: 'RV', isHot: true, isNew: false },

  // More Slots
  { id: 51, gameId: 'samurai-wars', slug: 'samurai-wars', name: 'Samurai Wars', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 52, gameId: 'sos', slug: 'sos', name: 'SOS', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 53, gameId: 'spell-craft', slug: 'spell-craft', name: 'Spell Craft', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 54, gameId: 'steampunk-100', slug: 'steampunk-100', name: 'Steampunk 100', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 55, gameId: 'strange-encounter', slug: 'strange-encounter', name: 'Strange Encounter', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 56, gameId: 'talent-night', slug: 'talent-night', name: 'Talent Night', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 57, gameId: 'tanzania-king', slug: 'tanzania-king', name: 'Tanzania King', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 58, gameId: 'thai-lucky', slug: 'thai-lucky', name: 'Thai Lucky', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 59, gameId: 'thai-street-food', slug: 'thai-street-food', name: 'Thai Street Food', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
  { id: 60, gameId: 'trade-wars', slug: 'trade-wars', name: 'Trade Wars', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 61, gameId: 'tree-of-wealth', slug: 'tree-of-wealth', name: 'Tree of Wealth', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: true, isNew: false },
  { id: 62, gameId: 'trigod-fortune', slug: 'trigod-fortune', name: 'Trigod Fortune', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: false },
  { id: 63, gameId: 'tv-worlds', slug: 'tv-worlds', name: 'TV Worlds', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },

  // VA Games
  { id: 64, gameId: 'va-dragon-treasure-4', slug: 'va-dragon-treasure-4', name: 'Dragon Treasure 4', category: CATEGORIES.SLOTS, provider: 'VA', isHot: true, isNew: false },
  { id: 65, gameId: 'va-emperor-qin-shi-huang-plus', slug: 'va-emperor-qin-shi-huang-plus', name: 'Emperor Qin Shi Huang Plus', category: CATEGORIES.SLOTS, provider: 'VA', isHot: false, isNew: true },
  { id: 66, gameId: 'va-golden-empire', slug: 'va-golden-empire', name: 'Golden Empire', category: CATEGORIES.SLOTS, provider: 'VA', isHot: true, isNew: false },
  { id: 67, gameId: 'va-golden-empire2', slug: 'va-golden-empire2', name: 'Golden Empire 2', category: CATEGORIES.SLOTS, provider: 'VA', isHot: true, isNew: true },
  { id: 68, gameId: 'va-hot-ace', slug: 'va-hot-ace', name: 'Hot Ace', category: CATEGORIES.CARD_GAME, provider: 'VA', isHot: true, isNew: false },
  { id: 69, gameId: 'va-inca-zuma', slug: 'va-inca-zuma', name: 'Inca Zuma', category: CATEGORIES.SLOTS, provider: 'VA', isHot: false, isNew: false },
  { id: 70, gameId: 'va-mahjong-self-drawn-win-3', slug: 'va-mahjong-self-drawn-win-3', name: 'Mahjong Self Drawn Win 3', category: CATEGORIES.CARD_GAME, provider: 'VA', isHot: true, isNew: false },
  { id: 71, gameId: 'va-mahjong-self-drawn-win-4', slug: 'va-mahjong-self-drawn-win-4', name: 'Mahjong Self Drawn Win 4', category: CATEGORIES.CARD_GAME, provider: 'VA', isHot: false, isNew: true },
  { id: 72, gameId: 'va-maneki-neko', slug: 'va-maneki-neko', name: 'Maneki Neko', category: CATEGORIES.SLOTS, provider: 'VA', isHot: true, isNew: false },
  { id: 73, gameId: 'va-pinata', slug: 'va-pinata', name: 'Pinata', category: CATEGORIES.SLOTS, provider: 'VA', isHot: false, isNew: false },
  { id: 74, gameId: 'va-roman-gladiator', slug: 'va-roman-gladiator', name: 'Roman Gladiator', category: CATEGORIES.SLOTS, provider: 'VA', isHot: true, isNew: false },
  { id: 75, gameId: 'va-wild-fortune-2', slug: 'va-wild-fortune-2', name: 'Wild Fortune 2', category: CATEGORIES.SLOTS, provider: 'VA', isHot: false, isNew: true },
  { id: 76, gameId: 'where-is-my-monkey', slug: 'where-is-my-monkey', name: 'Where Is My Monkey', category: CATEGORIES.SLOTS, provider: 'Win998', isHot: false, isNew: true },
];

// Export games by category
export const getGamesByCategory = (category) => {
  return games.filter(game => game.category === category);
};

// Get hot games
export const getHotGames = () => {
  return games.filter(game => game.isHot);
};

// Get new games
export const getNewGames = () => {
  return games.filter(game => game.isNew);
};

// Get game by ID
export const getGameById = (id) => {
  return games.find(game => game.id === id);
};

// Get game by slug
export const getGameBySlug = (slug) => {
  return games.find(game => game.slug === slug);
};

// Get game by gameId (same as slug - used for API requests)
export const getGameByGameId = (gameId) => {
  return games.find(game => game.gameId === gameId);
};

// Search games
export const searchGames = (query) => {
  const lowerQuery = query.toLowerCase();
  return games.filter(game =>
    game.name.toLowerCase().includes(lowerQuery) ||
    game.slug.toLowerCase().includes(lowerQuery) ||
    game.provider.toLowerCase().includes(lowerQuery)
  );
};

export default games;
