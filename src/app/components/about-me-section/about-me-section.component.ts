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
