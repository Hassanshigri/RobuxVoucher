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
    name: "800 Robux",
    price: 9.99,
    originalPrice: 11.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=800+Robux",
    rating: 4.8,
    reviews: 1250,
    category: "Popular",
    discount: 17,
  },
  {
    id: 2,
    name: "1700 Robux",
    price: 19.99,
    originalPrice: 23.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=1700+Robux",
    rating: 4.9,
    reviews: 890,
    category: "Best Value",
    discount: 17,
  },
  {
    id: 3,
    name: "4500 Robux",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=4500+Robux",
    rating: 4.7,
    reviews: 650,
    category: "Premium",
    discount: 17,
  },
];

/**
 * All products data
 */
const allProducts = [
  {
    id: 1,
    name: "400 Robux",
    price: 4.99,
    originalPrice: 5.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=400+Robux",
    rating: 4.6,
    reviews: 890,
    category: "Starter Pack",
    discount: 17,
  },
  ...featuredProducts,
  {
    id: 4,
    name: "1000 Robux",
    price: 12.49,
    originalPrice: 14.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=1000+Robux",
    rating: 4.7,
    reviews: 1100,
    category: "Standard",
    discount: 17,
  },
  {
    id: 5,
    name: "2000 Robux",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=2000+Robux",
    rating: 4.8,
    reviews: 950,
    category: "Mid-Tier",
    discount: 17,
  },
  {
    id: 6,
    name: "3000 Robux",
    price: 34.99,
    originalPrice: 41.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=3000+Robux",
    rating: 4.8,
    reviews: 700,
    category: "High Value",
    discount: 17,
  },
  {
    id: 7,
    name: "6000 Robux",
    price: 59.99,
    originalPrice: 71.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=6000+Robux",
    rating: 4.9,
    reviews: 550,
    category: "Elite",
    discount: 17,
  },
  {
    id: 8,
    name: "8000 Robux",
    price: 79.99,
    originalPrice: 95.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=8000+Robux",
    rating: 4.8,
    reviews: 480,
    category: "Pro Pack",
    discount: 17,
  },
  {
    id: 9,
    name: "10000 Robux",
    price: 99.99,
    originalPrice: 119.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=10000+Robux",
    rating: 4.8,
    reviews: 420,
    category: "Ultimate",
    discount: 17,
  },
  {
    id: 10,
    name: "12000 Robux",
    price: 119.99,
    originalPrice: 143.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=12000+Robux",
    rating: 4.7,
    reviews: 390,
    category: "Mega Pack",
    discount: 17,
  },
  {
    id: 11,
    name: "15000 Robux",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=15000+Robux",
    rating: 4.9,
    reviews: 350,
    category: "Super Pack",
    discount: 17,
  },
  {
    id: 12,
    name: "18000 Robux",
    price: 179.99,
    originalPrice: 215.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=18000+Robux",
    rating: 4.8,
    reviews: 320,
    category: "Ultra Pack",
    discount: 17,
  },
  {
    id: 13,
    name: "20000 Robux",
    price: 199.99,
    originalPrice: 239.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=20000+Robux",
    rating: 4.9,
    reviews: 300,
    category: "Epic Pack",
    discount: 17,
  },
  {
    id: 14,
    name: "22500 Robux",
    price: 224.99,
    originalPrice: 269.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=22500+Robux",
    rating: 4.9,
    reviews: 280,
    category: "Legendary",
    discount: 17,
  },
  {
    id: 15,
    name: "25000 Robux",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://via.placeholder.com/250x250/8B5CF6/FFFFFF?text=25000+Robux",
    rating: 4.8,
    reviews: 260,
    category: "Supreme",
    discount: 17,
  },
];

/**
 * Blog posts data
 */
const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Earning Robux in 2024",
    excerpt: "Discover the best legitimate ways to earn Robux and maximize your gaming experience in Roblox.",
    image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Robux+Guide",
    author: "Gaming Expert",
    date: "2024-01-15",
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
    excerpt: "Check out the most popular and exciting Roblox games that are trending right now.",
    image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Top+Games",
    author: "Game Reviewer",
    date: "2024-01-12",
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
    excerpt: "Essential tips for protecting yourself and your account while enjoying online gaming.",
    image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Online+Safety",
    author: "Security Specialist",
    date: "2024-01-10",
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
];

/**
 * Initialize page
 */
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

  // Load blog posts
  if (document.getElementById("blog-posts")) {
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

  container.innerHTML = featuredProducts.map((product) => createProductCard(product)).join("");
}

function loadAllProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  container.innerHTML = allProducts.map((product) => createProductCard(product)).join("");
}

function createProductCard(product) {
  return `
        <div class="col-md-6 col-lg-4">
            <div class="card bg-dark-card border-purple h-100 product-card">
                <div class="card-header p-0 position-relative">
                    ${product.discount > 0 ? `<span class="badge bg-danger badge-discount">-${product.discount}%</span>` : ""}
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
                        ${product.originalPrice ? `<span class="text-muted text-decoration-line-through">$${product.originalPrice}</span>` : ""}
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
    `,
    )
    .join("");

  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
                                <span class="me-3">${new Date(featuredPost.date).toLocaleDateString()}</span>
                                <span>${featuredPost.readTime}</span>
                            </div>
                            <a href="/blog/ultimate-guide-earning-robux-2024/index.html" class="btn btn-gradient">
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
      postUrl = "/blog/top-10-roblox-games-play-this-month/index.html";
    } else if (post.id === 3) {
      postUrl = "/blog/how-stay-safe-while-gaming-online/index.html";
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
      showAlert("Thank you for your message! We'll get back to you soon.", "success");
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
        window.location.href = "../index.html";
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
  alertDiv.style.cssText = "top: 20px; right: 20px; z-index: 1060; min-width: 300px;";
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
  const filteredProducts = allProducts.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

  const container = document.getElementById("products-grid");
  if (container) {
    container.innerHTML = filteredProducts.map((product) => createProductCard(product)).join("");
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
    container.innerHTML = sortedProducts.map((product) => createProductCard(product)).join("");
  }
}