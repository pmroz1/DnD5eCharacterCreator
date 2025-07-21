import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-card',
  imports: [],
  template: `<p>image-card works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent { }
