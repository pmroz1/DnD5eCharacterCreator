import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { CreationSteps } from '../../dictionaries/creation-steps.dictionary';
import { ButtonModule } from 'primeng/button';
import { ClassSelectionComponent } from '../../components/class-selection/class-selection.component';
import { BackgroundSelectionComponent } from '@features/character-creator/components/background-selection/background-selection.component';

@Component({
    selector: 'app-character-creator',
    imports: [StepperModule, ButtonModule, ClassSelectionComponent, BackgroundSelectionComponent],
    templateUrl: './character-creator.component.html',
    styleUrl: './character-creator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCreatorComponent {
    CreationSteps = CreationSteps;
}
