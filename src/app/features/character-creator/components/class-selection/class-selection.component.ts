import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-class-selection',
  imports: [],
  template: `<p>class-selection works!</p>`,
  styleUrl: './class-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassSelectionComponent { }
