import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-character-viewer',
  imports: [],
  template: `<p>character-viewer works!</p>`,
  styleUrl: './character-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterViewerComponent { }
