// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
//=================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',

  salary: '600$ в місяць',
  adress: 'м.Одеса, вул.Марсельська 46/2',
}

var footer = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  adress: 'м.Одеса, вул.Марсельська 46/2',
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test" target="_blank',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Summary",
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: "Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.",
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.'
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {

  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Skills",
    },

    header,

    main: {
      title: 'My skills',
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Heandlbars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VSCODE',
          point: 8,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 7,
          isTop: false
        },
        {
          name: 'NPM',
          point: 8,
          isTop: false
        },
        {
          name: 'ReactJS',
          point: 0,
          isTop: false
        },
        {
          name: 'PHP',
          point: null,
          isTop: false
        },
      ],

      hobbies: [
        {
          name: 'Coding VW group',
          isMain: true,
        },
        {
          name: 'Hunting',
          isMain: false,
        },
        {
          name: 'FIshing',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {

  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Education",
    },

    header,

    main: {
      education: [
        {
          name: 'Одеська школа',
          isEnd: true,
        },
        {
          name: 'ПТУ',
          isEnd: false,
        },
        {
          name: 'ОНМУ',
          isEnd: true,
        },
        {
          name: 'IT BRAINS',
          isEnd: false,
        },
      ],

      certificate: [
        {
          name: 'Атестат школа',
          id: 34568,
        },
        {
          name: 'Диплом спеціаліст',
          id: 44485,
        },
        {
          name: 'Сертифікат HTML+CSS',
          id: 66547,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {

  res.render('work', {

    layout: 'big',

    page: {
      title: "Resume | Work",
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT BRAINS',
            url: null,
            // url: 'https://it-brains.com.ua/'
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          stackAmount: 4,
          awardsAmount: 2,
          projects: [
            {
              name: 'Resume',
              url: 'url.com.ua',
              about: 'Airbnb competitor....sfgdfg....',
              stacks: [{
                name: 'React.js',
              },
              {
                name: 'HTNL / CSS',
              },
              {
                name: 'React.js',
              },
              {
                name: 'Node.js',
              },
              ],
              awards: [
                {
                  name: 'text text text'
                },
                {
                  name: 'Seconttext Seconttext Seconttext'
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
