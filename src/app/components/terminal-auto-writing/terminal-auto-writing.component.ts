import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../service/user.service.service';

@Component({
  selector: 'app-terminal-auto-writing',
  standalone: true,
  templateUrl: './terminal-auto-writing.component.html',
  styleUrls: ['./terminal-auto-writing.component.css'],
})
export class TerminalAutoWritingComponent implements OnInit {
  text: string =
    'I am Tonny Zhao, a Computer Engineering student at Concordia University and a member of the Co-operative Education Program (C.Edge).\n I have a strong foundation in full-stack development, with hands-on experience in Angular, Node.js, MongoDB, and C++.\n I am passionate about building scalable web applications and have contributed to projects like ChatHaven, a real-time group messaging platform.\n Fluent in English, French, and Chinese, I thrive in collaborative, agile environments and am always eager to learn and take on new challenges.\n';
  displayText: string = '';
  currentIndex: number = 0;

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.text.length) {
      const char = this.text.charAt(this.currentIndex);
      this.displayText += char;
      this.currentIndex++;
      if (char === '\n') {
        setTimeout(() => this.typeWriter(), 1000);
      } else {
        setTimeout(() => this.typeWriter(), 20);
      }
    } else {
      this.userService.setAnimationFinished(true);
    }
  }
}
