import { inject, Injectable } from '@angular/core';
import { ImageCardData } from '@shared/components/image-card/models/image-card.model';
import { CLASSES } from '@shared/data/classes.data';
import { BaseRecord } from '@shared/models/base.model';
import { RACES } from '@shared/data/races.data';
import { CharacterDataRepositoryService } from './character-data-repository.service';
import { ImageAccordionItem } from '@shared/components/image-accordion/models/image-accordion.model';

@Injectable({
    providedIn: 'root',
})
export class CharacterCreatorFacade {
    characterDataRepositoryService = inject(CharacterDataRepositoryService);

    getClassCarouselItems(): ImageCardData[] {
        return this.characterDataRepositoryService.getClassCarouselItems();
    }

    getRaceCarouselItems(): ImageCardData[] {
        return this.characterDataRepositoryService.getRaceCarouselItems();
    }

    getBackgroundAccordionItems(): ImageAccordionItem[] {
        return this.characterDataRepositoryService.getBackgroundAccordionItems();
    }
}
