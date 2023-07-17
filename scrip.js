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