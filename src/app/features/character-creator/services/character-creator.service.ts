import { Injectable } from '@angular/core';
import { FiveEClass } from '../models/five-e-class.model';
import { ImageCardData } from '../../../shared/components/image-card/models/image-card.model';
import { CLASSES } from '@features/data/classes.data';
import { race } from 'rxjs';
import { BaseRecord } from '../models/base.record';
import { RACES } from '@features/data/races.data';

@Injectable({
    providedIn: 'root',
})
export class CharacterCreatorService {
    convertToImageCardData(record: BaseRecord): ImageCardData {
        return {
            imageUrl: record.imageUrl ,
            title: record.name,
            description: record.description,
            // link: `/character-creator/class/${record.id}`,
        };
    }

    getClassCarouselItems(): ImageCardData[] {
        return CLASSES.map((cls) => this.convertToImageCardData(cls));
    }

    getRaceCarouselItems(): ImageCardData[] {
        return RACES.map((race) => this.convertToImageCardData(race));
    }
}
