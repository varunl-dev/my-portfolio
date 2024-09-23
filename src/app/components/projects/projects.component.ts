import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectDetails: {
    title: string;
    description: string;
    features: string;
    hosting: string;
    technologiesUsed: string;
    projectURL: string;
  }[] = [
    {
      title: `Personal Portfolio website`,
      description: `Designed and developed a personal portfolio website as a personal project.`,
      features: `Implemented a responsive UI.`,
      hosting: `Successfully hosted the website on GitHub Pages.`,
      technologiesUsed: `Angular, JavaScript/TypeScript, HTML, CSS/SCSS.`,
      projectURL: `https://varunl-portfolio.vercel.app/about-me`,
    },
    {
      title: `Friendship Portfolio website`,
      description: `Designed and developed a friendship portfolio website as a personal project.`,
      features: `Implemented a responsive UI.`,
      hosting: `Successfully hosted the website on GitHub Pages.`,
      technologiesUsed: `Angular, JavaScript/TypeScript, HTML, CSS/SCSS.`,
      projectURL: `https://cluster-crew-website.vercel.app/`,
    },
  ];
}
