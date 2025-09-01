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
      title: 'Education Journey',
      date: 'Jun 2020 - Jun 2023',
      description:
        'I graduated with first class honors from the University of Bournemouth, specializing in Computing Technology.',
      tech: 'Java, C#, Python',
    },
    {
      title: 'Professional Experience',
      date: 'Aug 2023 - Present',
      description:
        'Currently working as a Software Developer, focusing on web applications and system optimization.',
      tech: 'Angular, TypeScript, SQL',
    },
    {
      title: 'Technical Skills',
      date: 'Ongoing Learning',
      description:
        'Passionate about full-stack development, database management, and creating user-friendly interfaces.',
      tech: 'React, Node.js, AWS',
    },
    {
      title: 'Personal Projects',
      date: 'Side Projects',
      description:
        'Developed various personal projects including web applications, mobile apps, and automation tools.',
      tech: 'Flutter, Firebase, Docker',
    },
  ];
  skillsContent = [
    {
      title: 'Programming Languages',
      description: 'Proficient in JavaScript, TypeScript, and Python.',
    },
    {
      title: 'Web Development',
      description: 'Experienced in building responsive and accessible web applications using Angular and React.',
    },
    {
      title: 'Database Management',
      description: 'Skilled in working with SQL and NoSQL databases, including MySQL and MongoDB.',
    },
    {
      title: 'Cloud Computing',
      description: 'Familiar with cloud services like AWS and Azure for deploying applications.',
    },
  ];
}
