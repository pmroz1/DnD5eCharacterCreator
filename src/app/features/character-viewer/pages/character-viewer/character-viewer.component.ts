import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-character-viewer',
  imports: [StepperModule],
  templateUrl: './character-viewer.component.html',
  styleUrl: './character-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterViewerComponent { }
