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
            class="group cursor-pointer backdrop-blur-sm rounded-xl shadow-xl h-120 w-full flex flex-col overflow-hidden transition-all duration-300 transform"
            [ngClass]="{
                'bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:scale-104': !isClicked,
                'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border-2 border-blue-400/60 shadow-2xl shadow-blue-400/20 scale-104': isClicked
            }"
            pRipple
            (click)="onCardClick()"
        >
            <div class="relative overflow-hidden h-100 flex-shrink-0">
                <div 
                    class="absolute inset-0 transition-all duration-300"
                    [ngClass]="{
                        'bg-gradient-to-t from-black/20 to-transparent': !isClicked,
                        'bg-gradient-to-t from-blue-600/30 via-purple-600/20 to-pink-600/10': isClicked
                    }"
                ></div>
                <img
                    [src]="cardData().imageUrl"
                    [alt]="cardData().title"
                    [class]="getImageClasses()"
                    (error)="onImageError($event)"
                    loading="lazy"
                />
            </div>
            <div class="flex-1 p-4 flex flex-col relative">
                <div 
                    class="absolute inset-0 transition-all duration-300 rounded-b-xl"
                    [ngClass]="{
                        'bg-gradient-to-t from-transparent to-transparent': !isClicked,
                        'bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent': isClicked
                    }"
                ></div>
                <h3 
                    class="text-lg font-bold mb-2 line-clamp-2 relative z-10 transition-colors duration-300"
                    [ngClass]="{
                        'text-white': !isClicked,
                        'text-blue-100 drop-shadow-lg': isClicked
                    }"
                >
                    {{ cardData().title }}
                </h3>
                <p 
                    class="text-sm leading-relaxed flex-1 line-clamp-3 relative z-10 transition-colors duration-300"
                    [ngClass]="{
                        'text-white/80': !isClicked,
                        'text-blue-200/90': isClicked
                    }"
                >
                    {{ cardData().description }}
                </p>
            </div>
        </div>
    `,
    styles: `
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }

        .selected-card {
            animation: pulse-glow 2s ease-in-out infinite;
        }
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

    getCardClasses(): string {
        const baseClasses = this.cardClass();
        const heightClass = this.maxCardHeight();
        const widthClass = this.maxCardWidth();
        const selectedClass = this.isClicked ? 'selected-card' : '';
        return `${baseClasses} ${heightClass} ${widthClass} ${selectedClass}`.trim();
    }

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
