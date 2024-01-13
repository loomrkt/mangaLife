import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [
    CommonModule,RouterLink
  ],
  templateUrl: './connexionPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnexionPageComponent { }
