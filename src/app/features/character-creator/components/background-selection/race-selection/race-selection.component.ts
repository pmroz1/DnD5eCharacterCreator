import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    CreationSteps,
    CreationStepsDescriptions,
    LinkPreNote,
} from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { CharacterCreatorFacade } from '@features/character-creator/services/character-creator-facade.service';
import { TipsLookup } from '@shared/dictionaries/tips-lookup.dictionary';
import { Card } from 'primeng/card';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';

@Component({
    selector: 'app-race-selection',
    imports: [Card, CarouselComponent],
    template: `<p-card [header]="CreationSteps.BackgroundSelection" class="mb-4">
        <p class="m-0">
            {{ CreationStepsDescriptions[CreationSteps.BackgroundSelection] }}
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
    characterCreatorFacade = inject(CharacterCreatorFacade);
    CreationSteps = CreationSteps;
    CreationStepsDescriptions = CreationStepsDescriptions;
    LinkPreNote = LinkPreNote;
    TipsLookup = TipsLookup;

    carouselItems = this.characterCreatorFacade.getRaceCarouselItems();
}
