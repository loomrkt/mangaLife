import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemCartComponent } from './itemCart/itemCart.component';

@Component({
  selector: 'app-panier-page',
  standalone: true,
  imports: [
    CommonModule,ItemCartComponent
  ],
  templateUrl: './panierPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanierPageComponent { }
