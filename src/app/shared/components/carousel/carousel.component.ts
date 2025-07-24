import { ChangeDetectionStrategy, Component, input, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageCardComponent } from "../image-card/image-card.component";
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
            [circular]="true"
            class="mt-5 mb-5"
        >
            <ng-template let-item #item class="p-carousel-item m-20">
                 <app-image-card [cardData]="item" (cardClick)="onCardClicked($event)" [isClicked]="clickedItem()?.title === item.title"></app-image-card>
            </ng-template>
        </p-carousel>
        } @else{
        <div class="text-center text-gray-500 dark:text-gray-400">No items available</div>
        }
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
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
    clickedItem = signal<ImageCardData | null>(null);


    onCardClicked($event: ImageCardData): void {
        console.log('Card clicked:', $event);
        this.clickedItem.set($event);
    }
}
