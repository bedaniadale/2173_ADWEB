import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Dale'
  history = 'In 1993, Holy Angel University (HAU) was granted permission by the Commission on Higher Education (CHED) to offer its first 2-year Associate Program in Computer Technology and which was later awarded government recognition in 1995. This program was offered by the College of Arts and Sciences (CAS), headed by Dean Liwayway Perez and Mr. Carlo Sunga as Chairperson of the Computer Science Department.'
  vision = 'A Center of Excellence in ICT education through relevant curricular programs implemented by highly competent individuals who engage in research and countryside development and supported by the industry and state-of-the-art facilities.'
  mission = 'To offer quality education and produce technically-competent and globally competitive professionals who are self-reliant, morally and spiritually upright, adaptive to current and emerging technologies, and who contribute to community building.'
  goals = 'Our goal is to make sure that our programs are fit - for- purpose through a strong faculty profile, solid partnership with the industry and high impact community development programs.'
  objectives = 'To equip students with ICT knowledge and skills necessary for active participation in the production and utilization of innovative systems and applications that adhere to ethical standards;'

  descriptions = [
    'The BSIT program of Holy Angel University is an eight-semester program which focuses on the studyof utilization of computers and computer software. Graduates are expected to be able to plan,install, customize, operate, manage, administer and maintain information technologyinfrastructure.',
    'The program prepares students for specialization in the areas of networking, webdevelopment or multimedia technology to respond rapidly to the dynamic needs of today’s businessworld through a curriculum that is based on the standards set by the Commission on HigherEducation (CHED) and is benchmarked from the curricula of leading academic institutions,national and international, offering similar IT programs.',
    'The degree program in Information Technology takes as its goal to transform students intotechnically competitive professionals in terms of IT development and innovation with moral andspiritual outlook in serving the community.'
  ]
  currdesc = 0; //will be used for the 2 way data binding 
  
  updateDescription() { 
    this.currdesc++; 
    if(this.currdesc == 3) { 
      this.currdesc = 0;
    }
  }
  
}
 