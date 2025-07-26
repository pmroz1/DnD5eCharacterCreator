import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';

@Component({
    selector: 'app-dice',
    imports: [CardModule, Button],
    template: `<div>
        <p-card class="w-350 h-auto flex flex-col items-center justify-center">
            <p-header>D&D Dice Roll</p-header>
            <p>Roll a dice or <strong>two</strong> to determine your fate!</p>
            <div
                class="flex flex-col items-center justify-center mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 h-50 ml-50 mr-50"
            >
                <!-- dices go here  -->
            </div>
            <p-button
                label="Roll Dice"
                class="mt-4"
                severity="primary"
                (click)="rollDice()"
            ></p-button>
            <p-button
                label="Clear"
                class="mt-2"
                severity="secondary"
                (click)="clearRolls()"
            ></p-button>
            <div class="flex flex-row items-center justify-center mt-4">
                @for(dice of dices(); track dice; let idx = $index) {
                <p-button class="mr-2" severity="secondary">
                    <p class="text-green-300">D{{ dice }}</p>
                </p-button>
                }
            </div>
            <div
                class="flex flex-col items-center justify-center mt-4 border-t-2 rounded border-gray-300 pt-4 h-50 ml-50 mr-50 bg-blue-300"
            >
                <p-header>Roll Results</p-header>
                <p>Here are your roll results:</p>
            </div>

            <div
                class="flex flex-col items-center justify-center mt-4 border-t-2 rounded border-gray-300 pt-4 h-50 ml-50 mr-50 bg-red-300"
            >
                <p-header>Recent Rolls</p-header>
                <p>Here are your recent rolls:</p>
            </div>
        </p-card>
    </div>`,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {
    dices = input<number[]>([3, 4, 6, 8, 10, 12, 20, 100]);
    rollDice() {
        throw new Error('Method not implemented.');
    }
    clearRolls() {
        throw new Error('Method not implemented.');
    }
}
