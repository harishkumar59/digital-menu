// ===== Menu Data =====
const MENU_DATA = {
  breakfast: {
    icon: '🌅',
    label: 'Breakfast',
    items: [
      {
        id: 'idli',
        name: 'Idli',
        price: 40,
        desc: 'Soft steamed rice cakes served with sambar & coconut chutney',
        image: 'images/idli.png',
        veg: true,
        spice: 1,
        ingredients: ['Rice', 'Urad Dal', 'Fenugreek', 'Salt'],
        fullDesc: 'Our signature soft and fluffy idlis are made from a perfectly fermented batter of rice and urad dal. Served with aromatic sambar and freshly ground coconut chutney.'
      },
      {
        id: 'vada',
        name: 'Medu Vada',
        price: 50,
        desc: 'Crispy golden urad dal fritters with chutney & sambar',
        image: 'images/vada.png',
        veg: true,
        spice: 2,
        ingredients: ['Urad Dal', 'Curry Leaves', 'Black Pepper', 'Ginger', 'Green Chili'],
        fullDesc: 'Perfectly crispy on the outside and soft on the inside, our medu vadas are made from fresh urad dal batter, seasoned with curry leaves and peppercorns.'
      },
      {
        id: 'masala-dosa',
        name: 'Masala Dosa',
        price: 80,
        desc: 'Crispy golden crepe filled with spiced potato masala',
        image: 'images/masala_dosa.png',
        veg: true,
        spice: 2,
        ingredients: ['Rice Batter', 'Potato', 'Onion', 'Mustard Seeds', 'Turmeric', 'Curry Leaves'],
        fullDesc: 'A crispy, golden-brown dosa filled with our signature potato masala, tempered with mustard seeds and curry leaves. Served with sambar and three varieties of chutney.'
      },
      {
        id: 'rava-dosa',
        name: 'Rava Dosa',
        price: 70,
        desc: 'Crispy semolina crepe with a lacy, crunchy texture',
        image: 'images/rava_dosa.png',
        veg: true,
        spice: 1,
        ingredients: ['Semolina', 'Rice Flour', 'Maida', 'Cumin', 'Pepper', 'Cashews'],
        fullDesc: 'Our signature rava dosa features a beautifully lacy and crispy texture made from a blend of semolina and rice flour, studded with cumin seeds and cashew pieces.'
      },
      {
        id: 'pongal',
        name: 'Ven Pongal',
        price: 60,
        desc: 'Creamy rice & lentil porridge with ghee, cashews & pepper',
        image: 'images/pongal.png',
        veg: true,
        spice: 1,
        ingredients: ['Rice', 'Moong Dal', 'Ghee', 'Cashews', 'Black Pepper', 'Cumin', 'Ginger'],
        fullDesc: 'Comforting and soul-warming, our Ven Pongal is a creamy blend of rice and moong dal, generously tempered with ghee, crunchy cashews, and aromatic peppercorns.'
      },
      {
        id: 'upma',
        name: 'Upma',
        price: 45,
        desc: 'Savory semolina dish with mustard, curry leaves & vegetables',
        image: 'images/upma.png',
        veg: true,
        spice: 1,
        ingredients: ['Semolina', 'Mustard Seeds', 'Curry Leaves', 'Onion', 'Green Chili', 'Cashews'],
        fullDesc: 'Light and fluffy upma made from roasted semolina, tempered with mustard seeds, curry leaves, and topped with golden cashews and fresh coriander.'
      }
    ]
  },
  tiffins: {
    icon: '🥞',
    label: 'Tiffins',
    items: [
      {
        id: 'poori-bhaji',
        name: 'Poori Bhaji',
        price: 70,
        desc: 'Fluffy puffed bread served with spiced potato curry',
        image: 'images/poori_bhaji.png',
        veg: true,
        spice: 2,
        ingredients: ['Wheat Flour', 'Potato', 'Onion', 'Tomato', 'Turmeric', 'Cumin'],
        fullDesc: 'Golden, perfectly puffed pooris served with a hearty potato bhaji cooked with onions and aromatic spices. A satisfying and comforting meal.'
      },
      {
        id: 'uttapam',
        name: 'Uttapam',
        price: 65,
        desc: 'Thick rice pancake topped with onion, tomato & chilies',
        image: 'images/uttapam.png',
        veg: true,
        spice: 2,
        ingredients: ['Rice Batter', 'Onion', 'Tomato', 'Green Chili', 'Coriander'],
        fullDesc: 'A thick, spongy dosa pancake generously topped with fresh onions, tomatoes, and green chilies. Cooked to perfection on a hot griddle with a touch of oil.'
      },
      {
        id: 'set-dosa',
        name: 'Set Dosa',
        price: 60,
        desc: 'Soft and spongy dosa triplet served with chutney & sambar',
        image: 'images/set_dosa.png',
        veg: true,
        spice: 1,
        ingredients: ['Rice', 'Urad Dal', 'Poha', 'Sugar', 'Baking Soda'],
        fullDesc: 'A set of three soft, spongy and melt-in-your-mouth dosas. Made with a special batter that gives them their signature pillowy texture. Served with chutney and sambar.'
      },
      {
        id: 'pesarattu',
        name: 'Pesarattu',
        price: 65,
        desc: 'Andhra-style green gram crepe with ginger chutney',
        image: 'images/pesarattu.png',
        veg: true,
        spice: 2,
        ingredients: ['Green Gram', 'Rice', 'Ginger', 'Green Chili', 'Cumin'],
        fullDesc: 'A nutritious and delicious Andhra specialty made from green moong dal. Crispy on the edges and soft in the center, served with spicy ginger chutney.'
      }
    ]
  },
  meals: {
    icon: '🍛',
    label: 'Meals',
    items: [
      {
        id: 'south-indian-meals',
        name: 'South Indian Meals',
        price: 150,
        desc: 'Full banana leaf meal with rice, sambar, rasam & more',
        image: 'images/south_indian_meals.png',
        veg: true,
        spice: 2,
        ingredients: ['Rice', 'Sambar', 'Rasam', 'Curd', 'Papadam', 'Pickle', 'Poriyal', 'Kootu', 'Payasam'],
        fullDesc: 'The traditional South Indian banana leaf meals experience. Includes steaming hot rice, sambar, rasam, curd, papadam, pickle, two vegetables, and dessert. Unlimited rice and sambar.'
      },
      {
        id: 'mini-meals',
        name: 'Mini Meals',
        price: 110,
        desc: 'Compact thali with rice, sambar, rasam & sides',
        image: 'images/mini_meals.png',
        veg: true,
        spice: 2,
        ingredients: ['Rice', 'Sambar', 'Rasam', 'Curd', 'Papadam', 'Poriyal'],
        fullDesc: 'A compact yet satisfying version of our full meals. Includes rice, sambar, rasam, curd, papadam, and one vegetable. Perfect for a lighter appetite.'
      },
      {
        id: 'special-meals',
        name: 'Special Meals',
        price: 200,
        desc: 'Premium thali with extra items, ghee rice & payasam',
        image: 'images/south_indian_meals.png',
        veg: true,
        spice: 2,
        ingredients: ['Ghee Rice', 'Sambar', 'Rasam', 'Curd', 'Papadam', 'Pickle', 'Poriyal', 'Kootu', 'Appalam', 'Payasam', 'Sweet'],
        fullDesc: 'Our premium dining experience. Ghee rice served with special sambar, aromatic rasam, three varieties of vegetables, curd, two types of pickle, appalam, payasam, and a special sweet.'
      },
      {
        id: 'curd-rice',
        name: 'Curd Rice',
        price: 60,
        desc: 'Cooling yogurt rice with pomegranate & mustard tempering',
        image: 'images/curd_rice.png',
        veg: true,
        spice: 1,
        ingredients: ['Rice', 'Curd', 'Pomegranate', 'Mustard Seeds', 'Curry Leaves', 'Grapes'],
        fullDesc: 'Creamy and cooling curd rice made with fresh yogurt, tempered with mustard seeds and curry leaves. Garnished with pomegranate seeds and green grapes. Perfect for hot days.'
      },
      {
        id: 'lemon-rice',
        name: 'Lemon Rice',
        price: 60,
        desc: 'Tangy turmeric rice with peanuts & lemon juice',
        image: 'images/lemon_rice.png',
        veg: true,
        spice: 2,
        ingredients: ['Rice', 'Lemon', 'Turmeric', 'Peanuts', 'Mustard Seeds', 'Curry Leaves', 'Dried Red Chili'],
        fullDesc: 'Zesty and flavorful lemon rice made with freshly squeezed lemon juice, turmeric, and crunchy peanuts. Tempered with mustard seeds, dried red chilies, and curry leaves.'
      },
      {
        id: 'sambar-rice',
        name: 'Sambar Rice',
        price: 70,
        desc: 'Rice mixed with aromatic sambar & vegetables',
        image: 'images/south_indian_meals.png',
        veg: true,
        spice: 2,
        ingredients: ['Rice', 'Toor Dal', 'Mixed Vegetables', 'Sambar Powder', 'Tamarind', 'Curry Leaves'],
        fullDesc: 'Hearty and flavorful sambar rice made by mixing steaming hot rice with our signature sambar, loaded with fresh vegetables and aromatic spices.'
      }
    ]
  },
  snacks: {
    icon: '🍿',
    label: 'Snacks',
    items: [
      {
        id: 'bonda',
        name: 'Bonda',
        price: 40,
        desc: 'Crispy fried potato dumplings with spiced filling',
        image: 'images/idli.png',
        veg: true,
        spice: 2,
        ingredients: ['Potato', 'Gram Flour', 'Green Chili', 'Ginger', 'Curry Leaves'],
        fullDesc: 'Golden crispy bondas filled with a spiced potato mixture, flavored with ginger and green chilies. Deep-fried to perfection and served with coconut chutney.'
      },
      {
        id: 'bajji',
        name: 'Bajji',
        price: 45,
        desc: 'Assorted batter-fried vegetables - mirchi, onion & more',
        image: 'images/vada.png',
        veg: true,
        spice: 2,
        ingredients: ['Gram Flour', 'Rice Flour', 'Green Chili', 'Onion', 'Banana', 'Salt'],
        fullDesc: 'A delightful assortment of batter-fried vegetables including mirchi bajji, onion bajji, and banana bajji. Crispy, golden and utterly delicious with green chutney.'
      },
      {
        id: 'punugulu',
        name: 'Punugulu',
        price: 40,
        desc: 'Crispy dosa batter fritters served with chutney',
        image: 'images/vada.png',
        veg: true,
        spice: 1,
        ingredients: ['Dosa Batter', 'Onion', 'Green Chili', 'Curry Leaves', 'Cumin'],
        fullDesc: 'Fluffy and crispy fritters made from fermented dosa batter, mixed with onions and green chilies. A beloved South Indian evening snack served piping hot with chutney.'
      }
    ]
  },
  beverages: {
    icon: '☕',
    label: 'Beverages',
    items: [
      {
        id: 'filter-coffee',
        name: 'Filter Coffee',
        price: 30,
        desc: 'Traditional South Indian filter kaapi with frothy top',
        image: 'images/pongal.png',
        veg: true,
        spice: 0,
        ingredients: ['Coffee Beans', 'Chicory', 'Milk', 'Sugar'],
        fullDesc: 'Authentic South Indian filter coffee brewed in a traditional brass filter. Rich, aromatic, and topped with a beautiful frothy layer. Served in a steel tumbler and davara.'
      },
      {
        id: 'tea',
        name: 'Masala Tea',
        price: 25,
        desc: 'Spiced Indian tea with ginger, cardamom & milk',
        image: 'images/pongal.png',
        veg: true,
        spice: 0,
        ingredients: ['Tea Leaves', 'Ginger', 'Cardamom', 'Milk', 'Sugar'],
        fullDesc: 'Perfectly brewed masala chai with a blend of aromatic spices including ginger, cardamom, and cloves. Strong, sweet, and absolutely comforting.'
      },
      {
        id: 'badam-milk',
        name: 'Badam Milk',
        price: 50,
        desc: 'Rich almond milk with saffron & cardamom',
        image: 'images/pongal.png',
        veg: true,
        spice: 0,
        ingredients: ['Almonds', 'Milk', 'Saffron', 'Cardamom', 'Sugar'],
        fullDesc: 'A luxurious drink made with ground almonds, warm milk, saffron threads, and cardamom. Garnished with slivered almonds and pistachios.'
      },
      {
        id: 'lassi',
        name: 'Sweet Lassi',
        price: 45,
        desc: 'Creamy yogurt drink blended smooth with sugar',
        image: 'images/curd_rice.png',
        veg: true,
        spice: 0,
        ingredients: ['Yogurt', 'Sugar', 'Cardamom', 'Rose Water'],
        fullDesc: 'Thick and creamy sweet lassi made from fresh yogurt, blended with sugar and flavored with cardamom and a hint of rose water. Refreshing and cooling.'
      },
      {
        id: 'fresh-juice',
        name: 'Fresh Juice',
        price: 50,
        desc: 'Seasonal fresh fruit juice - ask for today\'s selection',
        image: 'images/curd_rice.png',
        veg: true,
        spice: 0,
        ingredients: ['Seasonal Fruits', 'Sugar', 'Water'],
        fullDesc: 'Freshly squeezed juice made from the best seasonal fruits. Ask your server for today\'s selection. No preservatives, no artificial colors.'
      }
    ]
  },
  desserts: {
    icon: '🍮',
    label: 'Desserts',
    items: [
      {
        id: 'payasam',
        name: 'Payasam',
        price: 50,
        desc: 'Traditional South Indian vermicelli kheer with nuts',
        image: 'images/pongal.png',
        veg: true,
        spice: 0,
        ingredients: ['Vermicelli', 'Milk', 'Sugar', 'Cashews', 'Raisins', 'Cardamom', 'Ghee'],
        fullDesc: 'A rich and creamy South Indian dessert made with roasted vermicelli, simmered in sweetened milk, and garnished with golden cashews and plump raisins.'
      },
      {
        id: 'gulab-jamun',
        name: 'Gulab Jamun',
        price: 40,
        desc: 'Soft milk dumplings soaked in rose-flavored sugar syrup',
        image: 'images/pongal.png',
        veg: true,
        spice: 0,
        ingredients: ['Khoya', 'Maida', 'Sugar', 'Rose Water', 'Cardamom', 'Saffron'],
        fullDesc: 'Melt-in-your-mouth gulab jamuns made from fresh khoya, deep-fried to a golden brown, and soaked in a fragrant rose and cardamom-scented sugar syrup. Served warm.'
      },
      {
        id: 'kesari',
        name: 'Kesari',
        price: 45,
        desc: 'Saffron-infused semolina sweet with ghee & cashews',
        image: 'images/lemon_rice.png',
        veg: true,
        spice: 0,
        ingredients: ['Semolina', 'Ghee', 'Sugar', 'Saffron', 'Cashews', 'Raisins', 'Cardamom'],
        fullDesc: 'A vibrant saffron-hued sweet made from roasted semolina, generously drizzled with pure ghee, and studded with crunchy cashews and sweet raisins.'
      }
    ]
  }
};

// Today's Specials
const SPECIALS = [
  {
    id: 'ghee-roast-dosa',
    name: 'Ghee Roast Dosa',
    price: 90,
    originalPrice: 120,
    desc: 'Extra crispy dosa roasted in pure ghee with potato masala',
    image: 'images/masala_dosa.png',
    veg: true,
    spice: 2,
    ingredients: ['Rice Batter', 'Ghee', 'Potato', 'Onion', 'Mustard Seeds', 'Turmeric'],
    fullDesc: 'Our chef\'s special ghee roast dosa - extra crispy and golden, roasted in generous amounts of pure ghee. Filled with our signature potato masala. A truly indulgent experience.'
  },
  {
    id: 'mini-tiffin-combo',
    name: 'Mini Tiffin Combo',
    price: 120,
    originalPrice: 170,
    desc: 'One idli, one vada, mini dosa & filter coffee combo',
    image: 'images/idli.png',
    veg: true,
    spice: 1,
    ingredients: ['Idli', 'Vada', 'Mini Dosa', 'Filter Coffee', 'Sambar', 'Chutney'],
    fullDesc: 'The perfect tiffin combo! Includes one soft idli, one crispy medu vada, a mini masala dosa, and a cup of hot filter coffee. All served with sambar and chutneys.'
  },
  {
    id: 'weekend-thali',
    name: 'Weekend Special Thali',
    price: 180,
    originalPrice: 250,
    desc: 'Premium thali with ghee rice, 3 curries, dessert & drink',
    image: 'images/south_indian_meals.png',
    veg: true,
    spice: 2,
    ingredients: ['Ghee Rice', 'Sambar', 'Rasam', '3 Vegetables', 'Curd', 'Payasam', 'Filter Coffee'],
    fullDesc: 'Our weekend special premium thali with fragrant ghee rice, three seasonal vegetable curries, sambar, rasam, curd, papadam, pickle, payasam, and a complimentary filter coffee.'
  }
];

// ===== App State =====
const state = {
  tableNumber: null,
  cart: [],
  activeCategory: 'all',
  reviewRating: 0
};

// ===== DOM Helpers =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== Initialize App =====
function initApp() {
  const savedTable = sessionStorage.getItem('tableNumber');
  if (savedTable) {
    state.tableNumber = savedTable;
    hideTableModal();
    updateTableBadge();
  }

  const savedCart = sessionStorage.getItem('cart');
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
    updateCartBadge();
  }

  renderSpecials();
  renderMenu();
  setupEventListeners();
  setupScrollAnimations();
}

// ===== Table Number Modal =====
function handleTableSubmit() {
  const input = $('#table-number-input');
  const val = input.value.trim();
  if (!val) {
    input.style.borderColor = '#C62828';
    input.placeholder = 'Please enter a number';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
    return;
  }
  state.tableNumber = val;
  sessionStorage.setItem('tableNumber', val);
  hideTableModal();
  updateTableBadge();
  showToast('🪑 Table ' + val + ' — Browse our menu & place your order!');
}

function hideTableModal() {
  const modal = $('#table-modal');
  if (modal) {
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 400);
  }
}

function updateTableBadge() {
  const badge = $('#header-table-badge');
  if (badge && state.tableNumber) {
    badge.textContent = '🪑 Table ' + state.tableNumber;
  }
}

// ===== Render Specials =====
function renderSpecials() {
  const container = $('#specials-scroll');
  if (!container) return;

  container.innerHTML = SPECIALS.map(item => `
    <div class="special-card" onclick="openDishDetail('${item.id}', true)">
      <div class="special-badge">⭐ TODAY'S SPECIAL</div>
      <h3>${item.name}</h3>
      <p class="special-desc">${item.desc}</p>
      <div class="special-price-row">
        <span class="special-price">
          ₹${item.price}
          <span class="original-price">₹${item.originalPrice}</span>
        </span>
        <button class="special-add-btn" onclick="event.stopPropagation(); addToCart('${item.id}', true)" aria-label="Add ${item.name} to cart">+</button>
      </div>
    </div>
  `).join('');
}

// ===== Render Menu =====
function renderMenu(filterCategory = 'all') {
  const container = $('#menu-items-container');
  if (!container) return;

  let html = '';
  const categories = filterCategory === 'all' ? Object.keys(MENU_DATA) : [filterCategory];

  categories.forEach(catKey => {
    const cat = MENU_DATA[catKey];
    if (!cat) return;

    html += `
      <div class="menu-category-title" id="cat-${catKey}">
        <span class="cat-icon">${cat.icon}</span>
        ${cat.label}
        <span class="menu-category-count">${cat.items.length} items</span>
      </div>
    `;

    cat.items.forEach(item => {
      const cartItem = state.cart.find(c => c.id === item.id);
      const qty = cartItem ? cartItem.qty : 0;

      html += `
        <div class="menu-item-card animate-in" onclick="openDishDetail('${item.id}')">
          <div class="menu-item-image-wrap">
            <img class="menu-item-image" src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="veg-badge ${item.veg ? '' : 'non-veg'}"></div>
          </div>
          <div class="menu-item-info">
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-item-desc">${item.desc}</div>
            <div class="menu-item-spice">
              ${renderSpiceDots(item.spice)}
            </div>
            <div class="menu-item-bottom">
              <span class="menu-item-price">₹${item.price}</span>
              ${qty > 0 ? `
                <div class="qty-control" onclick="event.stopPropagation()">
                  <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
                  <span class="qty-value">${qty}</span>
                  <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                </div>
              ` : `
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${item.id}')">
                  <span class="btn-icon">+</span> ADD
                </button>
              `}
            </div>
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

function renderSpiceDots(level) {
  if (level === 0) return '<span class="spice-dot">🍃</span>';
  let dots = '';
  for (let i = 0; i < 3; i++) {
    dots += i < level ? '<span class="spice-dot">🌶️</span>' : '<span class="spice-dot" style="opacity:0.25">🌶️</span>';
  }
  return dots;
}

// ===== Category Tabs =====
function switchCategory(catKey) {
  state.activeCategory = catKey;
  $$('.category-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.category-tab[data-cat="${catKey}"]`);
  if (activeTab) activeTab.classList.add('active');
  renderMenu(catKey);

  if (catKey !== 'all') {
    const el = document.getElementById('cat-' + catKey);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}

// ===== Find Item =====
function findItem(itemId, isSpecial = false) {
  if (isSpecial) {
    return SPECIALS.find(s => s.id === itemId);
  }
  for (const cat of Object.values(MENU_DATA)) {
    const item = cat.items.find(i => i.id === itemId);
    if (item) return item;
  }
  return null;
}

// ===== Cart Functions =====
function addToCart(itemId, isSpecial = false) {
  const item = findItem(itemId, isSpecial);
  if (!item) return;

  const existing = state.cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderMenu(state.activeCategory);
  showToast('✅ ' + item.name + ' added to order');
}

function updateCartQty(itemId, delta) {
  const existing = state.cart.find(c => c.id === itemId);
  if (!existing) return;

  existing.qty += delta;
  if (existing.qty <= 0) {
    state.cart = state.cart.filter(c => c.id !== itemId);
  }

  saveCart();
  updateCartBadge();
  renderMenu(state.activeCategory);
  renderCartItems();
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter(c => c.id !== itemId);
  saveCart();
  updateCartBadge();
  renderMenu(state.activeCategory);
  renderCartItems();
}

function saveCart() {
  sessionStorage.setItem('cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const badge = $('#cart-badge');
  const totalItems = state.cart.reduce((sum, c) => sum + c.qty, 0);
  if (badge) {
    badge.textContent = totalItems;
    badge.classList.toggle('hidden', totalItems === 0);
  }
}

function getCartTotal() {
  return state.cart.reduce((sum, c) => sum + (c.price * c.qty), 0);
}

// ===== Cart Drawer =====
function openCart() {
  renderCartItems();
  $('#cart-overlay').classList.add('active');
  $('#cart-drawer').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cart-overlay').classList.remove('active');
  $('#cart-drawer').classList.remove('active');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const list = $('#cart-items-list');
  const footer = $('#cart-footer');
  if (!list) return;

  // Table info
  const tableInfo = $('#cart-table-info');
  if (tableInfo && state.tableNumber) {
    tableInfo.innerHTML = `
      <span class="table-icon">🪑</span>
      Order for <strong>Table ${state.tableNumber}</strong>
    `;
  }

  if (state.cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some delicious items from our menu!</p>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  list.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-image" src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price * item.qty}</div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-item-qty-btn ${item.qty === 1 ? 'remove' : ''}" onclick="${item.qty === 1 ? `removeFromCart('${item.id}')` : `updateCartQty('${item.id}', -1)`}">
          ${item.qty === 1 ? '🗑' : '−'}
        </button>
        <span class="cart-item-qty">${item.qty}</span>
        <button class="cart-item-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');

  // Update summary
  const subtotal = getCartTotal();
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const summaryHtml = `
    <div class="cart-summary-row">
      <span>Subtotal</span>
      <span>₹${subtotal}</span>
    </div>
    <div class="cart-summary-row">
      <span>GST (5%)</span>
      <span>₹${gst}</span>
    </div>
    <div class="cart-summary-row total">
      <span>Total</span>
      <span class="total-amount">₹${total}</span>
    </div>
    <button class="place-order-btn" onclick="placeOrder()">
      🍽️ Place Order • ₹${total}
    </button>
  `;

  if (footer) footer.innerHTML = summaryHtml;
}

// ===== Place Order =====
function placeOrder() {
  if (state.cart.length === 0) return;

  const subtotal = getCartTotal();
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;
  const orderNum = 'ORD' + Date.now().toString().slice(-6);
  const itemCount = state.cart.reduce((sum, c) => sum + c.qty, 0);

  closeCart();

  // Show confirmation
  const overlay = $('#order-confirm-overlay');
  overlay.querySelector('.order-id').textContent = orderNum;
  overlay.querySelector('.order-table').textContent = 'Table ' + (state.tableNumber || '-');
  overlay.querySelector('.order-items-count').textContent = itemCount + ' item' + (itemCount > 1 ? 's' : '');
  overlay.querySelector('.order-total').textContent = '₹' + total;
  overlay.classList.add('active');

  // Clear cart
  state.cart = [];
  saveCart();
  updateCartBadge();
  renderMenu(state.activeCategory);
}

function closeOrderConfirm() {
  $('#order-confirm-overlay').classList.remove('active');
}

// ===== Dish Detail =====
function openDishDetail(itemId, isSpecial = false) {
  const item = findItem(itemId, isSpecial);
  if (!item) return;

  const overlay = $('#dish-detail-overlay');

  overlay.querySelector('.dish-detail-image').src = item.image;
  overlay.querySelector('.dish-detail-image').alt = item.name;
  overlay.querySelector('.dish-detail-name').textContent = item.name;
  overlay.querySelector('.dish-detail-desc').textContent = item.fullDesc || item.desc;
  overlay.querySelector('.dish-detail-price').textContent = '₹' + item.price;

  // Veg badge
  const vegBadge = overlay.querySelector('.dish-detail-veg-badge');
  const vegDot = vegBadge.querySelector('.veg-dot');
  vegDot.className = 'veg-dot ' + (item.veg ? 'veg' : 'non-veg');
  vegBadge.querySelector('.veg-text').textContent = item.veg ? 'Pure Veg' : 'Non-Veg';

  // Spice levels
  const spiceLevels = overlay.querySelectorAll('.spice-level');
  const spiceLabel = overlay.querySelector('.spice-label-text');
  const spiceLabels = ['No Spice', 'Mild', 'Medium', 'Hot'];
  spiceLabel.textContent = spiceLabels[item.spice] || 'Mild';
  spiceLevels.forEach((sl, i) => {
    sl.className = 'spice-level';
    if (i < item.spice) {
      const cls = item.spice === 1 ? 'mild' : item.spice === 2 ? 'medium' : 'hot';
      sl.classList.add('active', cls);
    }
  });

  // Ingredients
  const ingredientsList = overlay.querySelector('.ingredients-list');
  ingredientsList.innerHTML = item.ingredients.map(ing => 
    `<span class="ingredient-tag">${ing}</span>`
  ).join('');

  // Add to order button
  const addBtn = overlay.querySelector('.dish-add-order-btn');
  addBtn.onclick = () => {
    addToCart(item.id, isSpecial);
    closeDishDetail();
  };

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDishDetail() {
  $('#dish-detail-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Scroll to section =====
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===== Review =====
function setReviewRating(rating) {
  state.reviewRating = rating;
  $$('.review-star').forEach((star, i) => {
    star.classList.toggle('active', i < rating);
  });
}

function submitReview() {
  const textarea = $('#review-textarea');
  const text = textarea ? textarea.value.trim() : '';
  if (state.reviewRating === 0 && !text) {
    showToast('⚠️ Please add a rating or comment');
    return;
  }
  showToast('🙏 Thank you for your feedback!');
  if (textarea) textarea.value = '';
  state.reviewRating = 0;
  $$('.review-star').forEach(s => s.classList.remove('active'));
}

// ===== Toast =====
function showToast(message) {
  let toast = $('#app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Scroll Animations =====
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (entry.target.dataset.delay || 0) + 'ms';
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.animate-in').forEach((el, i) => {
    el.dataset.delay = i * 80;
    observer.observe(el);
  });
}

// ===== Header Scroll Effect =====
function setupScrollEffect() {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const header = $('.app-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });
}

// ===== Call Waiter =====
function callWaiter() {
  showToast('🔔 Waiter has been notified! Please wait...');
}

// ===== Event Listeners =====
function setupEventListeners() {
  // Table modal submit
  const tableBtn = $('#table-submit-btn');
  if (tableBtn) {
    tableBtn.addEventListener('click', handleTableSubmit);
  }

  // Table input enter key
  const tableInput = $('#table-number-input');
  if (tableInput) {
    tableInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleTableSubmit();
    });
  }

  // Cart overlay close
  const cartOverlay = $('#cart-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
  }

  // Dish detail overlay close
  const dishOverlay = $('#dish-detail-overlay');
  if (dishOverlay) {
    dishOverlay.addEventListener('click', (e) => {
      if (e.target === dishOverlay) closeDishDetail();
    });
  }

  // Category tabs
  $$('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => switchCategory(tab.dataset.cat));
  });

  // Review stars
  $$('.review-star').forEach((star, i) => {
    star.addEventListener('click', () => setReviewRating(i + 1));
  });

  // Scroll effect
  setupScrollEffect();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', initApp);
