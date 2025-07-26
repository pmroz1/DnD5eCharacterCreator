import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    BackgroundSteps,
    CreationSteps,
    CreationStepsDescriptions,
} from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { AccordionModule } from 'primeng/accordion';
import { CharacterCreatorFacade } from '@features/character-creator/services/character-creator-facade.service';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageAccordionComponent } from "@shared/components/image-accordion/image-accordion.component";

@Component({
    selector: 'app-background-selection',
    imports: [AccordionModule, CarouselComponent, FieldsetModule, ImageAccordionComponent],
    templateUrl: './background-selection.component.html',
    styleUrl: './background-selection.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundSelectionComponent {
    private readonly characterCreatorFacade = inject(CharacterCreatorFacade);
    CreationSteps = CreationSteps;
    CreationStepsDescriptions = CreationStepsDescriptions;
    BackgroundSteps = BackgroundSteps;

    carouselItems = this.characterCreatorFacade.getRaceCarouselItems();
}
