import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ImageCardData } from './models/image-card.model';

@Component({
    selector: 'app-image-card',
    imports: [CommonModule, RippleModule],
    template: `
        <div
            [class]="getCardClasses()"
            class="group cursor-pointer"
            pRipple
            (click)="onCardClick()"
            [ngClass]="isClicked ? 'border-2 border-lime-300' : 'border-2 border-transparent'"
        >
            <div class="relative overflow-hidden rounded-t-lg">
                <div class="aspect-video bg-gradient-to-br">
                    <img
                        [src]="cardData().imageUrl"
                        [alt]="cardData().title"
                        [class]="getImageClasses()"
                        (error)="onImageError($event)"
                        loading="lazy"
                    />
                </div>
            </div>
            <div class="p-4 space-y-2">
                <h3
                    class="text-xl font-bold text-surface-900"
                >
                    {{ cardData().title }}
                </h3>
                <p
                    class="text-sm leading-relaxed"
                >
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

    readonly cardHeight = input<string>('h-auto');
    readonly cardWidth = input<string>('w-72');
    readonly cardClass = input<string>('bg-surface-0 dark:bg-surface-900 rounded-lg shadow-md box-border');

    readonly imageHeight = input<string>('h-100');
    readonly imageWidth = input<string>('w-full');
    readonly imageClass = input<string>('');

    @Output() cardClick = new EventEmitter<ImageCardData | null>();
    @Input() isClicked: boolean = false;

    getCardClasses(): string {
        return `${this.cardClass()} ${this.cardHeight()} ${this.cardWidth()} relative overflow-hidden`;
    }

    getImageClasses(): string {
        const baseClasses = 'object-cover';
        return baseClasses + ' ' + this.imageClass() + ' ' + this.imageHeight() + ' ' + this.imageWidth();
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
