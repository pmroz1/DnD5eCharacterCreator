import { Injectable } from '@angular/core';
import { ImageCardData } from '../../../shared/components/image-card/models/image-card.model';
import { FiveEClass } from '../models/five-e-class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassCardService {

  convertClassToImageCard(fiveEClass: FiveEClass): ImageCardData {
    return {
      imageUrl: fiveEClass.imageUrl,
      title: fiveEClass.name,
      description: fiveEClass.description,
      link: `/character-creator/class/${fiveEClass.id}`
    };
  }

  convertClassesToImageCards(classes: FiveEClass[]): ImageCardData[] {
    return classes.map(cls => this.convertClassToImageCard(cls));
  }
}
