import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CreationStepsTitles, CreationStepsDescriptions, CreationSteps, LinkPreNote } from '../../dictionaries/creation-steps.dictionary';
import { TipsLookup } from '../../../../shared/dictionaries/tips-lookup.dictionary';
import { CarouselComponent } from "../../../../shared/components/carousel/carousel.component";
import { ALL_CLASSES } from '../../../data/classes.data';

@Component({
  selector: 'app-class-selection',
  imports: [CardModule, CarouselComponent],
  templateUrl: './class-selection.component.html',
  styleUrl: './class-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassSelectionComponent {
  CreationSteps = CreationSteps;
  CreationStepsTitles = CreationStepsTitles;
  CreationStepsDescriptions = CreationStepsDescriptions;
  LinkPreNote = LinkPreNote;
  TipsLookup = TipsLookup;

  carouselItems = ALL_CLASSES.map((fiveEClass) => ({
    imageUrl: fiveEClass.imageUrl,
    title: fiveEClass.name,
    description: fiveEClass.description,
    link: `/character-creator/${CreationSteps.ClassSelection}/${fiveEClass.id}`,
  }));
}
