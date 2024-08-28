import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  intro: string = ` Hi, I'm Varun L, a passionate Front End Developer based in Chennai 
  with a Bachelor of Technology in Information Technology and approximately 3 years 
  of experience. I specialize in creating responsive, user-friendly interfaces with 
  a focus on Angular development.`;

  career: string = `I began my career as a Trainee Software Developer in November 
  2020, where I developed my skills and gained hands-on experience. Over time, my passion and
  dedication led me to grow into a Software Developer, where I 
  contributed to innovative and impactful projects`;

  workContent: string = `
  Did complete UI Revamp of TenderCuts and HappyChops app to match exactly with figma prototypes pixel by pixel. 
  Integrating APIs in front-end, Bug fixing. Helped my fellow colleagues with my knowledge. 
  Also provided technical support.`;

  hobbies: string = `Outside of work, I enjoy trekking through nature, playing cricket, 
  experimenting with new recipes in the kitchen, writing scripts, and watching movies.`;
}
