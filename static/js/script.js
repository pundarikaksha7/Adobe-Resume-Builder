
    function selectTemplate(templateId) {
      const templateOptions = document.querySelectorAll('.template-option');

      templateOptions.forEach((option) => {
        if (option.id === `templateOption${templateId}`) {
          option.classList.add('selected-template');
        } else {
          option.classList.remove('selected-template');
        }
      });

      const templateIdInput = document.getElementById('template_id');
      templateIdInput.value = templateId;
    }


    function addSkill() {
      const skillsContainer = document.getElementById('skillsContainer');
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'skills[]';
      input.required = true;
      skillsContainer.appendChild(input);
    }

    function addEducation() {
      const educationContainer = document.getElementById('educationItemsContainer');
      const educationItem = document.createElement('div');
      const schoolNameInput = document.createElement('input');
      const passingYearInput = document.createElement('input');
      const descriptionTextarea = document.createElement('textarea');

      schoolNameInput.type = 'text';
      schoolNameInput.name = `education[${educationContainer.children.length}][school_name]`;
      schoolNameInput.required = true;

      passingYearInput.type = 'text';
      passingYearInput.name = `education[${educationContainer.children.length}][passing_year]`;
      passingYearInput.required = true;

      descriptionTextarea.name = `education[${educationContainer.children.length}][description]`;
      descriptionTextarea.required = true;

      educationItem.appendChild(document.createTextNode('School/College Name:'));
      educationItem.appendChild(document.createElement('br'));
      educationItem.appendChild(schoolNameInput);
      educationItem.appendChild(document.createElement('br'));
      educationItem.appendChild(document.createTextNode('Graduating Year:'));
      educationItem.appendChild(document.createElement('br'));
      educationItem.appendChild(passingYearInput);
      educationItem.appendChild(document.createElement('br'));
      educationItem.appendChild(document.createTextNode('Education Description:'));
      educationItem.appendChild(document.createElement('br'));
      educationItem.appendChild(descriptionTextarea);

      educationContainer.appendChild(educationItem);
    }

    function addExperience() {
      const experienceContainer = document.getElementById('experienceItemsContainer');
      const experienceItem = document.createElement('div');
      const companyNameInput = document.createElement('input');
      const passingYearInput = document.createElement('input');
      const descriptionTextarea = document.createElement('textarea');

      companyNameInput.type = 'text';
      companyNameInput.name = `experience[${experienceContainer.children.length}][company_name]`;
      companyNameInput.required = true;

      passingYearInput.type = 'text';
      passingYearInput.name = `experience[${experienceContainer.children.length}][passing_year]`;
      passingYearInput.required = true;

      descriptionTextarea.name = `experience[${experienceContainer.children.length}][responsibilities]`;
      descriptionTextarea.required = true;

      experienceItem.appendChild(document.createTextNode('Company Name:'));
      experienceItem.appendChild(document.createElement('br'));
      experienceItem.appendChild(companyNameInput);
      experienceItem.appendChild(document.createElement('br'));
      experienceItem.appendChild(document.createTextNode('Experience Years:'));
      experienceItem.appendChild(document.createElement('br'));
      experienceItem.appendChild(passingYearInput);
      experienceItem.appendChild(document.createElement('br'));
      experienceItem.appendChild(document.createTextNode('Experience Description:'));
      experienceItem.appendChild(document.createElement('br'));
      experienceItem.appendChild(descriptionTextarea);

      experienceContainer.appendChild(experienceItem);
    }

    function addAchievement() {
      const achievementContainer = document.getElementById('achievementItemsContainer');
      const achievementItem = document.createElement('div');
      const fieldInput = document.createElement('input');
      const awardsInput = document.createElement('input');

      fieldInput.type = 'text';
      fieldInput.name = `achievements[${achievementContainer.children.length}][field]`;
      fieldInput.required = true;

      awardsInput.type = 'text';
      awardsInput.name = `achievements[${achievementContainer.children.length}][awards]`;
      awardsInput.required = true;

      achievementItem.appendChild(document.createTextNode('Achievement Field:'));
      achievementItem.appendChild(document.createElement('br'));
      achievementItem.appendChild(fieldInput);
      achievementItem.appendChild(document.createElement('br'));
      achievementItem.appendChild(document.createTextNode('Achievement Awards:'));
      achievementItem.appendChild(document.createElement('br'));
      achievementItem.appendChild(awardsInput);

      achievementContainer.appendChild(achievementItem);
    }
    function validateForm() {
      // Check if a template option is selected
      var templateId = document.getElementById('template_id').value;
      if (templateId === '') {
        alert('Please select a template option');
        event.preventDefault(); 
      }
      
    }
  
    // Attach the form validation to the form's submit event
    document.getElementById('resumeForm').addEventListener('submit', validateForm);
