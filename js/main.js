async function loadComponent(id, path) {
  try {
    const response = await fetch(path);
    const html = await response.text();
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Elemento con id "${id}" no encontrado.`);
      return;
    }

    element.innerHTML = html;
  } catch (error) {
    console.error("Error cargando componente:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
    // load header and footer first to ensure they are available for all sections
  await loadComponent("header", "components/header.html");
  await loadComponent("footer", "components/footer.html");
    // then load the main content sections
  await loadComponent("main-content", "components/home.html");
    // load each section in parallel for faster rendering
  await loadComponent("about-section", "components/about.html");
  await loadComponent("education-section", "components/education.html");
  await loadComponent("projects-section", "components/projects.html");
  await loadComponent("certifications-section", "components/certifications.html");
  await loadComponent("skills-section", "components/skills.html");
  await loadComponent("contact-section", "components/contact.html");
});

document.addEventListener("click", (e) => {
  if (e.target.id === "email-link") {
    e.preventDefault();
    navigator.clipboard
      .writeText("yass18.98@gmail.com")
      .then(() => alert("Correo electrónico copiado al portapapeles"))
      .catch(() => alert("No se pudo copiar el correo electrónico"))
      .catch((error) =>
        console.error("Error al copiar el correo electrónico:", error),
      );
  }
});
