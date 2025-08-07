import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import {
    BackgroundSteps,
    CreationSteps,
    CreationStepsDescriptions,
} from '@shared/dictionaries/creation-steps.dictionary';
import { CharacterCreatorFacade } from '@features/character-creator/services/character-creator-facade.service';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { ImageAccordionComponent } from '@shared/components/image-accordion/image-accordion.component';
import { ImageAccordionItem } from '@shared/components/image-accordion/models/image-accordion.model';
import { CommonModule } from '@angular/common';
import {
    BACKGROUND_STEPS_LIST,
    COMMON_LANGUAGES,
    PERSONALITY_TRAITS,
    CHARACTER_IDEALS,
} from '@shared/data/character-creation.data';

@Component({
    selector: 'app-background-selection',
    imports: [CarouselComponent, CommonModule],
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
    selectedBackground = signal<ImageAccordionItem | null>(null);

    selectedBackgroundChips = computed(() => {
        const bg = this.selectedBackground();
        return bg?.chips || [];
    });

    backgroundStepsList = BACKGROUND_STEPS_LIST;
    commonLanguages = COMMON_LANGUAGES;
    personalityTraits = PERSONALITY_TRAITS;
    characterIdeals = CHARACTER_IDEALS;

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

    selectBackground(background: ImageAccordionItem): void {
        this.selectedBackground.set(background);
        console.log('Background selected:', background);
    }
}
