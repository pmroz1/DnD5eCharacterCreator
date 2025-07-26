import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'app-dice',
    imports: [CardModule, Button, OverlayBadgeModule],
    template: `<div>
        <p-card class="w-350 h-auto ">
            <div class="flex flex-col items-center justify-center content-center">
                <p class="font-bold text-5xl">D&D Dice Roll</p>
                <p>Roll a dice or <strong>two</strong> to determine your fate!</p>
                <div
                    class="flex flex-row items-center justify-center mt-4 border-2 border-dashed border-gray-300 rounded-lg p-4 h-50 w-300"
                >
                    @for(dice of selectedDices(); track dice; let idx = $index) {
                    <p-overlaybadge value="D{{ dice }}" class="mr-20">
                        <div
                            class="w-15 h-15 rounded-lg flex items-center justify-center text-white"
                            severity="secondary"
                            [class]="dice === 20 ? 'bg-yellow-500' : 'bg-blue-500'"
                            (click)="rollDice()"
                        >
                            {{ dice }}
                        </div>
                    </p-overlaybadge>

                    }
                </div>
                <div class="flex flex-row items-center justify-center mt-4">
                    <p-button
                        class="ml-auto mr-2"
                        label="Roll All"
                        severity="primary"
                        (click)="rollDice()"
                    ></p-button>
                    <p-button
                        class="mr-auto ml-2"
                        label="Clear"
                        severity="secondary"
                        (click)="clearRolls()"
                    ></p-button>
                </div>
                <div class="flex flex-row items-center justify-center mt-4">
                    @for(dice of availableDices(); track idx; let idx = $index) {
                    <p-button class="mr-2" severity="secondary" (click)="addDiceToPool(dice)">
                        <p class="text-green-300">D{{ dice }}</p>
                    </p-button>
                    }
                </div>
                <div
                    class="flex flex-col items-center justify-center mt-4 border-t-2 rounded border-gray-300 pt-4 h-50 ml-50 mr-50 bg-blue-300 w-300"
                >
                    <p-header>Roll Results</p-header>
                    <p>Here are your roll results:</p>
                </div>

                <div
                    class="flex flex-col items-center justify-center mt-4 border-t-2 rounded border-gray-300 pt-4 h-50 ml-50 mr-50 bg-red-300 w-300"
                >
                    <p-header>Recent Rolls</p-header>
                    <p>Here are your recent rolls:</p>
                </div>
            </div>
        </p-card>
    </div>`,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {
    availableDices = input<number[]>([3, 4, 6, 8, 10, 12, 20, 100]);
    selectedDices = input<number[]>([]);
    rollResults = input<number[]>([]);
    recentRolls = input<number[]>([]);
    enableDuplicates = input<boolean>(true);
    maxDiceCount = input<number>(7);

    addDiceToPool(dice: number) {
        if (
            (!this.enableDuplicates() && this.selectedDices().includes(dice)) ||
            this.selectedDices().length >= this.maxDiceCount()
        ) {
            console.warn('Cannot add duplicate dice or exceed max count');
            return;
        }
        this.selectedDices().push(dice);
    }

    rollDice() {
        throw new Error('Method not implemented.');
    }
    
    clearRolls() {
        this.selectedDices().length = 0;
    }
}
