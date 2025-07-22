import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageCardComponent } from "../image-card/image-card.component";
import { FiveEClass } from '../../../features/character-creator/models/five-e-class.model';
import { ImageCardData } from '../image-card/models/image-card.model';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [CarouselModule, ImageCardComponent],
    template: `
        @if(items().length>0){
        <p-carousel
            [value]="items()"
            [numVisible]="numVisible()"
            [responsiveOptions]="responsiveOptions()"
            [numScroll]="3"
            class="mt-5 mb-5"
        >
            <ng-template let-item #item class="p-carousel-item m-20">
                <!-- <div class="border border-surface rounded-border m-2 p-4"></div> -->
                 <app-image-card [cardData]="item"></app-image-card>
            </ng-template>
        </p-carousel>
        } @else{
        <div class="text-center text-gray-500 dark:text-gray-400">No items available</div>
        }
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
    readonly items = input<ImageCardData[]>([]);
    readonly itemTemplate = input<string>('');
    readonly carouselClass = input<string>('');
    readonly itemClass = input<string>('');
    readonly numVisible = input<number>(9);
    readonly responsiveOptions = input<any[]>([
        {
            breakpoint: '1920px',
            numVisible: 6,
        },
        {
            breakpoint: '1600px',
            numVisible: 5,
        },
        {
            breakpoint: '1200px',
            numVisible: 4,
        },
        {
            breakpoint: '1024px',
            numVisible: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 2,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
        },
    ]);
}
