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

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
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
  ];
}
