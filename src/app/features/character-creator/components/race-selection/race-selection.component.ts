import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    CreationSteps,
    CreationStepsDescriptions,
    CreationStepsTitles,
    LinkPreNote,
} from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { CharacterCreatorService } from '@features/character-creator/services/character-creator.service';
import { TipsLookup } from '@shared/dictionaries/tips-lookup.dictionary';
import { Card } from 'primeng/card';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';

@Component({
    selector: 'app-race-selection',
    imports: [Card, CarouselComponent],
    template: `<p-card [header]="CreationStepsTitles[CreationSteps.RaceSelection]" class="mb-4">
        <p class="m-0">
            {{ CreationStepsDescriptions[CreationSteps.RaceSelection] }}
            <br />
            {{ LinkPreNote }}
            <br />
            <a
                [href]="TipsLookup.Races"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-200 hover:underline"
            >
                {{ TipsLookup.Races }}</a
            >
        </p>

        <app-carousel [items]="carouselItems"></app-carousel>
    </p-card> `,
    styleUrl: './race-selection.component.scss',
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
