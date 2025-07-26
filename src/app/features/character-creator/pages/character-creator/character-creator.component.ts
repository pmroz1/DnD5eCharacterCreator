import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { CreationSteps } from '../../dictionaries/creation-steps.dictionary';
import { ButtonModule } from 'primeng/button';
import { ClassSelectionComponent } from "../../components/class-selection/class-selection.component";
import { RaceSelectionComponent } from "@features/character-creator/components/race-selection/race-selection.component";

@Component({
  selector: 'app-character-creator',
  imports: [StepperModule, ButtonModule, ClassSelectionComponent, RaceSelectionComponent],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCreatorComponent {
  CreationSteps = CreationSteps;
}
