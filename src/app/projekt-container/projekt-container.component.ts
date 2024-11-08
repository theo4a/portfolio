import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projekt-container',
  standalone: true,
  imports: [],
  templateUrl: './projekt-container.component.html',
  styleUrl: './projekt-container.component.css'
})
export class ProjektContainerComponent {
@Input() title: string = "";
@Input() image_url: string = "";
@Input() projekt_url: string = "";
}
