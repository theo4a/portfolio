import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-projekt-container',
  standalone: true,
  imports: [],
  templateUrl: './projekt-container.component.html',
  styleUrl: './projekt-container.component.css'
})
export class ProjektContainerComponent {

@Input() project?: Project;

}
