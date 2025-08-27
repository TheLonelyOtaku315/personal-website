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
    new Project(
      'ChatHaven',
      `Developed ChatHaven, a full-stack group messaging platform with role-based permissions and real-time communication features, using Angular, Node.js, and MongoDB as part of a team project.
Worked in a team.`,
      'https://github.com/yourusername/chathaven',
      new Date('2025-01-01'),
      ['Angular', 'Node.js', 'MongoDB', 'Team Project']
    ),
    new Project(
      'Bluetooth Light Controller',
      `Developed an ESP32-based Bluetooth LED controller that processes user commands to manage LED states and modes via USB serial communication, Bluetooth serial communication and button communication.`,
      'https://github.com/yourusername/bluetooth-light-controller',
      new Date('2024-01-01'),
      ['ESP32', 'Bluetooth', 'C++', 'Embedded']
    ),
    new Project(
      'Data Structures & Algorithms Final Project',
      `Developed a k-nearest neighbor (k-NN) machine learning model to diagnose a dataset of 569 instances. Written in Java.
Worked in a team.`,
      'https://github.com/yourusername/knn-final-project',
      new Date('2024-01-01'),
      ['Java', 'Machine Learning', 'k-NN', 'Team Project']
    ),
    new Project(
      'Electricity and Magnetism Simulation',
      `Built two simulators demonstrating electromagnetism and logic circuit concepts. Written in Java, JavaFX, CSS.
Developed a program to calculate the electric field and electric force at a point within a point charge system.
Created an interactive simulation program for gate circuit outputs, allowing users to drag and drop logic gates and wires to visualize real-time circuit behavior.
Worked in a team.`,
      'https://github.com/yourusername/electricity-magnetism-sim',
      new Date('2023-01-01'),
      ['Java', 'JavaFX', 'CSS', 'Simulation', 'Team Project']
    ),
    new Project(
      'Temperature Interactive Converter',
      `Built interactive temperature converter. Written in Java, JavaFX, CSS.
Final project for course “Program Development in a Graphical Environment”
Worked in a team.`,
      'https://github.com/yourusername/temperature-converter',
      new Date('2022-01-01'),
      ['Java', 'JavaFX', 'CSS', 'Team Project']
    ),
    new Project(
      'RetroPie Gaming Console on Raspberry Pi',
      `Configured a Raspberry Pi with RetroPie to create a retro gaming console, integrating multiple emulators and optimizing performance.
Customized system settings, managed game libraries, and implemented storage solutions for seamless gameplay.
Demonstrated skills in Linux systems, hardware setup, software configuration, and troubleshooting.`,
      'https://github.com/yourusername/retropie-console',
      new Date('2022-01-01'),
      ['Raspberry Pi', 'RetroPie', 'Linux', 'Emulation']
    ),
    new Project(
      'Coming Up',
      `A new project is coming soon. Stay tuned for updates!`,
      '',
      new Date(),
      ['TBA']
    ),
    // --- 10 more random projects ---
    new Project(
      'Weather Dashboard',
      `Created a responsive weather dashboard using Angular and OpenWeatherMap API. Displays current weather, forecasts, and interactive charts.`,
      'https://github.com/yourusername/weather-dashboard',
      new Date('2023-06-15'),
      ['Angular', 'TypeScript', 'API', 'Charts']
    ),
    new Project(
      'Personal Portfolio',
      `Designed and developed a personal portfolio website to showcase projects and skills. Built with React, TypeScript, and Tailwind CSS.`,
      'https://github.com/yourusername/personal-portfolio',
      new Date('2023-03-10'),
      ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio']
    ),
    new Project(
      'Expense Tracker',
      `Built a cross-platform expense tracker app using Flutter and Firebase. Supports authentication, real-time updates, and data visualization.`,
      'https://github.com/yourusername/expense-tracker',
      new Date('2022-11-01'),
      ['Flutter', 'Firebase', 'Mobile', 'Finance']
    ),
    new Project(
      'Markdown Blog Engine',
      `Developed a static blog engine that converts Markdown files to a styled website. Includes search and tagging features.`,
      'https://github.com/yourusername/markdown-blog-engine',
      new Date('2022-08-20'),
      ['Node.js', 'Markdown', 'Static Site', 'Blog']
    ),
    new Project(
      'Image Gallery',
      `Created a dynamic image gallery with lazy loading and infinite scroll. Built with Vue.js and Cloudinary integration.`,
      'https://github.com/yourusername/image-gallery',
      new Date('2023-02-14'),
      ['Vue.js', 'Cloudinary', 'JavaScript', 'Gallery']
    ),
    new Project(
      'Quiz App',
      `Developed a web-based quiz application with timer, scoring, and leaderboard features. Uses Angular and RxJS.`,
      'https://github.com/yourusername/quiz-app',
      new Date('2023-05-01'),
      ['Angular', 'RxJS', 'Web', 'Quiz']
    ),
    new Project(
      'Task Manager',
      `Built a task management tool with drag-and-drop functionality and calendar integration. Written in React and Redux.`,
      'https://github.com/yourusername/task-manager',
      new Date('2022-09-10'),
      ['React', 'Redux', 'Calendar', 'Productivity']
    ),
    new Project(
      'Stock Price Visualizer',
      `Implemented a stock price visualizer using D3.js and Yahoo Finance API. Features interactive charts and historical data analysis.`,
      'https://github.com/yourusername/stock-visualizer',
      new Date('2023-04-05'),
      ['D3.js', 'API', 'Finance', 'Visualization']
    ),
    new Project(
      'Recipe Finder',
      `Created a recipe finder app that fetches recipes from an external API and allows filtering by ingredients and dietary preferences.`,
      'https://github.com/yourusername/recipe-finder',
      new Date('2022-07-22'),
      ['JavaScript', 'API', 'Food', 'Search']
    ),
    new Project(
      'Simple REST API',
      `Developed a simple RESTful API for managing users and posts. Built with Express.js and MongoDB.`,
      'https://github.com/yourusername/simple-rest-api',
      new Date('2022-05-30'),
      ['Express.js', 'MongoDB', 'REST', 'Backend']
    ),
    new Project(
      'Memory Game',
      `Built a browser-based memory card game with animations and score tracking. Written in TypeScript and CSS.`,
      'https://github.com/yourusername/memory-game',
      new Date('2023-01-18'),
      ['TypeScript', 'CSS', 'Game', 'Web']
    ),
  ];

  get visibleProjects() {
    return this.projects.slice(0, this.visibleCount);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10)) {
      this.loadMore();
    }
  }

  loadMore() {
    if (this.visibleCount < this.projects.length) {
      this.visibleCount += 6;
    }
  }
}
