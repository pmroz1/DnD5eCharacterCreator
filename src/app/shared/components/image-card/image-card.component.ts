import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ImageCardData } from './models/image-card.model';

@Component({
    selector: 'app-image-card',
    imports: [CommonModule, RippleModule],
    template: `
        <div [class]="getCardClasses()" 
             class="group cursor-pointer transition-all duration-300 hover:shadow-xl"
             pRipple
             (click)="onCardClick()">
            <div class="relative overflow-hidden rounded-t-lg">
                <div class="aspect-video bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-800 dark:to-surface-900">
                    <img 
                        [src]="cardData.imageUrl" 
                        [alt]="cardData.title" 
                        [class]="getImageClasses()"
                        class="transition-transform duration-300 group-hover:scale-110"
                        (error)="onImageError($event)"
                        loading="lazy"
                    />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-4 space-y-2">
                <h3 class="text-xl font-bold text-surface-900 dark:text-surface-50 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {{ cardData.title }}
                </h3>
                <p class="text-sm text-surface-600 dark:text-surface-400 line-clamp-3 leading-relaxed">
                    {{ cardData.description }}
                </p>
            </div>
            <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div class="w-8 h-8 bg-primary-500 dark:bg-primary-400 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-4 h-4 text-white dark:text-surface-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
            </div>
        </div>
    `,
    styles: `
       
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {
    @Input() cardData: ImageCardData = {
        imageUrl: 'default-image-url.jpg',
        title: '',
        description: '',
        link: '',
    };

    @Input() cardHeight: string = 'h-auto';
    @Input() cardWidth: string = 'w-72';
    @Input() cardClass: string = 'bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow-md';

    @Input() imageHeight: string = '';
    @Input() imageWidth: string = '';
    @Input() imageClass: string = '';

    @Output() cardClick = new EventEmitter<ImageCardData>();

    getCardClasses(): string {
        return `${this.cardClass} ${this.cardHeight} ${this.cardWidth} relative overflow-hidden`;
    }

    getImageClasses(): string {
        const baseClasses = 'w-full h-200 object-cover';
        return this.imageClass ? `${baseClasses} ${this.imageClass}` : baseClasses;
    }

    onCardClick(): void {
        this.cardClick.emit(this.cardData);
    }

    onImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = '/assets/images/classes/placeholder.svg';
    }
}
