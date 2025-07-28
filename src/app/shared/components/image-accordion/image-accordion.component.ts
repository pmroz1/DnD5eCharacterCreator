import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ImageAccordionItem } from './models/image-accordion.model';
import { ChipModule } from 'primeng/chip';

@Component({
    selector: 'app-image-accordion',
    imports: [AccordionModule, ChipModule],
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
                    <div
                        class="flex flex-row absolute top-0 left-0 w-full h-full flex items-center justify-start pl-20 font-bold text-white text-5xl italic bg-gradient-to-r from-black/70 via-black/30 to-transparent backdrop-blur"
                    >
                        <div class="w-1/2">
                            <p
                                class="antialiased text-justify rounded-lg p-4 bg-white/20 backdrop-blur"
                            >
                                {{ item.description }}
                            </p>
                            @for(chip of item.chips; track chip.value; let chipIdx = $index) {
                            <div class="flex items-center gap-2">
                                <p-chip class="!py-0 !pl-0 !pr-4">
                                    <span
                                        class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center"
                                    >
                                        <i class="{{ chip.icon }}"></i>
                                    </span>
                                    <span class="ml-2 font-medium"> {{ chip.value }} </span>
                                </p-chip>
                            </div>
                            }
                        </div>
                    </div>
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
        return (
            this.imageClass() ||
            'w-full h-auto object-cover absolute top-0 left-0 rounded-lg opacity-30'
        );
    }
}
