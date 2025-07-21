import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [CarouselModule],
    template: `
        @if(items().length>0){
        <p-carousel
            [value]="items()"
            [numVisible]="numVisible()"
            [responsiveOptions]="responsiveOptions()"
        >
            <ng-template let-item #item>
                <div class="border border-surface rounded-border m-2 p-4"></div>
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
    readonly items = input<any[]>([]);
    readonly itemTemplate = input<string>('');
    readonly carouselClass = input<string>('');
    readonly itemClass = input<string>('');
    readonly numVisible = input<number>(3);
    readonly responsiveOptions = input<any[]>([
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
