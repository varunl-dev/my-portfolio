import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  workExperiences: {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    technologies: string;
    projects: {
      projectName: string;
      projectDuration: string;
      projectDescription: string;
    }[];
  }[] = [
    {
      companyName: 'Gfm Retail Pvt Ltd',
      position: 'Software Engineer',
      startDate: 'Nov, 2020',
      endDate: 'Jul, 2023',
      technologies: 'Angular, Ionic, JavaScript/TypeScript, HTML, CSS/SCSS',
      projects: [
        {
          projectName: 'Store Operations Dashboard',
          projectDuration: 'Nov, 2020 - Oct, 2022',
          projectDescription: `Dashboard for store managers to do operations like delivery batching, 
          trip route planning, etc.`,
        },
        {
          projectName: 'TenderCuts App & Website',
          projectDuration: 'Nov, 2020 - Oct, 2022',
          projectDescription: `TenderCuts is a popular meat delivery app in Chennai, Hyderabad & Bengaluru, 
          offering a wide range of meat choices and convenient delivery services.`,
        },
        {
          projectName: 'HappyChops App & Website',
          projectDuration: 'Oct, 2022 - Jul, 2023',
          projectDescription: `HappyChops is a new meat delivery app in Chennai, 
          listing the retail meat shops near you with convenient delivery services, 
          all accessible through a user-friendly interface.`,
        },
      ],
    },
    {
      companyName: 'Deforay Technologies',
      position: 'Software Engineer',
      startDate: 'Aug, 2023',
      endDate: 'Sep, 2023',
      technologies: 'Ionic, JavaScript/TypeScript, HTML, CSS/SCSS',
      projects: [
        {
          projectName: 'GST Manager App',
          projectDuration: 'Aug, 2023 - Sep, 2023',
          projectDescription: `GST Manager App is the app where customers can upload their GST bill and invoice. 
          Then the auditor will verify and upload it to the GST portal. 
          Once the bills and invoices are approved, the auditor will upload the challan, 
          and customers can download their challan.`,
        },
      ],
    },
  ];

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/file/Varun_Resume.pdf'; 
    link.download = 'Varun_Resume.pdf'; 
    link.click();
  }
}
