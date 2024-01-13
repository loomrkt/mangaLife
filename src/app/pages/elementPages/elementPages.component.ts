import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
@Component({
  selector: 'app-element-pages',
  standalone: true,
  imports: [
    CommonModule,CardComponent
  ],
  templateUrl: './elementPages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementPagesComponent {
  @Input({required:true}) category!: string;
  @Input({required:true}) texte!: string;
}
