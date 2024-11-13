import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projekt-container',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projekt-container.component.html',
  styleUrl: './projekt-container.component.css'
})
export class ProjektContainerComponent {

@Input() project?: Project;

}
