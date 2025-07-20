import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-character-creator',
  imports: [],
  template: `<p>CharacterCreator works!</p>`,
  styleUrl: './character-creator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCreatorComponent { }
