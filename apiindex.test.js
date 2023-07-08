const request = require('supertest');
const app = require('./apiindex');

describe('Resume Builder API', () => {
  it('should generate a resume PDF', async () => {
    const requestBody = {
      template_id: '1',
      personal_information: {
        name: 'John',
        last_name: 'Doe',
        email_address: 'john.doe@example.com',
        phone_number: '1234567890',
        linkedin_url: 'https://www.linkedin.com/in/johndoe'
      },
      job_title: 'Software Engineer',
      career_objective: 'Experienced software engineer with a passion for coding.',
      skills: ['JavaScript', 'Python', 'React'],
      education: [
        {
          school_name: 'ABC University',
          passing_year: '2020',
          description: 'Bachelor of Science in Computer Science'
        }
      ],
      experience: [
        {
          company_name: 'XYZ Corporation',
          passing_year: '2022',
          responsibilities: 'Developed web applications using React'
        }
      ],
      achievements: [
        {
          field: 'Hackathons',
          awards: 'First Place in XYZ Hackathon'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/success');
  }, 1000000);

  it('should return 400 for invalid template ID', async () => {
    const requestBody = {
      template_id: '4', // Invalid template ID
      personal_information: {
        name: 'John',
        last_name: 'Doe',
        email_address: 'john.doe@example.com',
        phone_number: '1234567890',
        linkedin_url: 'https://www.linkedin.com/in/johndoe'
      },
      job_title: 'Software Engineer',
      career_objective: 'Experienced software engineer with a passion for coding.',
      skills: ['JavaScript', 'Python', 'React'],
      education: [
        {
          school_name: 'ABC University',
          passing_year: '2020',
          description: 'Bachelor of Science in Computer Science'
        }
      ],
      experience: [
        {
          company_name: 'XYZ Corporation',
          passing_year: '2022',
          responsibilities: 'Developed web applications using React'
        }
      ],
      achievements: [
        {
          field: 'Hackathons',
          awards: 'First Place in XYZ Hackathon'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Invalid template_id');
  });

  it('should generate a resume PDF with template 2', async () => {
    // Test case with different data
    const requestBody = {
      template_id: '2',
      personal_information: {
        name: 'Jane',
        last_name: 'Smith',
        email_address: 'jane.smith@example.com',
        phone_number: '9876543210',
        linkedin_url: 'https://www.linkedin.com/in/janesmith'
      },
      job_title: 'Web Developer',
      career_objective: 'Passionate web developer with experience in frontend technologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      education: [
        {
          school_name: 'XYZ University',
          passing_year: '2021',
          description: 'Bachelor of Science in Web Development'
        }
      ],
      experience: [
        {
          company_name: 'ABC Corporation',
          passing_year: '2023',
          responsibilities: 'Developed responsive web applications'
        }
      ],
      achievements: [
        {
          field: 'Coding Competitions',
          awards: 'First Place in Code Challenge 2022'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/success');
  },1000000);

  it('should generate a resume PDF with template ID 3', async () => {
    // Test case with template ID 3
    const requestBody = {
      template_id: '3',
      personal_information: {
        name: 'Emily',
        last_name: 'Johnson',
        email_address: 'emily.johnson@example.com',
        phone_number: '5555555555',
        linkedin_url: 'https://www.linkedin.com/in/emilyjohnson'
      },
      job_title: 'Graphic Designer',
      career_objective: 'Creative graphic designer with a keen eye for detail.',
      skills: ['Adobe Photoshop', 'Illustrator', 'InDesign'],
      education: [
        {
          school_name: 'Design Institute',
          passing_year: '2022',
          description: 'Diploma in Graphic Design'
        }
      ],
      experience: [
        {
          company_name: 'Graphic Studios',
          passing_year: '2023',
          responsibilities: 'Designed branding materials for clients'
        }
      ],
      achievements: [
        {
          field: 'Design Competitions',
          awards: 'Best Poster Design in Design Challenge 2022'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/success');
  },1000000);
});
