function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.classList.add('active');
        window.scrollTo({ top: section.offsetTop, behavior: 'smooth'})
      } else {
        section.classList.remove('active');
      }
    });
  }
