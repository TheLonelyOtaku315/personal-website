import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Project {
  constructor(
    public title: string,
    public description: string,
    public url: string,
    public date: Date,
    public technologies: string[]
  ) {}
}

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  hoveredIndex: number | null = null;
  visibleCount = 100;
  projects = [
    // Upcoming project
    new Project(
      'Upcoming: Personal Portfolio Redesign',
      `A new version of my personal website is in development, featuring a modern UI, improved accessibility, and enhanced performance. Stay tuned for updates!`,
      '',
      new Date('2025-12-01'),
      ['Angular', 'TypeScript', 'Accessibility', 'Performance Optimization']
    ),
    new Project(
      'COMP353 - Database Systems Project',
      `Collaborative database design and implementation project for COMP353/COMP5531 Database Systems course. Developed normalized database schemas, implemented efficient SQL queries with joins and subqueries, and managed data integrity using MySQL. Worked in a team of 4 members to create comprehensive DDL/DML scripts and demonstrate database design principles.`,
      '',
      new Date('2025-07-18'),
      [
        'MySQL',
        'SQL',
        'Database Design',
        'DDL',
        'DML',
        'Normalization',
        'Team Collaboration',
        'Git',
      ]
    ),
    new Project(
      'ChatHaven',
      `Built a full-stack group messaging platform with role-based permissions and real-time communication. Developed modular UI components (chat log, channel sidebar, etc.) and integrated the Giphy API, LinkPreview API, Gemini API. Used Git and GitHub for version control and collaboration in an Agile team environment.`,
      'https://github.com/Error-404-Project-W25/Error-404-SOEN341_Project_W25',
      new Date('2025-04-01'),
      [
        'Angular',
        'Node.js',
        'MongoDB',
        'Git',
        'GitHub',
        'Giphy API',
        'LinkPreview API',
        'Gemini API',
      ]
    ),
    new Project(
      'COMP 371 - 3D Graphics Programming Project',
      `Real-time 3D interactive application built in C++ using OpenGL. Features interactive camera controls, dynamic lighting with multiple moving light sources, textured 3D models, shadow mapping, particle effects, and post-processing effects including bloom and normal mapping. Developed in a team of 3 members using advanced graphics programming techniques and custom shader implementations.`,
      '',
      new Date('2025-04-01'),
      [
        'C++',
        'OpenGL',
        'GLFW',
        'GLEW',
        'GLM',
        'Shaders',
        '3D Graphics',
        'Shadow Mapping',
        'CMake',
      ]
    ),
    new Project(
      'ESP32 LED Controller',
      `The ESP32-LED-Controller project lets you wirelessly control LEDs via Bluetooth with features like button inputs, custom commands, and a timer functionality for automation. Programmed using C++ with ESP32-Arduino framework.`,
      'https://github.com/TheLonelyOtaku315/ESP32-LED-Controller',
      new Date('2025-01-05'),
      ['ESP32', 'C++', 'Bluetooth', 'Serial Communication', 'Arduino']
    ),
    new Project(
      'Temperature Converter',
      `Temperature Converter built in Visual Studio, allowing seamless conversion between Celsius, Fahrenheit, and Kelvin with a clean and intuitive GUI! Built using JavaFX with CSS styling for an enhanced user experience.`,
      'https://github.com/TheLonelyOtaku315/TemperatureConverterVS',
      new Date('2025-01-05'),
      ['Java', 'JavaFX', 'CSS', 'Temperature Conversion']
    ),
    new Project(
      'Personal Portfolio Website',
      `Personal portfolio website built with Angular to showcase my projects, skills, and experience. Features responsive design, component-based architecture, and modern web development practices.`,
      'https://github.com/TheLonelyOtaku315/personal-website',
      new Date('2025-01-01'),
      ['Angular', 'TypeScript', 'CSS', 'HTML']
    ),
    new Project(
      'LeetCode Solutions',
      `Collection of LeetCode challenge solutions demonstrating algorithmic problem-solving skills and data structure implementations. Regular practice to improve coding efficiency and algorithm optimization.`,
      'https://github.com/TheLonelyOtaku315/LeetCode',
      new Date('2024-07-16'),
      ['Java', 'Algorithms', 'Data Structures', 'Problem Solving']
    ),
    new Project(
      'k-NN Classifier – Final Project',
      `Developed a k-nearest neighbor machine learning model for medical data classification (569 instances). Collaborated with a team and applied algorithmic optimization strategies.`,
      '',
      new Date('2024-05-01'),
      ['Java', 'Machine Learning', 'Algorithm Optimization']
    ),
    new Project(
      'Electricity & Magnetism Simulation',
      `Simulated electric fields from point charges and interactive logic gate circuits with a drag-and-drop interface and real-time output. Developed the application using Java, JavaFX for UI, and CSS for styling. Used Git and GitHub for version control and collaboration in an Agile team environment.`,
      '',
      new Date('2023-01-01'),
      ['Java', 'JavaFX', 'CSS', 'Git', 'GitHub']
    ),
    new Project(
      'RetroPie Gaming Console on Raspberry Pi',
      `Configured emulators, managed ROM libraries, and optimized system for retro gaming. Gained experience in Linux system setup, troubleshooting, and configuration.`,
      '',
      new Date('2022-11-01'),
      ['Raspberry Pi', 'Linux', 'RetroPie']
    ),
  ];

  get visibleProjects() {
    return this.projects.slice(0, this.visibleCount);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      this.loadMore();
    }
  }

  loadMore() {
    if (this.visibleCount < this.projects.length) {
      this.visibleCount += 6;
    }
  }
}
