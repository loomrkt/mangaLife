import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout-empty',
  standalone: true,
  imports: [
    CommonModule,RouterOutlet
  ],
  templateUrl: './layout-empty.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutEmptyComponent { }
