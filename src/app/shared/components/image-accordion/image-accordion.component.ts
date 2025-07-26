import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-image-accordion',
    imports: [],
    template: `<p>image-accordion works!</p>`,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageAccordionComponent {
    public items = input<any[]>();
}
