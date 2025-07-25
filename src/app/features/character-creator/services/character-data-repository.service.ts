import { Injectable } from '@angular/core';
import { ImageCardData } from '@shared/components/image-card/models/image-card.model';
import { CLASSES } from '@shared/data/classes.data';
import { BaseRecord } from '@features/character-creator/models/base.model';
import { RACES } from '@shared/data/races.data';

@Injectable({
    providedIn: 'root',
})
export class CharacterDataRepositoryService {
    convertToImageCardData(record: BaseRecord): ImageCardData {
        return {
            imageUrl: record.imageUrl,
            title: record.name,
            description: record.description,
        };
    }

    getClassCarouselItems(): ImageCardData[] {
        return CLASSES.map((cls) => this.convertToImageCardData(cls));
    }

    getRaceCarouselItems(): ImageCardData[] {
        return RACES.map((race) => this.convertToImageCardData(race));
    }
}
