import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ImageAccordionItem } from './models/image-accordion.model';
import { ChipModule } from 'primeng/chip';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-image-accordion',
    imports: [AccordionModule, ChipModule, UpperCasePipe],
    template: `<div class="flex flex-col gap-4">
        <p-accordion [value]="'0'" class="w-full shadow-lg rounded-xl overflow-hidden">
            @if((items() ?? []).length > 0) { @for(item of (items() ?? []); track item.id; let idx =
            $index) {
            <p-accordion-panel
                value="{{ idx }}"
                class="relative border-b border-gray-200 last:border-b-0"
            >
                <p-accordion-header
                    class="bg-gradient-to-r from-slate-50 to-gray-100 hover:from-slate-100 hover:to-gray-150 transition-all duration-300"
                >
                    <div class="flex items-center gap-3 w-full py-2">
                        <div class="w-12 h-12 rounded-full overflow-hidden shadow-md">
                            <img
                                [src]="item.imageUrl"
                                [alt]="item.name"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <span class="text-lg font-semibold text-gray-800">{{ item.name }}</span>
                    </div>
                </p-accordion-header>
                <p-accordion-content class="relative overflow-hidden rounded-b-xl">
                    <div class="relative h-150 group">
                        <img
                            [src]="item.imageUrl"
                            [alt]="item.name"
                            class="{{ getImageClasses() }}"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"
                        ></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        <div class="absolute inset-0 flex items-center justify-start p-8">
                            <div
                                class="max-w-lg space-y-6 transform transition-all duration-500 group-hover:translate-x-2"
                            >
                                <h3 class="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                                    {{ item.name }}
                                </h3>

                                <div
                                    class="backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl"
                                >
                                    <p class="text-white text-base leading-relaxed font-medium">
                                        {{ item.description }}
                                    </p>
                                </div>

                                <div class="flex flex-wrap gap-3">
                                    @if(item.chips && item.chips.length > 0) { @for(chip of
                                    item.chips; track chip.value; let chipIdx = $index) {
                                    <div
                                        class="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer"
                                    >
                                        <div class="flex items-center gap-2">
                                            <span
                                                class="bg-white/90 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm"
                                            >
                                                <i class="{{ chip.icon }}"></i>
                                            </span>
                                            <span class="text-white font-medium text-sm">{{
                                                chip.value | uppercase
                                            }}</span>
                                        </div>
                                    </div>
                                    } }
                                </div>
                            </div>
                        </div>

                        <div
                            class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2"
                        >
                            <i
                                class="pi pi-expand text-white opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                            ></i>
                        </div>
                    </div>
                </p-accordion-content>
            </p-accordion-panel>
            } } @else {
            <div class="text-center py-12 text-gray-500">
                <i class="pi pi-image text-4xl mb-4"></i>
                <p class="text-lg">No items available</p>
            </div>
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
        return this.imageClass() || 'w-full h-full object-cover absolute top-0 left-0';
    }
}
