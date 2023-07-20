// about
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault();
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // servives
  document.addEventListener("DOMContentLoaded", function() {
    const servicesLink = document.querySelector('a[href="#services"]');
    servicesLink.addEventListener("click", function(event) {
      event.preventDefault();
      const servicesSection = document.getElementById("services");
      servicesSection.scrollIntoView({ behavior: "smooth" });
    });
  });

//   project
    document.addEventListener("DOMContentLoaded", function() {
    const servicesLink = document.querySelector('a[href="#project"]');
    servicesLink.addEventListener("click", function(event) {
      event.preventDefault();
      const servicesSection = document.getElementById("project");
      servicesSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // contact
  document.addEventListener("DOMContentLoaded", function() {
    const servicesLink = document.querySelector('a[href="#contact"]');
    servicesLink.addEventListener("click", function(event) {
      event.preventDefault();
      const servicesSection = document.getElementById("contact");
      servicesSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // contact
  function submitForm() {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '' || lastName.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields before submitting the form.');
      return;
    }
    
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('message').value = '';

    alert('Form submitted successfully!');
  }

  // Attach an event listener to the Submit button to trigger the form submission function
  document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); 
    submitForm(); 
  });