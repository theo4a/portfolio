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
            "Berufserfahrung",
            [
              new Ereignis(
                "Seit 2023",
                "Programmeriung einer Web / Android / IOS Application",
                [
                  "API nutzung einer Lebensmittel Datenbank mit über 1.000.000 Datensätzen",
                  "Fortgeschrittene Such/Tracking-Funktionen",
                  "login Funktionalität",
                  "Kostenlose & Werbefreie Nutzung möglich",
                  "Homepage: https://imfit---homepage.web.app",
                  "Webversion: https://imfit-aa5d1.web.app",
                ]
              ),
              new Ereignis(
                "Seit 2021",
                "Gewerbliche Tätigkeit, Verkauf von Programm-Erweiterungen für 3D Software",
                [
                  "Erweiterungen des Kostenlosen Open-Source Programm Blender",
                  "Shop: https://blendermarket.com/creators/contrastrender",
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
                    "Erwarteter Abschluss im Juli 2025",
                  ]
                ),
                new Ereignis(
                  "2021 - 2022",
                  "Hochschule-Ruhr-West Bottrop, Bsc Wirtschaftsingenieurwesen für Energiesysteme",
                  [
                    "Belegte Module: Mathe 1, Projekt-Management, Elektrotechnik, Energiesysteme, VWL"
                  ]
                ),
                new Ereignis(
                  "2013 - 2021",
                  "Mercator Gymnasium, Abitur",
                  [
                    "Abschlussnote 2,9",
                    "Mitglied der Forscher A.G."
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
                    "Muttersprache: Deutsch",
                    "Fließend: Englisch",
                    "Grundlagen: Italienisch"
                  ]
                ),
                new Ereignis(
                  "Technologien",
                  "",
                  [
                    "Programmiersprachen: Java, C, Python",
                    "Container: Docker, Kubernetes",
                    "Sonstiges: Http, AWS, Git",
                    "Programmer: MS Office, Adobe CC, Blender"
                  ]
                ),
                new Ereignis(
                  "Freizeit",
                  "",
                  [
                    "Kanu-Rennsport",
                  ]
                ),
              ]
        ),
    ]
}
