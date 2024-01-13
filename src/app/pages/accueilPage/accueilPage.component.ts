import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accueil-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './accueilPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilPageComponent { }
