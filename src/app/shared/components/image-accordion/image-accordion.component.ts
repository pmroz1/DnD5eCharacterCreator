import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ImageAccordionItem } from './models/image-accordion.model';

@Component({
    selector: 'app-image-accordion',
    imports: [AccordionModule],
    template: `<div class="flex flex-col gap-2">
        <p-accordion>
            @if((items() ?? []).length > 0) { @for(item of (items() ?? []); track item.id;  let idx = $index) {
              <p-accordion-panel value="{{ idx }}">
                <p-accordion-header>{{ item.name}}</p-accordion-header>
                <p-accordion-content> {{ item.description }}</p-accordion-content>
            </p-accordion-panel>
            } } @else {
            <p>No items available</p>
            }
        </p-accordion>
    </div>`,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageAccordionComponent {
    public items = input<ImageAccordionItem[]>();
}
