import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-dice',
    imports: [CardModule],
    template: `<p-card class="w-600 h-auto">
        <p-header> D&D Dice Roll</p-header>
    </p-card> `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {}
