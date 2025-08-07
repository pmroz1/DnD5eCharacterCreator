import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import {
    BackgroundSteps,
    CreationSteps,
    CreationStepsDescriptions,
} from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { CharacterCreatorFacade } from '@features/character-creator/services/character-creator-facade.service';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { ImageAccordionComponent } from '@shared/components/image-accordion/image-accordion.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-background-selection',
    imports: [CarouselComponent, ImageAccordionComponent, CommonModule],
    templateUrl: './background-selection.component.html',
    styleUrls: ['./background-selection.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundSelectionComponent {
    private readonly characterCreatorFacade = inject(CharacterCreatorFacade);
    CreationSteps = CreationSteps;
    CreationStepsDescriptions = CreationStepsDescriptions;
    BackgroundSteps = BackgroundSteps;

    racesCarouselItems = this.characterCreatorFacade.getRaceCarouselItems();
    backgroundAccordionItems = this.characterCreatorFacade.getBackgroundAccordionItems();

    activeStep = signal(0);
    selectedLanguages = signal<string[]>([]);
    selectedTrait = signal<number | null>(null);
    selectedIdeal = signal<number | null>(null);

    backgroundStepsList = [
        { id: 0, name: 'Race', icon: 'pi-star-fill' },
        { id: 1, name: 'Background', icon: 'pi-briefcase' },
        { id: 2, name: 'Languages', icon: 'pi-comments' },
        { id: 3, name: 'History', icon: 'pi-book' },
    ];

    commonLanguages = [
        { name: 'Common', description: 'The most widely spoken language' },
        { name: 'Elvish', description: 'Language of the elves' },
        { name: 'Dwarvish', description: 'Language of the dwarves' },
        { name: 'Halfling', description: 'Language of the halflings' },
        { name: 'Draconic', description: 'Ancient language of dragons' },
        { name: 'Orcish', description: 'Language of orcs and related creatures' },
        { name: 'Giant', description: 'Language of giants' },
        { name: 'Gnomish', description: 'Language of the gnomes' },
        { name: 'Goblin', description: 'Language of goblins and related creatures' },
    ];

    personalityTraits = [
        { id: 1, description: 'I judge people by their actions, not their words.' },
        { id: 2, description: "If someone is in trouble, I'm always ready to lend help." },
        {
            id: 3,
            description:
                'When I set my mind to something, I follow through no matter what gets in my way.',
        },
        {
            id: 4,
            description:
                'I have a strong sense of fair play and always try to find the most equitable solution.',
        },
        {
            id: 5,
            description:
                "I'm confident in my own abilities and do what I can to instill confidence in others.",
        },
        { id: 6, description: 'Thinking is for other people. I prefer action.' },
    ];

    characterIdeals = [
        {
            id: 1,
            name: 'Respect',
            description: 'People deserve to be treated with dignity and respect.',
        },
        {
            id: 2,
            name: 'Fairness',
            description: 'No one should get preferential treatment before the law.',
        },
        {
            id: 3,
            name: 'Freedom',
            description: 'Tyrants must not be allowed to oppress the people.',
        },
        { id: 4, name: 'Might', description: 'If I become strong, I can take what I want.' },
        {
            id: 5,
            name: 'Sincerity',
            description: "There's no good in pretending to be something I'm not.",
        },
        {
            id: 6,
            name: 'Destiny',
            description: 'Nothing and no one can steer me away from my higher calling.',
        },
    ];

    setActiveStep(step: number): void {
        if (step >= 0 && step < this.backgroundStepsList.length) {
            this.activeStep.set(step);
        }
    }

    nextStep(): void {
        const current = this.activeStep();
        if (current < this.backgroundStepsList.length - 1) {
            this.activeStep.set(current + 1);
        }
    }

    previousStep(): void {
        const current = this.activeStep();
        if (current > 0) {
            this.activeStep.set(current - 1);
        }
    }

    getStepClasses(stepIndex: number): string {
        const current = this.activeStep();
        if (stepIndex < current) {
            return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white cursor-pointer hover:from-green-300 hover:to-emerald-400';
        } else if (stepIndex === current) {
            return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white cursor-pointer';
        } else {
            return 'bg-white/20 text-white/60 cursor-pointer hover:bg-white/30';
        }
    }

    toggleLanguage(language: string): void {
        const current = this.selectedLanguages();
        if (current.includes(language)) {
            this.selectedLanguages.set(current.filter((l) => l !== language));
        } else {
            this.selectedLanguages.set([...current, language]);
        }
    }

    isLanguageSelected(language: string): boolean {
        return this.selectedLanguages().includes(language);
    }

    selectTrait(traitId: number): void {
        this.selectedTrait.set(traitId);
    }

    selectIdeal(idealId: number): void {
        this.selectedIdeal.set(idealId);
    }

    completeBackgroundSelection(): void {
        console.log('Background selection completed:', {
            activeStep: this.activeStep(),
            languages: this.selectedLanguages(),
            trait: this.selectedTrait(),
            ideal: this.selectedIdeal(),
        });
    }

    onRaceSelected(race: any): void {
        console.log('Race selected:', race);
    }

    onRaceConfirmed(race: any): void {
        console.log('Race confirmed:', race);
        this.nextStep();
    }
}
