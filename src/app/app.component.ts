import { Component } from '@angular/core';
import { NavComponent }      from './components/nav/nav.component';
import { HeroComponent }     from './components/hero/hero.component';
import { AboutComponent }    from './components/about/about.component';
import { SkillsComponent }   from './components/skills/skills.component';
import { WorkComponent }     from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent }  from './components/contact/contact.component';
import { ModalComponent }    from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ProjectsComponent,
    ContactComponent,
    ModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
