import { Component, Input } from '@angular/core';
import { Ereignis } from '../models/ereignis';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lebenslauf-kategorie-container',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lebenslauf-kategorie-container.component.html',
  styleUrl: './lebenslauf-kategorie-container.component.css'
})
export class LebenslaufKategorieContainerComponent {
@Input() kategorie: string = "";
@Input() ereignisse: Ereignis[] = [
];
 
}
