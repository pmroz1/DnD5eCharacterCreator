import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { CreationSteps } from '../../../character-viewer/dictionaries/creation-steps.dictionary';

@Component({
  selector: 'app-character-creator',
  imports: [StepperModule],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCreatorComponent { 
  CreationSteps= CreationSteps
}
