const request = require('supertest');
const app=require('./app');

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

  it('should generate a resume PDF with random data (Test 1)', async () => {
    const requestBody = {
      template_id: '2',
      personal_information: {
        name: 'Alex',
        last_name: 'Johnson',
        email_address: 'alex.johnson@example.com',
        phone_number: '9876543210',
        linkedin_url: 'https://www.linkedin.com/in/alexjohnson'
      },
      job_title: 'Frontend Developer',
      career_objective: 'Passionate frontend developer with experience in React and Vue.js.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
      education: [
        {
          school_name: 'University of Technology',
          passing_year: '2021',
          description: 'Bachelor of Science in Web Development'
        }
      ],
      experience: [
        {
          company_name: 'Web Solutions Ltd.',
          passing_year: '2022',
          responsibilities: 'Developed and maintained responsive web applications'
        }
      ],
      achievements: [
        {
          field: 'Coding Competitions',
          awards: 'First Place in Code Challenge 2021'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/success');
  },1000000);

  // Randomized test case 2
  it('should generate a resume PDF with random data (Test 2)', async () => {
    const requestBody = {
      template_id: '3',
      personal_information: {
        name: 'Sarah',
        last_name: 'Miller',
        email_address: 'sarah.miller@example.com',
        phone_number: '5555555555',
        linkedin_url: 'https://www.linkedin.com/in/sarahmiller'
      },
      job_title: 'Marketing Specialist',
      career_objective: 'Experienced marketing specialist with expertise in digital marketing strategies.',
      skills: ['SEO', 'Social Media Marketing', 'Content Creation'],
      education: [
        {
          school_name: 'Marketing Institute',
          passing_year: '2020',
          description: 'Diploma in Marketing'
        }
      ],
      experience: [
        {
          company_name: 'Digital Marketing Agency',
          passing_year: '2021',
          responsibilities: 'Managed social media campaigns and analyzed marketing data'
        }
      ],
      achievements: [
        {
          field: 'Marketing Campaigns',
          awards: 'Best Campaign of the Year 2021'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/success');
  },1000000);

  // Randomized test case 3
  it('should generate a resume PDF with random data (Test 3)', async () => {
    const requestBody = {
      template_id: '1',
      personal_information: {
        name: 'Michael',
        last_name: 'Brown',
        email_address: 'michael.brown@example.com',
        phone_number: '1234567890',
        linkedin_url: 'https://www.linkedin.com/in/michaelbrown'
      },
      job_title: 'Project Manager',
      career_objective: 'Experienced project manager with a proven track record of successful project deliveries.',
      skills: ['Project Management', 'Agile Methodologies', 'Team Leadership'],
      education: [
        {
          school_name: 'Business School',
          passing_year: '2019',
          description: 'Master of Business Administration'
        }
      ],
      experience: [
        {
          company_name: 'Global Enterprises',
          passing_year: '2022',
          responsibilities: 'Managed large-scale projects and coordinated cross-functional teams'
        }
      ],
      achievements: [
        {
          field: 'Project Management',
          awards: 'Project Manager of the Year 2022'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/success');
  },1000000);

  it('should generate a resume PDF with multiple education entries', async () => {
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
        },
        {
          school_name: 'DEF College',
          passing_year: '2018',
          description: 'Associate Degree in Programming'
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
  },1000000);

  // Test case with multiple experience entries
  it('should generate a resume PDF with multiple experience entries', async () => {
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
        },
        {
          company_name: 'PQR Solutions',
          passing_year: '2021',
          responsibilities: 'Implemented backend functionality using Node.js'
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
  },1000000);

  it('should generate a resume PDF with multiple achievement entries', async () => {
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
        },
        {
          field: 'Programming Contests',
          awards: 'Top Coder in Code Challenge 2021'
        }
      ]
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/success');
  },1000000);

  //Test with empty career objective
  it('should respond with 400 if career obj is empty', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        skills: ["C++"],
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
          },
          {
            field: 'Programming Contests',
            awards: 'Top Coder in Code Challenge 2021'
          }
        ]
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);

  //Test case with empty job title
  it('should respond with 400 if skills array is empty', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        career_objective: 'To contribute to innovative projects',
        skills: ["Hello"], // Empty skills array
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
          },
          {
            field: 'Programming Contests',
            awards: 'Top Coder in Code Challenge 2021'
          }
        ]
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);


  // Test case with empty skills
  it('should respond with 400 if skills array is empty', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        career_objective: 'To contribute to innovative projects',
        skills: [], // Empty skills array
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
          },
          {
            field: 'Programming Contests',
            awards: 'Top Coder in Code Challenge 2021'
          }
        ]
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);

  it('should respond with 400 if education array is missing', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        career_objective: 'To contribute to innovative projects',
        skills: ['JavaScript', 'Node.js'],
        // Missing education array
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
          },
          {
            field: 'Programming Contests',
            awards: 'Top Coder in Code Challenge 2021'
          }
        ]
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);

  it('should respond with 400 if any education object is missing required fields', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        career_objective: 'To contribute to innovative projects',
        skills: ['JavaScript', 'Node.js'],
        education: [
          {
            // Missing school_name
            passing_year: '2020',
            description: 'Bachelor of Science'
          },
          {
            school_name: 'University B',
            passing_year: '2022',
            description: '' // Empty description
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
          },
          {
            field: 'Programming Contests',
            awards: 'Top Coder in Code Challenge 2021'
          }
        ]
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);

  it('should respond with 400 if experience array is missing', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        career_objective: 'To contribute to innovative projects',
        skills: ['JavaScript', 'Node.js'],
        education: [
          {
            school_name: 'ABC University',
            passing_year: '2020',
            description: 'Bachelor of Science in Computer Science'
          }
        ],
        // Missing experience array
        achievements: [
          {
            field: 'Hackathons',
            awards: 'First Place in XYZ Hackathon'
          },
          {
            field: 'Programming Contests',
            awards: 'Top Coder in Code Challenge 2021'
          }
        ]
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);

  it('should respond with 400 if any experience object is missing required fields', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        career_objective: 'To contribute to innovative projects',
        skills: ['JavaScript', 'Node.js'],
        education: [
          {
            school_name: 'ABC University',
            passing_year: '2020',
            description: 'Bachelor of Science in Computer Science'
          }
        ],
        experience: [
          {
            // Missing company_name
            passing_year: '2020',
            responsibilities: ['Developed web applications']
          },
          {
            company_name: 'Company B',
            passing_year: '2022',
            responsibilities: [] // Empty responsibilities array
          }
        ],
        achievements: [
          {
            field: 'Hackathons',
            awards: 'First Place in XYZ Hackathon'
          },
          {
            field: 'Programming Contests',
            awards: 'Top Coder in Code Challenge 2021'
          }
        ]
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);

  it('should respond with 400 if achievements array is missing', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        career_objective: 'To contribute to innovative projects',
        skills: ['JavaScript', 'Node.js'],
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
        // Missing achievements array
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe("Bad Request");
  },100000);

  it('should respond with 400 if any achievement object is missing required fields', async () => {
    const response = await request(app)
      .post('/resume')
      .send({
        template_id: '1',
        personal_information: { name: 'John', last_name: 'Doe' },
        job_title: 'Software Engineer',
        career_objective: 'To contribute to innovative projects',
        skills: ['JavaScript', 'Node.js'],
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
            // Missing field
            awards: 'Achievement 1'
          },
          {
            field: 'Field B',
            // Missing awards
          }
        ]
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Bad Request");
  },100000);
  it('should return 404 for invalid template ID', async () => {
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

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe('Template not found');
  });

  it('should return 400 Bad Request if personal_information is missing', async () => {
    const requestBody = {
      template_id: '1',
      // personal_information field is missing
      job_title: 'Software Engineer',
      career_objective: 'Seeking a challenging role in software development',
      skills: ['JavaScript', 'Node.js'],
      education: [
        {
          school_name: 'ABC University',
          passing_year: '2020',
          description: 'Bachelor of Science in Computer Science',
        },
      ],
      experience: [
        {
          company_name: 'XYZ Company',
          passing_year: '2021',
          responsibilities: 'Developed web applications',
        },
      ],
      achievements: [
        {
          field: 'Programming',
          awards: 'Best Coder of the Year',
        },
      ],
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Bad Request' });
  });

  it('should return 400 Bad Request if any required field is missing', async () => {
    const requestBody = {
      template_id: '1',
      personal_information: {
        // Missing required fields: name, last_name, email_address, phone_number, linkedin_url
      },
      job_title: 'Software Engineer',
      career_objective: 'Seeking a challenging role in software development',
      skills: ['JavaScript', 'Node.js'],
      education: [
        {
          school_name: 'ABC University',
          passing_year: '2020',
          description: 'Bachelor of Science in Computer Science',
        },
      ],
      experience: [
        {
          company_name: 'XYZ Company',
          passing_year: '2021',
          responsibilities: 'Developed web applications',
        },
      ],
      achievements: [
        {
          field: 'Programming',
          awards: 'Best Coder of the Year',
        },
      ],
    };

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Bad Request' });
  });

  it('should return error for invalid client details', async () => {
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

    // Set invalid PDF_SERVICES_CLIENT_ID and PDF_SERVICES_CLIENT_SECRET values
    process.env.PDF_SERVICES_CLIENT_ID = 'invalid_client_id';
    process.env.PDF_SERVICES_CLIENT_SECRET = 'invalid_client_secret';

    const response = await request(app)
      .post('/resume')
      .send(requestBody);

    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe("Unauthorised");
  });


});



