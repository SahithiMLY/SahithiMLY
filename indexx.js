// Generate dynamic content (e.g., Blog Posts, Services)
function generateBlogPosts(numberOfPosts) {
    const container = document.querySelector('#blog');
    for (let i = 1; i <= numberOfPosts; i++) {
        const post = document.createElement('div');
        post.classList.add('blog-post');
        post.innerHTML = `
            <h3>Blog Post ${i}</h3>
            <p>This is the content of blog post ${i}. It includes useful information and insights.</p>
            <p><small>Published on: ${formatDate(new Date())}</small></p>
        `;
        container.appendChild(post);
    }
}

// Create service cards dynamically
function generateServices(numberOfServices) {
    const container = document.querySelector('#services');
    for (let i = 1; i <= numberOfServices; i++) {
        const service = document.createElement('div');
        service.classList.add('service');
        service.innerHTML = `
            <h3>Service ${i}</h3>
            <p>Service description goes here. We provide high-quality service ${i}.</p>
        `;
        container.appendChild(service);
    }
}

// Create product cards dynamically
function generateProducts(numberOfProducts) {
    const container = document.querySelector('#products');
    for (let i = 1; i <= numberOfProducts; i++) {
        const product = document.createElement('div');
        product.classList.add('product-card');
        product.innerHTML = `
            <img src="https://via.placeholder.com/200" alt="Product ${i}">
            <h4>Product ${i}</h4>
            <p>Product description for product ${i}. It is an excellent product.</p>
            <button class="add-to-cart" data-product-id="${i}">Add to Cart</button>
        `;
        container.appendChild(product);
    }
}
// Handle form submission with validation
function handleFormSubmission(formId) {
    const form = document.querySelector(`#${formId}`);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = form.querySelector('input[name="email"]').value;
        const name = form.querySelector('input[name="name"]').value;

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        alert('Form submitted successfully!');
    });
}

// Handle tab switching
function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = document.querySelector(`#${tab.dataset.target}`);
            const allTabs = document.querySelectorAll('.tab-content');
            allTabs.forEach(tabContent => tabContent.classList.remove('active'));
            target.classList.add('active');
        });
    });
}

// Event listener for opening and closing modals
function setupModals() {
    const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    const modals = document.querySelectorAll('.modal');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetModal = document.querySelector(trigger.dataset.target);
            targetModal.classList.add('show');
        });
    });

    modals.forEach(modal => {
        modal.querySelector('.close').addEventListener('click', () => {
            modal.classList.remove('show');
        });
    });
}

// Scroll-to-top button functionality
function setupScrollToTop() {
    const scrollButton = document.querySelector('#scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// Simulate fetching user data from an API
async function fetchUserData() {
    const userData = await fetchData('https://jsonplaceholder.typicode.com/users');
    const userList = document.querySelector('#user-list');
    
    userData.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user');
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        `;
        userList.appendChild(userItem);
    });
}

// Fetch product data
async function fetchProductData() {
    const products = await fetchData('https://fakestoreapi.com/products');
    const productSection = document.querySelector('#products');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>${product.description}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productSection.appendChild(productCard);
    });
}
// Carousel functionality
function setupCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

// Implement a dynamic search filter
function setupSearchFilter() {
    const searchInput = document.querySelector('#search');
    const items = document.querySelectorAll('.filter-item');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}
// Utility Function: Generate a random number between two values
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility Function: Generate a unique ID for elements
function generateId(prefix) {
    return prefix + '-' + new Date().getTime() + '-' + getRandomNumber(1000, 9999);
}

// Utility Function: Format date to a readable format
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Utility Function: Toggle visibility of an element
function toggleVisibility(element) {
    const currentState = element.style.display;
    if (currentState === 'none' || currentState === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Utility Function: Validate email format
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Utility Function: Fetch data from a mock API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
