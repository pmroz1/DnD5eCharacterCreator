import { ChangeDetectionStrategy, Component, input, signal, computed, output } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageCardData } from '../image-card/models/image-card.model';
import { CarouselResponsiveOptions } from './responsive-options.data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carousel',
    imports: [CarouselModule, CommonModule],
    template: `
        <div class="w-full">
            @if (items().length > 0) {
            <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                <div class="flex items-center justify-center gap-3 mb-6">
                    <div
                        class="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center"
                    >
                        <i class="pi pi-images text-white text-lg"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white">Available Options</h3>
                </div>

                <div class="relative">
                    <p-carousel
                        [value]="items()"
                        [numVisible]="numVisible()"
                        [responsiveOptions]="responsiveOptions"
                        [numScroll]="1"
                        [circular]="true"
                        [showNavigators]="true"
                        [showIndicators]="true"
                        class="custom-carousel"
                    >
                        <ng-template let-item #item>
                            <div class="p-3">
                                <div
                                    class="relative group cursor-pointer transition-all duration-300 transform hover:scale-105"
                                    (click)="selectItem(item)"
                                >
                                    <div
                                        class="backdrop-blur-md bg-white/10 border rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/20"
                                        [class]="getCardClasses(item)"
                                    >
                                        <div class="relative h-48 overflow-hidden">
                                            @if (item.imageUrl) {
                                            <img
                                                [src]="item.imageUrl"
                                                [alt]="item.title"
                                                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            } @else {
                                            <div
                                                class="w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center"
                                            >
                                                <i class="pi pi-image text-white/60 text-4xl"></i>
                                            </div>
                                            } @if (selectedItem()?.title === item.title) {
                                            <div
                                                class="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent flex items-end justify-center pb-4"
                                            >
                                                <div
                                                    class="bg-white/20 backdrop-blur-sm rounded-full p-2"
                                                >
                                                    <i class="pi pi-check text-white text-xl"></i>
                                                </div>
                                            </div>
                                            }

                                            <div
                                                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            ></div>
                                        </div>

                                        <div class="p-4">
                                            <h4
                                                class="text-white font-bold text-lg mb-2 line-clamp-1"
                                            >
                                                {{ item.title }}
                                            </h4>
                                            <p class="text-white/70 text-sm line-clamp-2">
                                                {{ item.description }}
                                            </p>

                                            @if (selectedItem()?.title === item.title) {
                                            <div class="mt-3 flex items-center gap-2 text-blue-400">
                                                <i class="pi pi-check-circle"></i>
                                                <span class="text-sm font-medium">Selected</span>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ng-template>
                    </p-carousel>
                </div>
            </div>

            @if (selectedItem()) {
            <div
                class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 animate-fade-in"
            >
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="relative">
                        @if (selectedItem()?.imageUrl) {
                        <div class="relative h-80 rounded-xl overflow-hidden">
                            <img
                                [src]="selectedItem()?.imageUrl"
                                [alt]="selectedItem()?.title"
                                class="w-full h-full object-cover"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                            ></div>
                            <div class="absolute bottom-4 left-4 right-4">
                                <h2 class="text-3xl font-bold text-white mb-2">
                                    {{ selectedItem()?.title }}
                                </h2>
                                <div class="flex items-center gap-2 text-blue-300">
                                    <i class="pi pi-star-fill"></i>
                                    <span class="font-medium">Selected Choice</span>
                                </div>
                            </div>
                        </div>
                        } @else {
                        <div
                            class="h-80 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center"
                        >
                            <div class="text-center">
                                <i class="pi pi-image text-white/60 text-6xl mb-4"></i>
                                <h2 class="text-3xl font-bold text-white">
                                    {{ selectedItem()?.title }}
                                </h2>
                            </div>
                        </div>
                        }
                    </div>

                    <div class="space-y-6">
                        <div>
                            <div class="flex items-center gap-3 mb-4">
                                <div
                                    class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center"
                                >
                                    <i class="pi pi-info-circle text-white text-sm"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-white">Description</h3>
                            </div>
                            <div
                                class="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6"
                            >
                                <p class="text-white/90 leading-relaxed text-lg">
                                    {{ getExtendedDescription(selectedItem()) }}
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center gap-3 mb-4">
                                <div
                                    class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                                >
                                    <i class="pi pi-cog text-white text-sm"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-white">Key Features</h3>
                            </div>
                            <div class="space-y-3">
                                @for (feature of getKeyFeatures(selectedItem()); track feature) {
                                <div
                                    class="flex items-center gap-3 p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg"
                                >
                                    <div
                                        class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                    ></div>
                                    <span class="text-white/90">{{ feature }}</span>
                                </div>
                                }
                            </div>
                        </div>

                        <div class="pt-4">
                            <button
                                (click)="confirmSelection()"
                                class="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl font-bold text-white shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                            >
                                <i class="pi pi-check mr-2"></i>
                                Confirm Selection: {{ selectedItem()?.title }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            } } @else {
            <div class="text-center py-12">
                <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                    <i class="pi pi-inbox text-white/40 text-6xl mb-4"></i>
                    <h3 class="text-2xl font-bold text-white/60 mb-2">No Items Available</h3>
                    <p class="text-white/40">There are currently no options to display.</p>
                </div>
            </div>
            }
        </div>
    `,
    styles: `
        :host {
            display: block;
            width: 100%;
        }
        
        .custom-carousel ::ng-deep .p-carousel {
            background: transparent;
        }
        
        .custom-carousel ::ng-deep .p-carousel-content {
            background: transparent;
        }
        
        .custom-carousel ::ng-deep .p-carousel-container {
            background: transparent;
        }
        
        .custom-carousel ::ng-deep .p-carousel-next,
        .custom-carousel ::ng-deep .p-carousel-prev {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            backdrop-filter: blur(12px);
            transition: all 0.3s ease;
        }
        
        .custom-carousel ::ng-deep .p-carousel-next:hover,
        .custom-carousel ::ng-deep .p-carousel-prev:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            transform: scale(1.05);
        }
        
        .custom-carousel ::ng-deep .p-carousel-indicators {
            padding: 1rem 0;
        }
        
        .custom-carousel ::ng-deep .p-carousel-indicator button {
            background: rgba(255, 255, 255, 0.3);
            border: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .custom-carousel ::ng-deep .p-carousel-indicator.p-highlight button {
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            transform: scale(1.2);
        }
        
        .line-clamp-1 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .backdrop-blur-md {
            backdrop-filter: blur(12px);
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
    // Inputs
    readonly items = input<ImageCardData[]>([]);
    readonly itemTemplate = input<string>('');
    readonly carouselClass = input<string>('');
    readonly itemClass = input<string>('');
    readonly numVisible = input<number>(3);
    readonly maxImageHeight = input<string>('');

    // Outputs
    readonly selectionConfirmed = output<ImageCardData>();
    readonly itemSelected = output<ImageCardData>();

    // Configuration
    readonly responsiveOptions = CarouselResponsiveOptions;

    // State
    selectedItem = signal<ImageCardData | null>(null);

    // Methods
    selectItem(item: ImageCardData): void {
        this.selectedItem.set(item);
        this.itemSelected.emit(item);
    }

    getCardClasses(item: ImageCardData): string {
        const isSelected = this.selectedItem()?.title === item.title;
        return isSelected
            ? 'border-blue-400 bg-blue-500/20'
            : 'border-white/20 hover:border-blue-300/50';
    }

    getExtendedDescription(item: ImageCardData | null): string {
        if (!item) return '';

        // Enhanced descriptions based on title
        const descriptions: { [key: string]: string } = {
            Human: "Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. When they settle, though, they stay: they build cities to last for the ages, and great kingdoms that can persist for long centuries. An individual human might have a relatively short lifespan, but a human nation or culture preserves traditions with origins far beyond the reach of any single human's memory.",
            Elf: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
            Dwarf: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.',
            Halfling:
                'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.',
            Dragonborn:
                'Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids.',
            Gnome: "A gnome's energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement.",
            'Half-Elf':
                'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.',
            'Half-Orc':
                'Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born.',
            Tiefling:
                'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline.',
        };

        return (
            descriptions[item.title || ''] ||
            item.description ||
            'A fascinating choice for your character with unique traits and abilities.'
        );
    }

    getKeyFeatures(item: ImageCardData | null): string[] {
        if (!item) return [];

        // Key features based on race/background
        const features: { [key: string]: string[] } = {
            Human: [
                '+1 to all ability scores',
                'Extra skill proficiency',
                'Extra feat at 1st level',
                'Versatile and adaptable',
            ],
            Elf: [
                'Darkvision 60 feet',
                'Keen Senses proficiency',
                'Fey Ancestry (charm resistance)',
                'Trance instead of sleep',
            ],
            Dwarf: [
                'Darkvision 60 feet',
                'Dwarven Resilience',
                'Stonecunning',
                'Dwarven Combat Training',
            ],
            Halfling: [
                'Lucky trait',
                'Brave (fear resistance)',
                'Halfling Nimbleness',
                'Small size advantages',
            ],
            Dragonborn: [
                'Draconic Ancestry',
                'Breath Weapon',
                'Damage Resistance',
                'Natural armor bonus',
            ],
            Gnome: ['Darkvision 60 feet', 'Gnome Cunning', 'Small size', 'Natural spellcaster'],
            'Half-Elf': [
                'Darkvision 60 feet',
                'Fey Ancestry',
                'Two extra skills',
                'Charisma bonus',
            ],
            'Half-Orc': [
                'Darkvision 60 feet',
                'Relentless Endurance',
                'Savage Attacks',
                'Extra strength',
            ],
            Tiefling: [
                'Darkvision 60 feet',
                'Hellish Resistance',
                'Infernal Legacy',
                'Fire resistance',
            ],
        };

        return (
            features[item.title || ''] || [
                'Unique racial traits',
                'Special abilities',
                'Cultural background',
                'Roleplay opportunities',
            ]
        );
    }

    confirmSelection(): void {
        const selected = this.selectedItem();
        if (selected) {
            this.selectionConfirmed.emit(selected);
        }
    }
}
