import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import {
    CreationStepsTitles,
    CreationStepsDescriptions,
    CreationSteps,
    LinkPreNote,
} from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { TipsLookup } from '@shared/dictionaries/tips-lookup.dictionary';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { ALL_CLASSES } from '@data/classes.data';
import { CharacterCreatorService } from '@features/character-creator/services/character-creator.service';

@Component({
    selector: 'app-class-selection',
    imports: [CardModule, CarouselComponent],
    templateUrl: './class-selection.component.html',
    styleUrl: './class-selection.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassSelectionComponent {
    characterCreatorService = inject(CharacterCreatorService);
    CreationSteps = CreationSteps;
    CreationStepsTitles = CreationStepsTitles;
    CreationStepsDescriptions = CreationStepsDescriptions;
    LinkPreNote = LinkPreNote;
    TipsLookup = TipsLookup;

    carouselItems = this.characterCreatorService.convertClassesToImageCards(ALL_CLASSES);
}
