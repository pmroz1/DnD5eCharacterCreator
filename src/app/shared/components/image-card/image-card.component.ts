import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-card',
    imports: [],
    template: `
        <div class="image-card border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4">
                <div>
                    <img [src]="imageUrl" [alt]="title" class="w-full h-auto rounded" />
                </div>
            </div>
            <div>
                <h3 class="text-lg font-semibold">{{ title }}</h3>
                <p class="text-sm text-surface-600 dark:text-surface-400">{{ description }}</p>
            </div>
        </div>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {
    @Input() imageUrl: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
}
