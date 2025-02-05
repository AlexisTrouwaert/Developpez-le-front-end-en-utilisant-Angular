import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<any> = of(null);

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
  }

  medalsCount(country : any): void{
    return country.participations.reduce((sum: number, p: any) => sum + p.medalsCount, 0)
  }
}

//Utilise la data pour calculer le total des médails par pays
//sum est un accumulateur (on y ajoute les médails au fur et a mesure)
//0 est la valeur a laquelle on initialise sum