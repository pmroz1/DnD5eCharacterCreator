import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-class-selection',
  imports: [CardModule],
  templateUrl: './class-selection.component.html',
  styleUrl: './class-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassSelectionComponent { }
