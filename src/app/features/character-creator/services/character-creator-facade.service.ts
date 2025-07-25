import { inject, Injectable } from '@angular/core';
import { ImageCardData } from '@shared/components/image-card/models/image-card.model';
import { CLASSES } from '@features/data/classes.data';
import { BaseRecord } from '@features/character-creator/models/base.model';
import { RACES } from '@features/data/races.data';
import { CharacterDataRepositoryService } from './character-data-repository.service';

@Injectable({
    providedIn: 'root',
})
export class CharacterCreatorFacade{
    characterDataRepositoryService = inject(CharacterDataRepositoryService);

    getClassCarouselItems(): ImageCardData[] {
        return this.characterDataRepositoryService.getClassCarouselItems();
    }

    getRaceCarouselItems(): ImageCardData[] {
        return this.characterDataRepositoryService.getRaceCarouselItems();
    }
}
