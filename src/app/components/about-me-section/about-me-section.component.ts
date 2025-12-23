import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AboutMeSectionComponent {
  timeLineContent = [
    {
      title: 'High School Education',
      date: '2015 - 2020',
      description:
        'Graduated with High School Diploma from Calixa-Lavallee High School in Montreal, Canada.',
      tech: 'Foundation Studies',
    },
    {
      title: 'College Education - DEC',
      date: '2020 - 2023',
      description:
        'Completed DEC in Computer Science and Mathematics at Vanier College, focusing on programming fundamentals and data structures.',
      tech: 'Java, Data Structures, Object-Oriented Programming',
    },
    {
      title: 'University Education - Bachelor',
      date: '2023 - 2027',
      description:
        'Currently pursuing Bachelor of Engineering in Computer Engineering at Concordia University. Member of the Co-operative Education Program (C.Edge).',
      tech: 'C++, Algorithms, Software Engineering, Computer Graphics',
    },
    {
      title: 'Professional Experience',
      date: '2017 - 2022',
      description:
        'Gained professional experience through private tutoring (2017-2019) and customer service at Best Buy (2022), developing communication and problem-solving skills.',
      tech: 'Customer Service, Team Leadership, Problem Solving',
    },
    {
      title: 'Recent Projects',
      date: '2022 - Present',
      description:
        'Developed multiple full-stack applications including ChatHaven (Angular/Node.js), Bluetooth LED Controller (ESP32/C++), and various simulation projects.',
      tech: 'Angular, Node.js, MongoDB, ESP32, C++, JavaFX',
    },
  ];

  skillSections = [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'Java',
          icon: 'devicon-java-plain',
          hoverIcon: 'devicon-java-plain colored',
          currentIcon: 'devicon-java-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          showSvg: false,
        },
        {
          name: 'Python',
          icon: 'devicon-python-plain',
          hoverIcon: 'devicon-python-plain colored',
          currentIcon: 'devicon-python-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          showSvg: false,
        },
        {
          name: 'C++',
          icon: 'devicon-cplusplus-plain',
          hoverIcon: 'devicon-cplusplus-plain colored',
          currentIcon: 'devicon-cplusplus-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
          showSvg: false,
        },
        {
          name: 'C',
          icon: 'devicon-c-plain',
          hoverIcon: 'devicon-c-plain colored',
          currentIcon: 'devicon-c-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
          showSvg: false,
        },
        {
          name: 'TypeScript',
          icon: 'devicon-typescript-plain',
          hoverIcon: 'devicon-typescript-plain colored',
          currentIcon: 'devicon-typescript-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          showSvg: false,
        },
        {
          name: 'JavaScript',
          icon: 'devicon-javascript-plain',
          hoverIcon: 'devicon-javascript-plain colored',
          currentIcon: 'devicon-javascript-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Frontend Technologies',
      skills: [
        {
          name: 'Angular',
          icon: 'devicon-angular-plain',
          hoverIcon: 'devicon-angular-plain colored',
          currentIcon: 'devicon-angular-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
          showSvg: false,
        },
        {
          name: 'HTML5',
          icon: 'devicon-html5-plain',
          hoverIcon: 'devicon-html5-plain colored',
          currentIcon: 'devicon-html5-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
          showSvg: false,
        },
        {
          name: 'CSS3',
          icon: 'devicon-css3-plain',
          hoverIcon: 'devicon-css3-plain colored',
          currentIcon: 'devicon-css3-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Databases',
      skills: [
        {
          name: 'MongoDB',
          icon: 'devicon-mongodb-plain',
          hoverIcon: 'devicon-mongodb-plain colored',
          currentIcon: 'devicon-mongodb-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
          showSvg: false,
        },
        {
          name: 'MySQL',
          icon: 'devicon-mysql-plain',
          hoverIcon: 'devicon-mysql-plain colored',
          currentIcon: 'devicon-mysql-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        {
          name: 'Git',
          icon: 'devicon-git-plain',
          hoverIcon: 'devicon-git-plain colored',
          currentIcon: 'devicon-git-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          showSvg: false,
        },
        {
          name: 'GitHub',
          icon: 'devicon-github-original',
          hoverIcon: 'devicon-github-original',
          currentIcon: 'devicon-github-original',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
          showSvg: false,
        },
        {
          name: 'Jest',
          icon: 'devicon-jest-plain',
          hoverIcon: 'devicon-jest-plain colored',
          currentIcon: 'devicon-jest-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
          showSvg: false,
        },
        {
          name: 'VS Code',
          icon: 'devicon-vscode-plain',
          hoverIcon: 'devicon-vscode-plain colored',
          currentIcon: 'devicon-vscode-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
          showSvg: false,
        },
        {
          name: 'Node.js',
          icon: 'devicon-nodejs-plain',
          hoverIcon: 'devicon-nodejs-plain colored',
          currentIcon: 'devicon-nodejs-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Hardware & Embedded',
      skills: [
        {
          name: 'ESP32',
          icon: 'devicon-arduino-plain',
          hoverIcon: 'devicon-arduino-plain colored',
          currentIcon: 'devicon-arduino-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
          showSvg: false,
        },
        {
          name: 'Arduino',
          icon: 'devicon-arduino-plain',
          hoverIcon: 'devicon-arduino-plain colored',
          currentIcon: 'devicon-arduino-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
          showSvg: false,
        },
        {
          name: 'Raspberry Pi',
          icon: 'devicon-raspberrypi-line',
          hoverIcon: 'devicon-raspberrypi-line colored',
          currentIcon: 'devicon-raspberrypi-line',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg',
          showSvg: false,
        },
      ],
    },
  ];

  onSkillHover(skill: any, isHovered: boolean) {
    skill.currentIcon = isHovered ? skill.hoverIcon : skill.icon;
    if (skill.hoverSvgUrl) {
      skill.showSvg = isHovered;
    }
  }

  skillsContent = [
    {
      title: 'Programming Languages',
      description:
        'Proficient in Java, C++, JavaScript, TypeScript, Python, and CSS/HTML for web development.',
    },
    {
      title: 'Full-Stack Development',
      description:
        'Experienced in building complete web applications using Angular, Node.js, MongoDB, and integrating various APIs (Gemini, Giphy, LinkPreview).',
    },
    {
      title: 'Database & Systems',
      description:
        'Skilled in MongoDB database management, Linux system setup, and working with embedded systems like ESP32 and Raspberry Pi.',
    },
    {
      title: 'Development Tools & Methodologies',
      description:
        'Proficient with Git/GitHub, Visual Studio Code, Agile methodology, and experienced in collaborative team environments.',
    },
    {
      title: 'Specialized Skills',
      description:
        'Experience with JavaFX development, machine learning (k-NN classifier), hardware programming, serial communication, and Microsoft Office Suite.',
    },
  ];
}
