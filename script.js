// Templates Modal Functionality
document.getElementById('template-selector-btn').addEventListener('click', function() {
  document.getElementById('templates-modal').classList.remove('hidden');
});

document.getElementById('close-templates').addEventListener('click', function() {
  document.getElementById('templates-modal').classList.add('hidden');
});

document.querySelectorAll('.template-card button').forEach(button => {
  button.addEventListener('click', function() {
      const templateName = this.closest('.template-card').querySelector('h4').textContent;
      alert(`Selected ${templateName} template!`);
      document.getElementById('templates-modal').classList.add('hidden');
  });
});

// Add Education
document.getElementById('add-education').addEventListener('click', function() {
  const container = document.getElementById('education-container');
  const newItem = document.createElement('div');
  newItem.className = 'education-item mb-6 p-4 border rounded-lg';
  newItem.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
              <label class="block text-gray-700 mb-2">Institution</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
              <label class="block text-gray-700 mb-2">Degree</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
              <label class="block text-gray-700 mb-2">Field of Study</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
              <label class="block text-gray-700 mb-2">Graduation Year</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
      </div>
      <button class="text-red-500 hover:text-red-700 flex items-center remove-btn">
          <i class="fas fa-trash mr-2"></i> Remove
      </button>
  `;
  container.appendChild(newItem);
  
  // Add remove functionality
  newItem.querySelector('.remove-btn').addEventListener('click', function() {
      container.removeChild(newItem);
  });
});

// Add Experience
document.getElementById('add-experience').addEventListener('click', function() {
  const container = document.getElementById('experience-container');
  const newItem = document.createElement('div');
  newItem.className = 'experience-item mb-6 p-4 border rounded-lg';
  newItem.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
              <label class="block text-gray-700 mb-2">Job Title</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
              <label class="block text-gray-700 mb-2">Company</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
              <label class="block text-gray-700 mb-2">Start Date</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
              <label class="block text-gray-700 mb-2">End Date</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
      </div>
      <div class="mb-4">
          <label class="block text-gray-700 mb-2">Responsibilities</label>
          <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" rows="3"></textarea>
      </div>
      <button class="text-red-500 hover:text-red-700 flex items-center remove-btn">
          <i class="fas fa-trash mr-2"></i> Remove
      </button>
  `;
  container.appendChild(newItem);
  
  // Add remove functionality
  newItem.querySelector('.remove-btn').addEventListener('click', function() {
      container.removeChild(newItem);
  });
});

// Add Project
document.getElementById('add-project').addEventListener('click', function() {
  const container = document.getElementById('projects-container');
  const newItem = document.createElement('div');
  newItem.className = 'project-item mb-6 p-4 border rounded-lg';
  newItem.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
              <label class="block text-gray-700 mb-2">Project Name</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
              <label class="block text-gray-700 mb-2">Project URL</label>
              <input type="url" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
      </div>
      <div class="mb-4">
          <label class="block text-gray-700 mb-2">Description</label>
          <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" rows="3"></textarea>
      </div>
      <button class="text-red-500 hover:text-red-700 flex items-center remove-btn">
          <i class="fas fa-trash mr-2"></i> Remove
      </button>
  `;
  container.appendChild(newItem);
  
  // Add remove functionality
  newItem.querySelector('.remove-btn').addEventListener('click', function() {
      container.removeChild(newItem);
  });
});

// Add Skill
document.getElementById('submit-skill').addEventListener('click', function() {
  const skillInput = document.getElementById('new-skill');
  const skillText = skillInput.value.trim();
  
  if (skillText) {
      const container = document.getElementById('skills-container');
      const newSkill = document.createElement('div');
      newSkill.className = 'skill-item bg-purple-100 text-purple-700 px-4 py-2 rounded-full flex items-center';
      newSkill.innerHTML = `
          <span>${skillText}</span>
          <button class="ml-2 text-purple-500 hover:text-purple-700 remove-skill">
              <i class="fas fa-times"></i>
          </button>
      `;
      container.appendChild(newSkill);
      skillInput.value = '';
      
      // Add remove functionality
      newSkill.querySelector('.remove-skill').addEventListener('click', function() {
          container.removeChild(newSkill);
      });
  }
});

// Allow pressing Enter to add skill
document.getElementById('new-skill').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      document.getElementById('submit-skill').click();
  }
});

// Progress Tracking
function updateProgress() {
  // Personal Info Progress
  const personalInputs = document.querySelectorAll('.resume-section:first-child input, .resume-section:first-child textarea');
  let filledPersonal = 0;
  personalInputs.forEach(input => {
      if (input.value.trim()) filledPersonal++;
  });
  const personalPercent = Math.round((filledPersonal / personalInputs.length) * 100);
  document.getElementById('personal-progress').textContent = `${personalPercent}%`;
  document.getElementById('personal-progress-bar').style.width = `${personalPercent}%`;

  // Education Progress
  const educationItems = document.querySelectorAll('.education-item');
  const educationPercent = educationItems.length > 0 ? 100 : 0;
  document.getElementById('education-progress').textContent = `${educationPercent}%`;
  document.getElementById('education-progress-bar').style.width = `${educationPercent}%`;

  // Experience Progress
  const experienceItems = document.querySelectorAll('.experience-item');
  const experiencePercent = experienceItems.length > 0 ? 100 : 0;
  document.getElementById('experience-progress').textContent = `${experiencePercent}%`;
  document.getElementById('experience-progress-bar').style.width = `${experiencePercent}%`;
}

// Update progress when any input changes
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', updateProgress);
});

// Initial progress update
updateProgress();

// Form validation
function validateForm() {
  let isValid = true;
  
  // Validate personal info
  const nameInput = document.querySelector('input[type="text"]');
  if (!nameInput.value.trim()) {
      nameInput.classList.add('required-field');
      isValid = false;
  } else {
      nameInput.classList.remove('required-field');
  }

  // Validate at least one education entry
  if (document.querySelectorAll('.education-item').length === 0) {
      alert('Please add at least one education entry');
      isValid = false;
  }

  return isValid;
}

// Generate Resume Button
document.getElementById('generate-resume').addEventListener('click', function() {
  if (!validateForm()) {
      alert('Please fill in all required fields');
      return;
  }
  // Collect all form data
  const formData = {
      personal: {
          name: document.querySelector('input[type="text"]').value,
          email: document.querySelector('input[type="email"]').value,
          phone: document.querySelector('input[type="tel"]').value,
          linkedin: document.querySelector('input[type="url"]').value,
          summary: document.querySelector('.resume-section:first-child textarea').value
      },
      education: [],
      experience: [],
      skills: [],
      projects: []
  };

  // Collect education
  document.querySelectorAll('.education-item').forEach(item => {
      const inputs = item.querySelectorAll('input');
      formData.education.push({
          institution: inputs[0].value,
          degree: inputs[1].value,
          field: inputs[2].value,
          year: inputs[3].value
      });
  });

  // Collect experience
  document.querySelectorAll('.experience-item').forEach(item => {
      const inputs = item.querySelectorAll('input');
      const textarea = item.querySelector('textarea');
      formData.experience.push({
          jobTitle: inputs[0].value,
          company: inputs[1].value,
          startDate: inputs[2].value,
          endDate: inputs[3].value,
          responsibilities: textarea.value
      });
  });

  // Collect skills
  document.querySelectorAll('.skill-item span').forEach(skill => {
      formData.skills.push(skill.textContent);
  });

  // Collect projects
  document.querySelectorAll('.project-item').forEach(item => {
      const inputs = item.querySelectorAll('input');
      const textarea = item.querySelector('textarea');
      formData.projects.push({
          name: inputs[0].value,
          url: inputs[1].value,
          description: textarea.value
      });
  });

  // Update preview with actual data
  updatePreview(formData);
  
  alert('Resume generated successfully! Scroll up to view your resume preview.');
});

function updatePreview(data) {
  // Update personal info
  document.getElementById('preview-name').textContent = data.personal.name || 'Your Name';
  document.getElementById('preview-contact').textContent = 
      `${data.personal.email || 'email@example.com'} | ${data.personal.phone || '(123) 456-7890'} | ${data.personal.linkedin || 'linkedin.com/in/yourprofile'}`;
  document.getElementById('preview-summary').textContent = data.personal.summary || 'Brief professional summary goes here...';

  // Update education
  const educationPreview = document.getElementById('preview-education');
  educationPreview.innerHTML = data.education.map(edu => 
      `<div class="mb-2">
          <strong>${edu.institution || 'Institution'}</strong><br>
          ${edu.degree || 'Degree'} in ${edu.field || 'Field of Study'}<br>
          Graduated: ${edu.year || 'Year'}
      </div>`
  ).join('') || 'Your education details will appear here';

  // Update experience
  const experiencePreview = document.getElementById('preview-experience');
  experiencePreview.innerHTML = data.experience.map(exp => 
      `<div class="mb-2">
          <strong>${exp.jobTitle || 'Job Title'}</strong> at ${exp.company || 'Company'}<br>
          ${exp.startDate || 'Start Date'} - ${exp.endDate || 'End Date'}<br>
          ${exp.responsibilities || 'Responsibilities'}
      </div>`
  ).join('') || 'Your work experience will appear here';
}

// Update preview when personal info changes
const personalInputs = document.querySelectorAll('.resume-section:first-child input, .resume-section:first-child textarea');
personalInputs.forEach(input => {
  input.addEventListener('input', function() {
      if (this.type === 'text' && this.previousElementSibling.textContent.includes('Name')) {
          document.getElementById('preview-name').textContent = this.value || 'Your Name';
      } else if (this.type === 'email') {
          const email = this.value || 'email@example.com';
          const phone = document.querySelector('input[type="tel"]').value || '(123) 456-7890';
          const linkedin = document.querySelector('input[type="url"]').value || 'linkedin.com/in/yourprofile';
          document.getElementById('preview-contact').textContent = `${email} | ${phone} | ${linkedin}`;
      } else if (this.tagName === 'TEXTAREA') {
          document.getElementById('preview-summary').textContent = this.value || 'Brief professional summary goes here...';
      }
  });
});