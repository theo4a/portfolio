import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologie-container',
  standalone: true,
  imports: [],
  templateUrl: './technologie-container.component.html',
  styleUrl: './technologie-container.component.css'
})
export class TechnologieContainerComponent {
@Input() text: string = "";
@Input() image_url: string = "";

hidden: boolean = true;

toggleHidden () {
  this.hidden = !this.hidden;
}

}
