const profileImg = document.getElementById('profile-img');
const modal = document.getElementById('modal');
const enlargedImg = document.getElementById('enlargedImg');
const closeBtn = document.getElementById('closeBtn');

profileImg.addEventListener('click', () => {
  modal.style.display = 'block';
  enlargedImg.src = profileImg.src;
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Close on background click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const services = [
  {
    title: "Web Scraping",
    description: "Turning websites into insights, one scrape at a time.",
    link: "contact.html",
    image: "Screenshot 2025-04-27 161729.png"
  },
  {
    title: "Web Developmet",
    description: "Crafting seamless experiences that bring ideas to life on the web.",
    link: "contact.html",
    image: "Screenshot 2025-04-27 163014.png"
  },
  {
    title: "Android App Development ",
    description: "Empowering mobile innovation with intuitive, scalable Android solutions.",
    link: "contact.html",
    image: "Screenshot 2025-04-27 161941.png"
  },
  {
    title: "SoftWare Developmet",
    description: "Turning concepts into robust, reliable software solutions for the future.",
    link: "contact.html",
    image: "Screenshot 2025-04-27 162059.png"
  },
  {
    title: "UI/NUX/UX",
    description: " Crafting memorable online impressions through innovative onboarding.",
    link: "contact.html",
    image: "Screenshot 2025-04-27 162159.png"
  }


];

let currentIndex = 0;

function showService(index) {
  const service = services[index];
  document.getElementById("serviceTitle").innerText = service.title;
  document.getElementById("serviceDescription").innerText = service.description;
  document.getElementById("detailButton").href = service.link;
  document.getElementById("serviceImage").src = service.image;
}

function rotateServices() {
  currentIndex = (currentIndex + 1) % services.length;
  showService(currentIndex);
}

function previousService() {
  currentIndex = (currentIndex - 1 + services.length) % services.length;
  showService(currentIndex);
}

function closePopup() {
  document.getElementById("servicePopup").style.display = "none";
}

// Initial show
showService(currentIndex);

// Auto rotate every 30 seconds
setInterval(rotateServices, 1000);

// Add swipe support
const popup = document.getElementById("servicePopup");
let startX = 0;

popup.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

popup.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if (Math.abs(diffX) > 50) {
    if (diffX < 0) {
      rotateServices(); // Swipe left → next
    } else {
      previousService(); // Swipe right → previous
    }
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    rotateServices(); // Next
  } else if (e.key === "ArrowLeft") {
    previousService(); // Previous
  }
});

const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
const chatbot = document.getElementById('chatbot');
const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
const mainOptions = document.getElementById('main-options');
const servicesList = document.getElementById('services-list');

// Toggle Chatbot Visibility
chatbotToggleBtn.addEventListener('click', () => {
  chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'block' : 'none';
  servicesList.classList.add('hidden');
  mainOptions.classList.remove('hidden');
});

// Close Chatbot
chatbotCloseBtn.addEventListener('click', () => {
  chatbot.style.display = 'none';
});

// Open External Link
function openLink(url) {
  window.open(url, '_blank');
}

// Show Services List
function showServices() {
  mainOptions.classList.add('hidden');
  servicesList.classList.remove('hidden');
}

// Back to Main Options
function backToMain() {
  servicesList.classList.add('hidden');
  mainOptions.classList.remove('hidden');
}

// Open WhatsApp Chat
function openWhatsApp() {
  const phoneNumber = '9933315128'; // Replace with your WhatsApp number in international format
  const message = encodeURIComponent('Hello, I have a question.');
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  window.open(url, '_blank');
}



const images = document.querySelectorAll('.image-item img');
const popupModal = document.getElementById('popup-modal');
const popupImg = document.getElementById('popup-img');
//const closeBtn = document.getElementById('close-btn');

images.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popupModal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

popupModal.addEventListener('click', (e) => {
  if (e.target !== popupImg) {
    popupModal.style.display = 'none';
  }
});
