import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ClassSelectionComponent } from '../../components/class-selection/class-selection.component';
import { BackgroundSelectionComponent } from '@features/character-creator/components/background-selection/background-selection.component';
import { CreationSteps } from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { DetermineAbilityScoresComponent } from "@features/character-creator/components/determine-ability-scores/determine-ability-scores.component";

@Component({
    selector: 'app-character-creator',
    imports: [StepperModule, ButtonModule, ClassSelectionComponent, BackgroundSelectionComponent, DetermineAbilityScoresComponent],
    templateUrl: './character-creator.component.html',
    styleUrl: './character-creator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCreatorComponent {
    CreationSteps = CreationSteps;
}
