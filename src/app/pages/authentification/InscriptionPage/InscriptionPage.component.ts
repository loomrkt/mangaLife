import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-inscription-page',
  standalone: true,
  imports: [
    CommonModule,RouterLink
  ],
  templateUrl: './InscriptionPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InscriptionPageComponent { }
