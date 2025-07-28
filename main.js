/**
 * Global variables
 */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/**
 * Featured products data
 */
const featuredProducts = [
  {
    id: 1,
    name: "1000 Robux",
    price: 10,
    originalPrice: 11.99,
    image: "../images/10$.png",
    rating: 4.8,
    reviews: 1250,
    category: "Popular",
    discount: 17,
  },
  {
    id: 2,
    name: "2000 Robux",
    price: 20,
    originalPrice: 23.99,
    image: "../images/20$.png",
    rating: 4.9,
    reviews: 890,
    category: "Best Value",
    discount: 17,
  },
  {
    id: 3,
    name: "5250 Robux",
    price: 50,
    originalPrice: 59.99,
    image: "../images/50$.png",
    rating: 4.7,
    reviews: 650,
    category: "Premium",
    discount: 17,
  },
  {
    id: 4,
    name: "2500 Robux",
    price: 25,
    originalPrice: 29.99,
    image: "../images/25$.png",
    rating: 4.7,
    reviews: 1100,
    category: "Standard",
    discount: 17,
  },
  {
    id: 5,
    name: "3000 Robux",
    price: 30,
    originalPrice: 35.99,
    image: "../images/img-2 new.png",
    rating: 4.8,
    reviews: 950,
    category: "Mid-Tier",
    discount: 17,
  },
  {
    id: 6,
    name: "4000 Robux",
    price: 40,
    originalPrice: 41.99,
    image: "../images/40$.png",
    rating: 4.8,
    reviews: 700,
    category: "High Value",
    discount: 17,
  },
];

/**
 * All products data
 */
const allProducts = [
  {
    id: 1,
    name: "1500 Robux",
    price: 15,
    originalPrice: 5.99,
    image: "../images/15$.png",
    rating: 4.6,
    reviews: 890,
    category: "Starter Pack",
    discount: 17,
  },
  ...featuredProducts,
  {
    id: 7,
    name: "8000 Robux",
    price: 75,
    originalPrice: 79.99,
    image: "../images/75$.png",
    rating: 4.9,
    reviews: 550,
    category: "Elite",
    discount: 17,
  },
  {
    id: 8,
    name: "11000 Robux",
    price: 100,
    originalPrice: 105.99,
    image: "../images/100$.png",
    rating: 4.8,
    reviews: 480,
    category: "Pro Pack",
    discount: 17,
  },
  {
    id: 9,
    name: "14000 Robux",
    price: 125,
    originalPrice: 129.99,
    image: "../images/125$.png",
    rating: 4.8,
    reviews: 420,
    category: "Ultimate",
    discount: 17,
  },
  {
    id: 10,
    name: "17000 Robux",
    price: 150,
    originalPrice: 153.99,
    image: "../images/150$.png",
    rating: 4.7,
    reviews: 390,
    category: "Mega Pack",
    discount: 17,
  },
  {
    id: 11,
    name: "24000 Robux",
    price: 200,
    originalPrice: 210.99,
    image: "../images/200$.png",
    rating: 4.9,
    reviews: 350,
    category: "Super Pack",
    discount: 17,
  },
  {
    id: 12,
    name: "36000 Robux",
    price: 300,
    originalPrice: 315.99,
    image: "../images/300$.png",
    rating: 4.8,
    reviews: 320,
    category: "Ultra Pack",
    discount: 17,
  },
  {
    id: 13,
    name: "48000 Robux",
    price: 400,
    originalPrice: 439.99,
    image: "../images/400$.png",
    rating: 4.9,
    reviews: 300,
    category: "Epic Pack",
    discount: 17,
  },
  {
    id: 14,
    name: "60000 Robux",
    price: 500,
    originalPrice: 569.99,
    image: "../images/500$.png",
    rating: 4.9,
    reviews: 280,
    category: "Legendary",
    discount: 17,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Earning Robux in 2025",
    excerpt:
      "Discover the best legitimate ways to earn Robux and maximize your gaming experience in Roblox.",
    image: "../images/guide.jpeg",
    author: "Gaming Expert",
    date: "2025-01-15",
    category: "Guides",
    readTime: "5 min read",
    content: `
            <p>Roblox has become one of the most popular gaming platforms in the world, and Robux is the virtual currency that powers the entire ecosystem. Whether you're looking to customize your avatar, purchase premium items, or unlock special features in games, having Robux is essential for the full Roblox experience.</p>

            <h3>What is Robux?</h3>
            <p>Robux is the official virtual currency of Roblox. It allows players to purchase a wide variety of items including clothing, accessories, game passes, and developer products. Think of it as the fuel that powers your Roblox adventures.</p>

            <h3>Legitimate Ways to Earn Robux</h3>
            <p>There are several legitimate methods to earn Robux:</p>
            <ul>
                <li><strong>Roblox Premium Membership:</strong> Get a monthly Robux allowance</li>
                <li><strong>Create and Sell Items:</strong> Design clothing, accessories, or game assets</li>
                <li><strong>Develop Games:</strong> Create popular games and earn from game passes</li>
                <li><strong>Purchase Robux:</strong> The most direct method through official channels</li>
            </ul>

            <h3>Safety First</h3>
            <p>Always be cautious of scams and unofficial Robux generators. The only safe way to get Robux is through official Roblox channels or trusted retailers like RobuxVoucher.com.</p>

            <h3>Maximizing Your Robux</h3>
            <p>Once you have Robux, spend them wisely. Consider investing in items that will enhance your gaming experience or help you create content that could earn you more Robux in the future.</p>
        `,
  },
  {
    id: 2,
    title: "Top 10 Roblox Games to Play This Month",
    excerpt:
      "Check out the most popular and exciting Roblox games that are trending right now.",
    image: "../images/top-10.jpeg",
    author: "Game Reviewer",
    date: "2025-01-12",
    category: "Reviews",
    readTime: "7 min read",
    content: `
            <p>Roblox continues to evolve with new and exciting games being released regularly. Here are the top 10 games you should definitely check out this month.</p>
            
            <h3>1. Adopt Me!</h3>
            <p>The most popular game on Roblox where you can adopt pets, decorate your home, and explore with friends.</p>
            
            <h3>2. Brookhaven RP</h3>
            <p>A role-playing game where you can live your dream life in a virtual town.</p>
            
            <p>And many more exciting games await you in the full article...</p>
        `,
  },
  {
    id: 3,
    title: "How to Stay Safe While Gaming Online",
    excerpt:
      "Essential tips for protecting yourself and your account while enjoying online gaming.",
    image: "../images/saftey.jpeg",
    author: "Security Specialist",
    date: "2025-01-10",
    category: "Safety",
    readTime: "4 min read",
    content: `
            <p>Online gaming safety is crucial in today's digital world. Here are essential tips to keep you safe while gaming.</p>
            
            <h3>Protect Your Personal Information</h3>
            <p>Never share personal details like your real name, address, or phone number with other players.</p>
            
            <h3>Use Strong Passwords</h3>
            <p>Create unique, strong passwords for your gaming accounts and enable two-factor authentication when available.</p>
        `,
  },
  {
    id: 4,
    title: "How to Create Your First Roblox Game in 2025",
    excerpt:
      "A beginner’s step-by-step guide to designing and publishing your own game on Roblox Studio.",
    image: "../images/How-to-Make-a-Roblox-Game-Featured-Image.jpg",
    author: "Roblox Developer",
    date: "2025-02-01",
    category: "Guides",
    readTime: "6 min read",
    content: `
            <p>Ever dreamed of making your own game on Roblox? With Roblox Studio, you can turn your ideas into reality, even if you’re new to game development. This guide walks you through the basics of creating your first game in 2025.</p>

            <h3>Getting Started with Roblox Studio</h3>
            <p>First, download Roblox Studio from the official Roblox website. It’s free and works on both Windows and Mac. Once installed, explore the interface—it’s packed with tools like terrain editors, part builders, and scripting options.</p>

            <h3>Step 1: Plan Your Game</h3>
            <p>Start with a simple idea. Maybe a racing game or an obstacle course (obby). Sketch out your concept, like the map layout or core mechanics. For example, if you’re making an obby, decide on themes like a lava escape or a sky-high challenge.</p>

            <h3>Step 2: Build Your World</h3>
            <p>Use the Studio’s drag-and-drop tools to create your environment. Add parts like platforms, walls, or decorations. Experiment with the Terrain Editor to craft landscapes, like mountains or rivers, to make your game pop.</p>

            <h3>Step 3: Add Gameplay Mechanics</h3>
            <p>Basic games don’t need complex coding. Use Roblox’s built-in templates, like the “Free Model” scripts for checkpoints or leaderboards. If you’re feeling adventurous, try learning Lua, Roblox’s scripting language, to add custom features like moving platforms.</p>

            <h3>Step 4: Test and Publish</h3>
            <p>Test your game in Studio’s Play mode to iron out bugs. Invite friends to try it out for feedback. When you’re ready, hit “Publish to Roblox” in Studio to share your game with the world. Promote it in Roblox groups or on social platforms to get players.</p>

            <h3>Tips for Success</h3>
            <p>Keep your first game simple to avoid getting overwhelmed. Check out Roblox’s Developer Hub for free tutorials and assets. And don’t forget to update your game based on player feedback to keep them coming back!</p>
        `,
  },
  {
    id: 5,
    title: "Best Avatar Customization Tips for Roblox in 2025",
    excerpt:
      "Stand out in Roblox with these pro tips for creating a unique and stylish avatar without breaking the bank.",
    image: "../images/avatar-style.jpeg",
    author: "Style Guru",
    date: "2025-01-28",
    category: "Tips",
    readTime: "5 min read",
    content: `
            <p>Your Roblox avatar is your identity in the metaverse, and in 2025, there are more customization options than ever. Whether you’re rocking a free account or splurging on Robux, these tips will help you create a standout look.</p>

            <h3>Start with Free Items</h3>
            <p>Roblox offers tons of free accessories, like hats, shirts, and hairstyles, in the Avatar Shop. Filter by “Free” to find gems that don’t cost a single Robux. Events like Roblox’s seasonal giveaways also drop exclusive free items, so keep an eye out.</p>

            <h3>Mix and Match Styles</h3>
            <p>Don’t just stick to one theme. Combine pieces like a futuristic helmet with a classic hoodie for a unique vibe. Layered clothing, introduced in recent years, lets you stack shirts and jackets for more depth.</p>

            <h3>Shop Smart with Robux</h3>
            <p>If you’re spending Robux, prioritize versatile items like dynamic heads or animations that work across multiple games. Check user-created catalogs for affordable, high-quality designs—sometimes they’re better than the premium stuff!</p>

            <h3>Use Roblox Studio for Custom Looks</h3>
            <p>Feeling creative? Use Roblox Studio to design your own clothes. You don’t need to be a pro designer—start with templates from the Developer Hub. Upload your creations for a small Robux fee and show off your personal style.</p>

            <h3>Join Avatar Contests</h3>
            <p>Roblox communities and groups often host avatar design contests with Robux or rare items as prizes. It’s a fun way to test your skills and maybe score some exclusive gear. Check Roblox’s official X account or community forums for upcoming events.</p>

            <h3>Pro Tip: Save Your Outfits</h3>
            <p>Use the Avatar Editor’s “Costumes” feature to save multiple outfits. This way, you can switch between looks for different games, like a sleek ninja for an obby or a goofy pet owner for Adopt Me!</p>
        `,
  },
  {
    id: 6,
    title: "Secrets to Winning at Roblox Trading in 2025",
    excerpt:
      "Master the art of trading limited items and Robux to grow your inventory like a pro.",
    image: "../images/trading-guide.jpeg",
    author: "Trade Master",
    date: "2025-02-10",
    category: "Guides",
    readTime: "6 min read",
    content: `
            <p>Trading in Roblox is one of the most exciting ways to score rare items and build your dream inventory. Whether you’re after a Dominus or a sparkly accessory, these tips will help you navigate the trading scene like a seasoned pro in 2025.</p>

            <h3>Understand the Trading System</h3>
            <p>Roblox’s trading system lets Premium members swap limited items, like hats or gear, with other players. Before you start, check if you have a Premium membership and enable trading in your account settings.</p>

            <h3>Know Your Item Values</h3>
            <p>Not all limiteds are created equal. Use community-driven sites like Rolimon’s or RBX.rocks to check the current value of items. For example, a Valkyrie Helm might be worth more than a few smaller limiteds combined. Stay updated to avoid overpaying.</p>

            <h3>Start Small</h3>
            <p>If you’re new, begin with low-value trades to learn the ropes. Trade common limiteds, like classic hats, before aiming for big-ticket items. This builds your rep and helps you spot good deals.</p>

            <h3>Avoid Scams</h3>
            <p>Scammers are everywhere. Never trade outside Roblox’s official system, and double-check the trade window before confirming. Watch out for “trust trades” or deals promising “free upgrades”—they’re usually traps.</p>

            <h3>Negotiate Smart</h3>
            <p>Join Roblox trading groups or Discord servers to find trade partners. Be polite but firm when negotiating. If someone offers a lowball, counter with a fair deal based on item values. Patience is key to landing great trades.</p>

            <h3>Track Market Trends</h3>
            <p>Item values fluctuate based on events or new releases. For example, limiteds often spike during Roblox’s Black Friday sales. Follow Roblox’s X posts or trading forums to stay ahead of trends and snag deals before prices climb.</p>
        `,
  },
  {
    id: 7,
    title: "Why Roblox Events Are a Must in 2025",
    excerpt:
      "Don’t miss out on Roblox’s epic events—here’s why they’re a game-changer for players.",
    image: "../images/roblox-events.jpeg",
    author: "Event Enthusiast",
    date: "2025-02-15",
    category: "Community",
    readTime: "4 min read",
    content: `
            <p>Roblox events are like virtual festivals, packed with exclusive rewards, new games, and community vibes. In 2025, they’re bigger than ever. Here’s why you should jump into every event this year.</p>

            <h3>What Are Roblox Events?</h3>
            <p>Events are special promotions where Roblox partners with brands, creators, or its own team to launch themed challenges, games, or items. Think holiday events like Halloween Hunt or collabs with brands like Nike or Marvel.</p>

            <h3>Score Free Rewards</h3>
            <p>Most events offer free items like accessories, emotes, or even limiteds just for playing. For example, last year’s Egg Hunt dropped exclusive avatar gear. Check the Events tab in Roblox to join active ones.</p>

            <h3>Discover New Games</h3>
            <p>Events often spotlight new or revamped games. Playing these can introduce you to hidden gems, like a new tycoon or simulator, that you might not have tried otherwise.</p>

            <h3>Connect with the Community</h3>
            <p>Events bring players together. Join friends or make new ones while tackling event challenges. Many events have group tasks, like teaming up in a game to unlock a badge.</p>

            <h3>How to Stay in the Loop</h3>
            <p>Follow Roblox’s official X account or join community groups to get event alerts. Some events are time-sensitive, so act fast to grab rewards before they’re gone. Pro tip: set a reminder for annual events like Bloxy Awards!</p>

            <h3>Why They Matter</h3>
            <p>Beyond free stuff, events keep Roblox fresh and fun. They’re a chance to show off your skills, flex new items, and be part of the platform’s biggest moments. Don’t sleep on them!</p>
        `,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Show cookie popup if not accepted
  showCookiePopup();

  // Load featured products on homepage
  if (document.getElementById("featured-products")) {
    loadFeaturedProducts();
  }

  // Load all products on catalog page
  if (document.getElementById("products-grid")) {
    loadAllProducts();
  }

  // Load blog posts - Skip if on blog index page
  if (document.getElementById("blog-posts") && window.location.pathname !== "/blog/") {
    loadBlogPosts();
  }

  // Load cart items
  if (document.getElementById("cart-items")) {
    loadCartItems();
  }

  // Update cart counter
  updateCartCounter();

  // Initialize forms
  initializeForms();
});

/**
 * Cookie functions
 */
function showCookiePopup() {
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (!cookieConsent) {
    const popup = document.getElementById("cookie-popup");
    if (popup) {
      popup.classList.add("show");
    }
  }
}

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  document.getElementById("cookie-popup").classList.remove("show");
}

function declineCookies() {
  localStorage.setItem("cookieConsent", "declined");
  document.getElementById("cookie-popup").classList.remove("show");
}

/**
 * Product functions
 */
function loadFeaturedProducts() {
  const container = document.getElementById("featured-products");
  if (!container) return;

  container.innerHTML = featuredProducts
    .map((product) => createProductCard(product))
    .join("");
}

function loadAllProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  container.innerHTML = allProducts
    .map((product) => createProductCard(product))
    .join("");
}

function createProductCard(product) {
  return `
        <div class="col-md-6 col-lg-4">
            <div class="card bg-dark-card border-purple h-100 product-card">
                <div class="card-header p-0 position-relative">
                    ${
                      product.discount > 0
                        ? `<span class="badge bg-danger badge-discount">-${product.discount}%</span>`
                        : ""
                    }
                    <span class="badge bg-purple badge-category">${product.category}</span>
                    <img src="${product.image}" alt="${product.name}" class="card-img-top product-image" style="height: 200px; object-fit: cover;">
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title text-white">${product.name}</h5>
                    <div class="d-flex align-items-center justify-content-center mb-3">
                        <i class="fas fa-star rating me-1"></i>
                        <span class="text-light">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-center gap-2 mb-3">
                        <span class="h4 text-purple mb-0">$${product.price}</span>
                        ${
                          product.originalPrice
                            ? `<span class="text-muted text-decoration-line-through">$${product.originalPrice}</span>`
                            : ""
                        }
                    </div>
                    <button class="btn btn-gradient w-100" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart me-2"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Cart functions
 */
function addToCart(productId) {
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();

  // Show success message
  showAlert("Product added to cart!", "success");
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
  loadCartItems();
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
  }
}

function updateCartCounter() {
  const counter = document.querySelector(".badge.bg-purple");
  if (counter) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    counter.textContent = totalItems;
    counter.style.display = totalItems > 0 ? "block" : "none";
  }
}

function loadCartItems() {
  const container = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartSummary = document.getElementById("cart-summary");

  if (!container) return;

  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = "block";
    if (cartSummary) cartSummary.style.display = "none";
    container.innerHTML = "";
    return;
  }

  if (emptyCart) emptyCart.style.display = "none";
  if (cartSummary) cartSummary.style.display = "block";

  container.innerHTML = cart
    .map(
      (item) => `
        <div class="card bg-dark-card border-purple mb-3">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-white">${item.name}</h5>
                        <p class="text-purple h6">$${item.price}</p>
                    </div>
                    <div class="col-md-3">
                        <div class="quantity-controls">
                            <button class="btn btn-outline-purple btn-sm" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input type="number" class="form-control quantity-input bg-dark text-white border-secondary" 
                                   value="${item.quantity}" min="1" 
                                   onchange="updateQuantity(${item.id}, parseInt(this.value))">
                            <button class="btn btn-outline-purple btn-sm" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <p class="text-white h6">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div class="col-md-1">
                        <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const subtotalElement = document.getElementById("subtotal");
  const taxElement = document.getElementById("tax");
  const totalElement = document.getElementById("total");

  if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
  if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

/**
 * Blog functions
 */
function loadBlogPosts() {
  const container = document.getElementById("blog-posts");
  if (!container) return;

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  let html = `
        <!-- Featured Post -->
        <div class="col-12 mb-5">
            <div class="card bg-dark-card border-purple">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src="${featuredPost.image}" alt="${featuredPost.title}" class="img-fluid h-100 w-100" style="object-fit: cover;">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body p-4">
                            <span class="badge bg-purple mb-3">Featured</span>
                            <h3 class="card-title text-white">${featuredPost.title}</h3>
                            <p class="card-text text-muted">${featuredPost.excerpt}</p>
                            <div class="d-flex align-items-center text-muted small mb-3">
                                <i class="fas fa-user me-2"></i>
                                <span class="me-3">${featuredPost.author}</span>
                                <i class="fas fa-calendar me-2"></i>
                                <span class="me-3">${new Date(
                                  featuredPost.date
                                ).toLocaleDateString()}</span>
                                <span>${featuredPost.readTime}</span>
                            </div>
                            <a href="/blog/ultimate-guide-earning-robux-2025/" class="btn btn-gradient">
                                Read More <i class="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Other posts
  otherPosts.forEach((post) => {
    let postUrl = "";
    if (post.id === 2) {
      postUrl = "/blog/top-10-roblox-games-play-this-month/";
    } else if (post.id === 3) {
      postUrl = "/blog/how-stay-safe-while-gaming-online/";
    }
    html += `
            <div class="col-md-6 col-lg-4">
                <div class="card bg-dark-card border-purple h-100 blog-card">
                    <div class="position-relative overflow-hidden">
                        <img src="${post.image}" alt="${post.title}" class="card-img-top blog-image" style="height: 200px; object-fit: cover;">
                        <span class="badge bg-purple position-absolute" style="top: 10px; left: 10px;">${post.category}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-white">${post.title}</h5>
                        <p class="card-text text-muted">${post.excerpt}</p>
                        <div class="d-flex align-items-center text-muted small mb-3">
                            <i class="fas fa-user me-2"></i>
                            <span class="me-3">${post.author}</span>
                            <i class="fas fa-calendar me-2"></i>
                            <span>${new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${post.readTime}</small>
                            <a href="${postUrl}" class="btn btn-outline-purple btn-sm">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;
}

/**
 * Form functions
 */
function initializeForms() {
  // Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showAlert(
        "Thank you for your message! We'll get back to you soon.",
        "success"
      );
      this.reset();
    });
  }

  // Checkout form
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const termsCheckbox = document.getElementById("terms");
      if (!termsCheckbox.checked) {
        showAlert("Please agree to the terms and conditions", "danger");
        return;
      }
      showAlert("Confirmation code has been sent to your email!", "success");
      setTimeout(() => {
        window.location.href = "../";
      }, 2000);
    });
  }

  // Login form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showAlert("Login functionality would be implemented here", "info");
    });
  }

  // Register form
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const termsCheckbox = document.getElementById("terms");

      if (!termsCheckbox.checked) {
        showAlert("Please agree to the terms and conditions", "danger");
        return;
      }

      if (password !== confirmPassword) {
        showAlert("Passwords do not match", "danger");
        return;
      }

      showAlert("Registration functionality would be implemented here", "info");
    });
  }
}

/**
 * Utility functions
 */
function showAlert(message, type = "info") {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  alertDiv.style.cssText =
    "top: 20px; right: 20px; z-index: 1060; min-width: 300px;";
  alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    if (alertDiv.parentNode) {
      alertDiv.parentNode.removeChild(alertDiv);
    }
  }, 5000);
}

function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

/**
 * Search functionality
 */
function searchProducts(query) {
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const container = document.getElementById("products-grid");
  if (container) {
    container.innerHTML = filteredProducts
      .map((product) => createProductCard(product))
      .join("");
  }
}

/**
 * Sort functionality
 */
function sortProducts(sortBy) {
  const sortedProducts = [...allProducts];

  switch (sortBy) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Keep original order for 'popular'
      break;
  }

  const container = document.getElementById("products-grid");
  if (container) {
    container.innerHTML = sortedProducts
      .map((product) => createProductCard(product))
      .join("");
  }
}