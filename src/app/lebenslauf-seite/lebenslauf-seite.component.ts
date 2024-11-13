import { Component } from '@angular/core';
import { LebenslaufKategorieContainerComponent } from "../lebenslauf-kategorie-container/lebenslauf-kategorie-container.component";
import { Ereignis } from '../models/ereignis';
import { NgFor } from '@angular/common';
import { Container } from '../models/container';

@Component({
    selector: 'app-lebenslauf-seite',
    standalone: true,
    templateUrl: './lebenslauf-seite.component.html',
    styleUrl: './lebenslauf-seite.component.css',
    imports: [LebenslaufKategorieContainerComponent, NgFor]
})
export class LebenslaufSeiteComponent {

    containers: Container[] = [
      new Container(
        "Über mich",
        [
          new Ereignis(
            "Name",
            "Theo Mahl",
            []
          ),
          new Ereignis(
            "Adresse",
            "Markusstr. 50, 47055 Duisburg",
            []
          ),
          new Ereignis(
            "Telefon",
            "+49 15560 292336",
            []
          ),
          new Ereignis(
            "Email",
            "theomahl2002@gmail.com",
            []
          ),
       ]
     ),
        new Container(
            "Berufserfahrung",
            [
              new Ereignis(
                "Seit 2023",
                "Programmeriung eines Web / Android / IOS Programms",
                [
                  "API nutzung einer Lebensmittel Datenbank mit über 1.000.000 Datensätzen",
                  "Fortgeschrittene Such/Tracking-Funktionen",
                  "login Funktionalität",
                  "Kostenlose & Werbefreie Nutzung möglich",
                ]
              ),
              new Ereignis(
                "Seit 2021",
                "Gewerbliche Tätigkeit, Erstellung von Programm-Erweiterungen für 3D Software",
                [
                  "Erweiterungen des Kostenlosen Open-Source Programm Blender",
                  "Nutzung der Python API von Blender zum erstellen von Programmerweiterungen",
                  "2000+ Nutzer",
                  "400+ Zahlende Kunden"
                ]
              ),
              new Ereignis(
                "Seit 2020",
                "Erstellen von 3D Architektur Visualisierungen",
                [
                  "Arbeitsschritte strukturieren und planen",
                  "Besprechung und Änderungswünsche des Kunden"
                ]
               )
           ]
        ),
        new Container(
            "Bildung",
            [
                new Ereignis(
                  "Seit 2022",
                  "Universität Düsseldorf, Bsc Informatik",
                  [
                    "Erwarteter Abschluss im Januar 2026",
                  ]
                ),
                new Ereignis(
                  "2021 - 2022",
                  "Hochschule-Ruhr-West Bottrop, Bsc Wirtschaftsingenieurwesen für Energiesysteme",
                  [
                    "Abgeschlossene Module: Mathe 1, Projekt-Management, Elektrotechnik, Energiesysteme, VWL"
                  ]
                ),
                new Ereignis(
                  "2013 - 2021",
                  "Mercator Gymnasium, Abitur",
                  [
                    "Abschlussnote 2,9",
                    "Mitglied der Forscher A.G.",
                    "LKs: Sport, Deutsch"
                  ]
                ),
              ]
        ),
        new Container(
            "Kompetenzen",
            [
                new Ereignis(
                  "Sprachen",
                  "",
                  [
                    "Deutsch",
                    "Englisch",
                  ]
                ),
                new Ereignis(
                  "Programmiersprachen",
                  "",
                  [
                    "Java",
                    "Python",
                    "C",
                    "Javascript"
                  ]
                ),
                new Ereignis(
                  "Frameworks",
                  "",
                  [
                    "Spring-Boot",
                    "Angular",
                    "React",
                    "Flutter"
                  ]
                ),
                new Ereignis(
                  "Programme",
                  "",
                  [
                    "Docker",
                    "Kubernetes",
                    "MS Office",
                    "Adobe CC",
                    "Blender",
                  ]
                ),
                new Ereignis(
                  "Sonstiges",
                  "",
                  [
                    "SQL",
                    "Json",
                    "Http Protokol",
                    "AWS",
                    "Firebase",
                    "Git"
                  ]
                ),
                new Ereignis(
                  "Freizeit",
                  "",
                  [
                    "Kanu-Rennsport",
                    "3D-modelierung",
                    "Programmieren"
                  ]
                ),
              ]
        ),
    ]
}
