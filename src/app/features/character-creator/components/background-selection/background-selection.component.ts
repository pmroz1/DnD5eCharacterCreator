import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundSteps } from '@features/character-creator/dictionaries/creation-steps.dictionary';
import { AccordionModule } from 'primeng/accordion';
import { RaceSelectionComponent } from "./race-selection/race-selection.component";

@Component({
  selector: 'app-background-selection',
  imports: [AccordionModule, RaceSelectionComponent],
  templateUrl: './background-selection.component.html',
  styleUrl: './background-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundSelectionComponent {
  BackgroundSteps = BackgroundSteps;
}
