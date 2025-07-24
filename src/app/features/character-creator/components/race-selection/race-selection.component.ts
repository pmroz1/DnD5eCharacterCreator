import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    CreationSteps,
    CreationStepsDescriptions,
    CreationStepsTitles,
    LinkPreNote,
} from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { CharacterCreatorService } from '@features/character-creator/services/character-creator.service';
import { TipsLookup } from '@shared/dictionaries/tips-lookup.dictionary';

@Component({
    selector: 'app-race-selection',
    imports: [],
    template: `<p>race-selection works!</p>`,
    styleUrl: './race-selection.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaceSelectionComponent {
    characterCreatorService = inject(CharacterCreatorService);
    CreationSteps = CreationSteps;
    CreationStepsTitles = CreationStepsTitles;
    CreationStepsDescriptions = CreationStepsDescriptions;
    LinkPreNote = LinkPreNote;
    TipsLookup = TipsLookup;

    carouselItems = this.characterCreatorService.getRaceCarouselItems();
}
