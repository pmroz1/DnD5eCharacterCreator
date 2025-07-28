import { ChangeDetectionStrategy, Component, input, Output, EventEmitter, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ImageAccordionItem } from './models/image-accordion.model';
import { ChipModule } from 'primeng/chip';
import { UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-image-accordion',
    imports: [AccordionModule, ChipModule, UpperCasePipe, CommonModule],
    template: `<div class="flex flex-col gap-4">
        <p-accordion [value]="'0'" class="w-full shadow-lg rounded-xl overflow-hidden ">
            @if((items() ?? []).length > 0) { @for(item of (items() ?? []); track item.id; let idx =
            $index) {
            <p-accordion-panel
                value="{{ idx }}"
                class="relative border-b border-gray-200 last:border-b-0"
            >
                <p-accordion-header 
                    class="transition-all duration-300"
                    [ngClass]="{
                        'bg-gradient-to-r from-slate-50 to-gray-100 hover:from-slate-100 hover:to-gray-150': selectedItemId() !== item.id,
                        'bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50 border-l-4 border-blue-500 shadow-lg': selectedItemId() === item.id
                    }"
                >
                    <div class="flex items-center gap-3 w-full py-2">
                        <div 
                            class="w-12 h-12 rounded-full overflow-hidden transition-all duration-300"
                            [ngClass]="{
                                'shadow-md': selectedItemId() !== item.id,
                                'shadow-lg shadow-blue-400/30 ring-2 ring-blue-400/50': selectedItemId() === item.id
                            }"
                        >
                            <img
                                [src]="item.imageUrl"
                                [alt]="item.name"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <span 
                            class="text-lg font-semibold transition-colors duration-300"
                            [ngClass]="{
                                'text-gray-800': selectedItemId() !== item.id,
                                'text-blue-800': selectedItemId() === item.id
                            }"
                        >{{ item.name }}</span>
                        <div class="ml-auto">
                            <i 
                                class="transition-all duration-300"
                                [ngClass]="{
                                    'pi pi-circle text-gray-400': selectedItemId() !== item.id,
                                    'pi pi-check-circle text-blue-600': selectedItemId() === item.id
                                }"
                            ></i>
                        </div>
                    </div>
                </p-accordion-header>
                <p-accordion-content class="relative overflow-hidden rounded-b-xl">
                    <div 
                        class="relative h-150 group cursor-pointer transition-all duration-300"
                        [ngClass]="{
                            'selected-accordion-item': selectedItemId() === item.id
                        }"
                        (click)="onItemClick(item)"
                    >
                        <img
                            [src]="item.imageUrl"
                            [alt]="item.name"
                            class="{{ getImageClasses() }}"
                        />
                        <div
                            class="absolute inset-0 transition-all duration-300"
                            [ngClass]="{
                                'bg-gradient-to-r from-black/80 via-black/50 to-black/20': selectedItemId() !== item.id,
                                'bg-gradient-to-r from-blue-900/70 via-purple-800/50 to-pink-700/30': selectedItemId() === item.id
                            }"
                        ></div>
                        <div 
                            class="absolute inset-0 transition-all duration-300"
                            [ngClass]="{
                                'bg-gradient-to-t from-black/60 via-transparent to-transparent': selectedItemId() !== item.id,
                                'bg-gradient-to-t from-blue-800/50 via-transparent to-transparent': selectedItemId() === item.id
                            }"
                        ></div>

                        <div class="absolute inset-0 flex items-center justify-start p-8">
                            <div
                                class="max-w-lg space-y-6 transform transition-all duration-500 group-hover:translate-x-2"
                            >
                                <h3 
                                    class="text-3xl font-bold mb-4 drop-shadow-lg transition-colors duration-300"
                                    [ngClass]="{
                                        'text-white': selectedItemId() !== item.id,
                                        'text-blue-100': selectedItemId() === item.id
                                    }"
                                >
                                    {{ item.name }}
                                </h3>

                                <div
                                    class="backdrop-blur-sm rounded-xl p-6 border shadow-xl transition-all duration-300"
                                    [ngClass]="{
                                        'bg-white/10 border-white/20': selectedItemId() !== item.id,
                                        'bg-blue-500/20 border-blue-400/40 shadow-blue-400/20': selectedItemId() === item.id
                                    }"
                                >
                                    <p 
                                        class="text-base leading-relaxed font-medium transition-colors duration-300"
                                        [ngClass]="{
                                            'text-white': selectedItemId() !== item.id,
                                            'text-blue-100': selectedItemId() === item.id
                                        }"
                                    >
                                        {{ item.description }}
                                    </p>
                                </div>

                                <div class="flex flex-wrap gap-3">
                                    @if(item.chips && item.chips.length > 0) { @for(chip of
                                    item.chips; track chip.value; let chipIdx = $index) {
                                    <div
                                        class="backdrop-blur-sm rounded-full px-4 py-2 border hover:bg-white/30 transition-all duration-300 cursor-pointer"
                                        [ngClass]="{
                                            'bg-white/20 border-white/30': selectedItemId() !== item.id,
                                            'bg-blue-500/30 border-blue-400/50 hover:bg-blue-500/40': selectedItemId() === item.id
                                        }"
                                    >
                                        <div class="flex items-center gap-2">
                                            <span
                                                class="bg-white/90 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm"
                                            >
                                                <i class="{{ chip.icon }}"></i>
                                            </span>
                                            <span 
                                                class="font-medium text-sm transition-colors duration-300"
                                                [ngClass]="{
                                                    'text-white': selectedItemId() !== item.id,
                                                    'text-blue-100': selectedItemId() === item.id
                                                }"
                                            >{{
                                                chip.value | uppercase
                                            }}</span>
                                        </div>
                                    </div>
                                    } }
                                </div>
                            </div>
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
    styles: `
        .selected-accordion-item {
            animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
            0%, 100% { 
                box-shadow: inset 0 0 30px rgba(59, 130, 246, 0.2);
            }
            50% { 
                box-shadow: inset 0 0 50px rgba(59, 130, 246, 0.4);
            }
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageAccordionComponent {
    public items = input<ImageAccordionItem[]>();
    imageClass = input<string>('w-full h-150 rounded-lg opacity-30 object-cover');

    selectedItemId = signal<string | null>(null);
    @Output() itemClick = new EventEmitter<ImageAccordionItem | null>();

    getImageClasses(): string {
        return this.imageClass() || 'w-full h-full object-cover absolute top-0 left-0';
    }

    onItemClick(item: ImageAccordionItem): void {
        const currentSelectedId = this.selectedItemId();
        if (currentSelectedId === item.id) {
            this.selectedItemId.set(null);
            this.itemClick.emit(null);
        } else {
            this.selectedItemId.set(item.id);
            this.itemClick.emit(item);
        }
    }
}
