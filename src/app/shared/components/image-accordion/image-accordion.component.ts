import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ImageAccordionItem } from './models/image-accordion.model';

@Component({
    selector: 'app-image-accordion',
    imports: [AccordionModule],
    template: `<div class="flex flex-col gap-2">
        <p-accordion [value]="'0'" class="w-full h-auto">
            @if((items() ?? []).length > 0) { @for(item of (items() ?? []); track item.id; let idx =
            $index) {
            <p-accordion-panel value="{{ idx }}" class="relative">
                <p-accordion-header>
                    {{ item.name }}
                </p-accordion-header>
                <p-accordion-content class="relative">
                    <img [src]="item.imageUrl" [alt]="item.name" class="{{ getImageClasses() }}" />
                </p-accordion-content>
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
    imageClass = input<string>('w-full h-150 rounded-lg opacity-30 object-cover');

    getImageClasses(): string {
        return this.imageClass() || 'w-full h-auto object-cover';
    }
}