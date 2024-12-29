const createServices = (count) => {
  const serviceSection = document.querySelector('#services');
  
  for (let i = 1; i <= count; i++) {
    let service = document.createElement('div');
    service.classList.add('service-card');
    service.innerHTML = `
      <h3>Service ${i}</h3>
      <p>This is the description for service ${i}. We provide excellent quality!</p>
    `;
    serviceSection.appendChild(service);
  }
};

// Call function to add 100 service cards
createServices(100);
document.addEventListener("DOMContentLoaded", function() {
  // Add a function to dynamically generate content, e.g., service cards
  const serviceContainer = document.querySelector("#services");

  for (let i = 1; i <= 50; i++) {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");
    serviceCard.innerHTML = `<h3>Service ${i}</h3><p>Description of service ${i}.</p>`;
    serviceContainer.appendChild(serviceCard);
  }

  // Add more dynamic content if needed
});
