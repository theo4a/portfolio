import { Component, Input } from '@angular/core';
import { Technologie } from '../models/technologie';

@Component({
  selector: 'app-technologie-container',
  standalone: true,
  imports: [],
  templateUrl: './technologie-container.component.html',
  styleUrl: './technologie-container.component.css'
})
export class TechnologieContainerComponent {

@Input() technologie?: Technologie;

}
