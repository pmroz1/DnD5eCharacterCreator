import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ImageCardData } from './models/image-card.model';

@Component({
    selector: 'app-image-card',
    imports: [CommonModule, RippleModule],
    template: `
        <div
            [class]="getCardClasses()"
            class="group cursor-pointer transition-all duration-300 hover:shadow-xl"
            pRipple
            (click)="onCardClick()"
            [ngClass]="isClicked ? 'border-4 border-lime-600' : ''"
        >
            <div class="relative overflow-hidden rounded-t-lg">
                <div class="aspect-video bg-gradient-to-br">
                    <img
                        [src]="cardData.imageUrl"
                        [alt]="cardData.title"
                        [class]="getImageClasses()"
                        class="transition-transform duration-300 group-hover:scale-110"
                        (error)="onImageError($event)"
                        loading="lazy"
                    />
                </div>
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
            </div>
            <div class="p-4 space-y-2">
                <h3
                    class="text-xl font-bold text-surface-900 dark:text-surface-50 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                >
                    {{ cardData.title }}
                </h3>
                <p
                    class="text-sm text-surface-600 dark:text-surface-400 line-clamp-3 leading-relaxed"
                >
                    {{ cardData.description }}
                </p>
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
    @Input() cardClass: string = 'bg-surface-0 dark:bg-surface-900 rounded-lg shadow-md box-border';

    @Input() imageHeight: string = 'h-100';
    @Input() imageWidth: string = 'w-full';
    @Input() imageClass: string = '';

    @Output() cardClick = new EventEmitter<ImageCardData | null>();
    @Input() isClicked: boolean = false;

    getCardClasses(): string {
        return `${this.cardClass} ${this.cardHeight} ${this.cardWidth} relative overflow-hidden`;
    }

    getImageClasses(): string {
        const baseClasses = 'object-cover';
        return baseClasses + ' ' + this.imageClass + ' ' + this.imageHeight + ' ' + this.imageWidth;
    }

    onCardClick(): void {
        if(this.isClicked){
            this.cardClick.emit(null);
            return;
        }
        this.cardClick.emit(this.cardData);
    }

    onImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = '/assets/images/classes/placeholder.svg';
    }
}
