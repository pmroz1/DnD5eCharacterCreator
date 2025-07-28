import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ImageCardData } from './models/image-card.model';

@Component({
    selector: 'app-image-card',
    imports: [CommonModule, RippleModule],
    template: `
        <div
            class="group cursor-pointer backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 shadow-xl h-180 w-full flex flex-col overflow-hidden"
            pRipple
            (click)="onCardClick()"
            [ngClass]="isClicked ? 'border-2 border-lime-600' : 'border-2 border-transparent'" 
        >
            <div class="relative overflow-hidden h-120 flex-shrink-0">
                <img
                    [src]="cardData().imageUrl"
                    [alt]="cardData().title"
                    [class]="getImageClasses()"
                    (error)="onImageError($event)"
                    loading="lazy"
                />
            </div>
            <div class="flex-1 p-4 flex flex-col">
                <h3 class="text-lg font-bold text-white mb-2 line-clamp-2">
                    {{ cardData().title }}
                </h3>
                <p class="text-sm text-white/80 leading-relaxed flex-1 line-clamp-3">
                    {{ cardData().description }}
                </p>
            </div>
        </div>
    `,
    styles: `

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {
    readonly cardData = input<ImageCardData>({
        imageUrl: 'default-image-url.jpg',
        title: '',
        description: '',
        link: '',
    });

    readonly maxCardHeight = input<string>('h-auto');
    readonly maxCardWidth = input<string>('w-full');
    readonly cardClass = input<string>('bg-surface-0 dark:bg-surface-900 rounded-lg shadow-md box-border ');

    readonly maxImageHeight = input<string>('');
    readonly maxImageWidth = input<string>('w-full');
    readonly imageClass = input<string>('');

    @Output() cardClick = new EventEmitter<ImageCardData | null>();
    @Input() isClicked: boolean = false;

    getImageClasses(): string {
        const baseClasses = 'w-full h-full object-cover';
        return baseClasses + ' ' + this.imageClass();
    }

    onCardClick(): void {
        if(this.isClicked){
            this.cardClick.emit(null);
            return;
        }
        this.cardClick.emit(this.cardData());
    }

    onImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = '/assets/images/classes/placeholder.svg';
    }
}
