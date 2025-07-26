import { Injectable } from '@angular/core';
import { ImageCardData } from '@shared/components/image-card/models/image-card.model';
import { CLASSES } from '@shared/data/classes.data';
import { BaseRecord } from '@shared/models/base.model';
import { RACES } from '@shared/data/races.data';
import { BACKGROUNDS } from '@shared/data/background.data';
import { ImageAccordionItem } from '@shared/components/image-accordion/models/image-accordion.model';

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

    convertToImageAccordionItem(record: BaseRecord): ImageAccordionItem {
        return {
            id: record.id,
            name: record.name,
            description: record.description,
            imageUrl: record.imageUrl,
        };
    }

    getClassCarouselItems(): ImageCardData[] {
        return CLASSES.map((cls) => this.convertToImageCardData(cls));
    }

    getRaceCarouselItems(): ImageCardData[] {
        return RACES.map((race) => this.convertToImageCardData(race));
    }

    getBackgroundAccordionItems(): ImageAccordionItem[] {
        return BACKGROUNDS.map((bg) => (this.convertToImageAccordionItem(bg)));
    }
}
