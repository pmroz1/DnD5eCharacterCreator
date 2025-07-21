import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CreationStepsTitles, CreationStepsDescriptions, CreationSteps, LinkPreNote } from '../../dictionaries/creation-steps.dictionary';
import { TipsLookup } from '../../../../shared/dictionaries/tips-lookup.dictionary';

@Component({
  selector: 'app-class-selection',
  imports: [CardModule],
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
}
