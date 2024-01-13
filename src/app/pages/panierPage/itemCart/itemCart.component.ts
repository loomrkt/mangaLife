import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-item-cart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './itemCart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCartComponent { }
