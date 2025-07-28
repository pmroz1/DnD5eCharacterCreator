import { Injectable } from '@angular/core';
import { ImageCardData } from '@shared/components/image-card/models/image-card.model';
import { CLASSES } from '@shared/data/classes.data';
import { BaseRecord } from '@shared/models/base.model';
import { RACES } from '@shared/data/races.data';
import { BACKGROUNDS } from '@shared/data/background.data';
import { ImageAccordionItem } from '@shared/components/image-accordion/models/image-accordion.model';
import { BackgroundModel } from '@shared/models/origin.model';

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

    convertBackgroundToImageAccordionItem(record: BackgroundModel): ImageAccordionItem {
        const feats =
            record.feats?.map((feat) => ({
                value: feat,
                icon: `pi pi-sparkles`,
            })) || [];

        const toolProficiencies =
            record.toolProficiencies?.map((tool) => ({
                value: tool,
                icon: `pi pi-hammer`,
            })) || [];

        const skills =
            record.skills?.map((skill) => ({
                value: skill,
                icon: `pi pi-address-book`,
            })) || [];

        const abilities =
            record.abilities?.map((ability) => ({
                value: ability,
                icon: `pi pi-star`,
            })) || [];

        return {
            id: record.id,
            name: record.name,
            description: record.description,
            imageUrl: record.imageUrl,
            chips: [...feats, ...toolProficiencies, ...skills, ...abilities],
        };
    }

    getClassCarouselItems(): ImageCardData[] {
        return CLASSES.map((cls) => this.convertToImageCardData(cls));
    }

    getRaceCarouselItems(): ImageCardData[] {
        return RACES.map((race) => this.convertToImageCardData(race));
    }

    getBackgroundAccordionItems(): ImageAccordionItem[] {
        return BACKGROUNDS.map((bg) => this.convertBackgroundToImageAccordionItem(bg));
    }
}
