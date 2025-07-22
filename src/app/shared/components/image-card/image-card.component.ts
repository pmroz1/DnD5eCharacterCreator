import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageCardData } from './models/image-card.model';

@Component({
    selector: 'app-image-card',
    imports: [],
    template: `
        <div class="image-card border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div>
                    <img 
                        [src]="cardData.imageUrl" 
                        [alt]="cardData.title" 
                        class="w-full h-auto rounded"
                        (error)="onImageError($event)"
                    />
                </div>
            </div>
            <div>
                <h3 class="text-lg font-semibold">{{ cardData.title }}</h3>
                <p class="text-sm text-surface-600 dark:text-surface-400">{{ cardData.description }}</p>
            </div>
        </div>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {
    @Input() cardData: ImageCardData = {
        imageUrl: 'default-image-url.jpg',
        title: '',
        description: '',
        link: '',
    };

    onImageError(event: Event) {
        const target = event.target as HTMLImageElement;
        target.src = '/assets/images/classes/placeholder.svg';
    }
}
