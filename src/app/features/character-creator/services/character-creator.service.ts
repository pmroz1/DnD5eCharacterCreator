import { Injectable } from '@angular/core';
import { FiveEClass } from '../models/five-e-class.model';
import { ImageCardData } from '../../../shared/components/image-card/models/image-card.model';
import { ALL_CLASSES } from '@features/data/classes.data';

@Injectable({
    providedIn: 'root',
})
export class CharacterCreatorService {
    convertClassToImageCard(fiveEClass: FiveEClass): ImageCardData {
        return {
            imageUrl: fiveEClass.imageUrl,
            title: fiveEClass.name,
            description: fiveEClass.description,
            link: `/character-creator/class/${fiveEClass.id}`,
        };
    }

    getClassCarouselItems(): ImageCardData[] {
        return ALL_CLASSES.map((cls) => this.convertClassToImageCard(cls));
    }

    getRaceCarouselItems(): ImageCardData[] {
        // This method should return the race carousel items
        return [];
    }
}
