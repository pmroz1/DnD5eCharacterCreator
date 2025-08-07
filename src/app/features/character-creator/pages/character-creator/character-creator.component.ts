import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { ClassSelectionComponent } from '../../components/class-selection/class-selection.component';
import { BackgroundSelectionComponent } from '@features/character-creator/components/background-selection/background-selection.component';
import { CreationSteps } from '@shared/dictionaries/creation-steps.dictionary';
import { DetermineAbilityScoresComponent } from '@features/character-creator/components/determine-ability-scores/determine-ability-scores.component';
import { DetermineAligmentComponent } from '@features/character-creator/components/determine-aligment/determine-aligment.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-character-creator',
    imports: [
        StepperModule,
        ButtonModule,
        ClassSelectionComponent,
        BackgroundSelectionComponent,
        DetermineAbilityScoresComponent,
        DetermineAligmentComponent,
        CommonModule,
    ],
    templateUrl: `character-creator.component.html`,
    styleUrls: [`character-creator.component.scss`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCreatorComponent {
    CreationSteps = CreationSteps;

    currentStep = signal(1);

    steps = [
        { id: 1, label: 'Class', description: 'Choose your character class' },
        { id: 2, label: 'Background', description: 'Select race & background' },
        { id: 3, label: 'Abilities', description: 'Determine ability scores' },
        { id: 4, label: 'Alignment', description: 'Choose alignment' },
        { id: 5, label: 'Details', description: 'Character details' },
        { id: 6, label: 'Overview', description: 'Final review' },
    ];

    goToStep(step: number): void {
        if (step >= 1 && step <= this.steps.length) {
            this.currentStep.set(step);
        }
    }

    nextStep(): void {
        const current = this.currentStep();
        if (current < this.steps.length) {
            this.currentStep.set(current + 1);
        }
    }

    previousStep(): void {
        const current = this.currentStep();
        if (current > 1) {
            this.currentStep.set(current - 1);
        }
    }

    getStepClasses(stepNumber: number): string {
        const current = this.currentStep();
        if (stepNumber < current) {
            return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
        } else if (stepNumber === current) {
            return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white';
        } else {
            return 'bg-white/20 text-white/60';
        }
    }

    getCurrentStepDescription(): string {
        const current = this.currentStep();
        const step = this.steps.find((s) => s.id === current);
        return step ? step.description : '';
    }
}
