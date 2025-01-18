// Add interactivity here if needed (e.g., smooth scrolling, toggling content)
//console.log("Portfolio loaded successfully!");
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
  // Dynamic skill progress bars
  const skills = [
    { name: 'C, C++', level: 80 },
    { name: 'HTML, CSS, JavaScript', level: 90 },
    { name: 'React.js', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'Power BI', level: 80 },
  ];
  
  const skillSection = document.getElementById('skills');
  const skillList = skillSection.querySelector('ul');
  
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="skill-name">${skill.name}</div>
      <div class="progress-bar">
        <div class="progress" style="width: ${skill.level}%;"></div>
      </div>
    `;
    skillList.appendChild(li);
  });
  