document.getElementById('resume-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Collect Personal Info
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Collect Education
  const educationBlocks = document.querySelectorAll('#education-section > .entry-block');
  const educationList = Array.from(educationBlocks).map(block => {
    const inputs = block.querySelectorAll('input');
    return `${inputs[0]?.value || ""} from ${inputs[1]?.value || ""} (${inputs[2]?.value || ""})`;
  });

  // Experience
  const experienceEntries = Array.from(document.querySelectorAll('.experience-entry')).map(e => e.value);

  // Skills
  const skillEntries = Array.from(document.querySelectorAll('.skills-entry')).map(e => e.value);

  // Projects
  const projectTitles = Array.from(document.querySelectorAll('.project-title')).map(e => e.value);
  const projectDescs = Array.from(document.querySelectorAll('.project-desc')).map(e => e.value);
  const projects = projectTitles.map((title, i) => ({
    title,
    description: projectDescs[i]
  }));

  // Save to MongoDB via backend
  const resumeData = {
    name,
    email,
    phone,
    education: educationList,
    experience: experienceEntries,
    skills: skillEntries,
    projects
  };

  try {
    const response = await fetch('http://localhost:5000/submit-resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resumeData)
    });

    const result = await response.json();
    if (response.ok) {
      alert('Resume saved successfully!');
      document.getElementById('resume-form').reset();
      document.getElementById('resume-preview').innerHTML = ''; // Clear preview if needed
    } else {
      alert('Failed to save resume: ' + result.error);
    }
  } catch (err) {
    console.error(err);
    alert('An error occurred while saving your resume.');
  }

  // Generate resume preview (optional)
  const preview = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <ul>${educationList.map(e => `<li>${e}</li>`).join('')}</ul>

    <h3>Experience</h3>
    <ul>${experienceEntries.map(e => `<li>${e}</li>`).join('')}</ul>

    <h3>Skills</h3>
    <ul>${skillEntries.map(s => `<li>${s}</li>`).join('')}</ul>

    <h3>Projects</h3>
    <ul>${projects.map(p => `<li><strong>${p.title}</strong>: ${p.description}</li>`).join('')}</ul>
  `;

  document.getElementById('resume-preview').innerHTML = preview;
});

let isSubscribed = false;

document.getElementById('subscribe-btn').addEventListener('click', () => {
  alert('Payment Successful! You are now subscribed.');
  isSubscribed = true;
  document.getElementById('download-pdf').disabled = false;
});

document.getElementById('download-pdf').addEventListener('click', () => {
  if (!isSubscribed) {
    alert("You must subscribe first!");
    return;
  }

  const resume = document.getElementById('resume-preview');
  const opt = {
    margin: 0.5,
    filename: 'Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(resume).set(opt).save();
});

async function createOrder() {
  const res = await fetch('http://localhost:5000/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: 199 })
  });

  return res.json();
}

async function verifyPayment(response) {
  const verifyRes = await fetch('http://localhost:5000/verify-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
      name: "Nejamul Haque",
      email: "example@gmail.com",
      amount: 199
    })
  });

  const result = await verifyRes.json();
  if (verifyRes.ok) {
    alert("Payment Successful & Verified!");
    isSubscribed = true;
    document.getElementById('download-pdf').disabled = false;
  } else {
    alert("Payment failed verification");
  }
}

VanillaTilt.init(document.querySelector(".resume-illustration img"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});

function addEducation() {
  const section = document.getElementById('education-section');
  const entry = document.createElement('div');
  entry.className = "entry-block";
  entry.innerHTML = `
    <input type="text" placeholder="Degree" />
    <input type="text" placeholder="University/College" />
    <input type="text" placeholder="Year of Passing" />
    <button class="remove-btn" type="button">✖</button>
  `;
  entry.querySelector('.remove-btn').onclick = () => entry.remove();
  section.appendChild(entry);
}

function addExperience() {
  const section = document.getElementById('experience-section');
  const entry = document.createElement('div');
  entry.className = "entry-block";
  entry.innerHTML = `
    <textarea placeholder="Experience details..." class="experience-entry"></textarea>
    <button class="remove-btn" type="button">✖</button>
  `;
  entry.querySelector('.remove-btn').onclick = () => entry.remove();
  section.appendChild(entry);
}

function addSkills() {
  const section = document.getElementById('skills-section');
  const entry = document.createElement('div');
  entry.className = "entry-block";
    entry.innerHTML = `
    <input type="text" placeholder="Skills (comma separated)" class="skills-entry" />
    <button class="remove-btn" type="button">✖</button>
  `;
  entry.querySelector('.remove-btn').onclick = () => entry.remove();
  section.appendChild(entry);
}

function addProject() {
  const section = document.getElementById('projects-section');
  const entry = document.createElement('div');
  entry.className = "entry-block";
  entry.innerHTML = `
    <input type="text" placeholder="Project Title" class="project-title" />
    <textarea placeholder="Project Description" class="project-desc"></textarea>
    <button class="remove-btn" type="button">✖</button>
  `;
  entry.querySelector('.remove-btn').onclick = () => entry.remove();
  section.appendChild(entry);
}