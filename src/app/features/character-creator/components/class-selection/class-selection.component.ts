import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
    CreationStepsDescriptions,
    CreationSteps,
    LinkPreNote,
} from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { TipsLookup } from '@shared/dictionaries/tips-lookup.dictionary';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { CharacterCreatorFacade } from '@features/character-creator/services/character-creator-facade.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-class-selection',
    imports: [CarouselComponent, CommonModule],
    templateUrl: `class-selection.component.html`,
    styleUrls: [`class-selection.component.scss`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassSelectionComponent {
    CharacterCreatorFacade = inject(CharacterCreatorFacade);
    CreationSteps = CreationSteps;
    CreationStepsDescriptions = CreationStepsDescriptions;
    LinkPreNote = LinkPreNote;
    TipsLookup = TipsLookup;

    carouselItems = this.CharacterCreatorFacade.getClassCarouselItems();
    selectedClass = signal<any>(null);

    // Event handlers
    onClassSelected(classItem: any): void {
        console.log('Class selected:', classItem);
        this.selectedClass.set(classItem);
    }

    onClassConfirmed(classItem: any): void {
        console.log('Class confirmed:', classItem);
        this.selectedClass.set(classItem);
    }

    proceedToNextStep(): void {
        console.log('Proceeding to next step with class:', this.selectedClass());
        // Here you would typically navigate to the next step or emit an event
    }
}
