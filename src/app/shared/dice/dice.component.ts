import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

import { trigger, transition, style, animate, state, AnimationEvent } from '@angular/animations';

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
                    @for(dice of selectedDices(); track idx; let idx = $index) {
                    <p-overlaybadge value="D{{ dice }}" class="mr-20">
                        <div
                            class="w-15 h-15 rounded-lg flex items-center justify-center text-white group cursor-pointer transition-transform"
                            [class]="getDiceColor(rollResults()[idx], dice)"
                            [class.animate-spin]="isRolling()"
                            (click)="rollDice()"
                            [@rollDice]="isRolling() ? 'rolling' : 'idle'"
                        >
                            @if (isRolling()) { ? } @else if (rollResults()[idx]) {
                            {{ rollResults()[idx] }}
                            } @else {
                            {{ dice }}
                            }
                        </div>
                    </p-overlaybadge>
                    }
                </div>
                <div class="flex flex-row items-center justify-center mt-4">
                    <p-button
                        class="ml-auto mr-2"
                        label="Roll All"
                        severity="primary"
                        [disabled]="selectedDices().length === 0 || isRolling()"
                        (click)="rollDice()"
                    ></p-button>
                    <p-button
                        class="mr-auto ml-2"
                        label="Clear"
                        severity="secondary"
                        [disabled]="isRolling()"
                        (click)="clearRolls()"
                    ></p-button>
                </div>
                <div class="flex flex-row items-center justify-center mt-4">
                    @for(dice of availableDices(); track idx; let idx = $index) {
                    <p-button
                        class="mr-2"
                        severity="secondary"
                        [disabled]="isRolling()"
                        (click)="addDiceToPool(dice)"
                    >
                        <p class="text-green-300">D{{ dice }}</p>
                    </p-button>
                    }
                </div>
                <div
                    class="flex flex-col items-center justify-center mt-4 border-t-2 rounded border-gray-300 pt-4 h-50 ml-50 mr-50 bg-blue-300 w-300"
                >
                    <p-header>Roll Results</p-header>
                    @if (rollResults().length > 0) {
                    <div class="flex flex-wrap gap-2 mt-2">
                        @for(result of rollResults(); track idx; let idx = $index) {
                        <span class="px-2 py-1 bg-white rounded font-bold text-gray-800">{{
                            result
                        }}</span>
                        }
                    </div>
                    <p class="mt-2 font-bold">Total: {{ totalRollResult }}</p>
                    } @else {
                    <p>No rolls yet</p>
                    }
                </div>

                <div
                    class="flex flex-col items-center justify-center mt-4 border-t-2 rounded border-gray-300 pt-4 h-50 ml-50 mr-50 bg-red-300 w-300"
                >
                    <p-header>Recent Rolls</p-header>
                    @if (recentRolls().length > 0) {
                    <div class="flex flex-wrap gap-1 mt-2 max-h-20 overflow-y-auto">
                        @for(roll of recentRolls(); track idx; let idx = $index) {
                        <span class="px-1 py-0.5 bg-white rounded text-sm text-gray-800">{{
                            roll
                        }}</span>
                        }
                    </div>
                    } @else {
                    <p>No recent rolls</p>
                    }
                </div>
            </div>
        </p-card>
    </div>`,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('rollDice', [
            state('idle', style({ transform: 'scale(1) rotate(0deg)' })),
            state('rolling', style({ transform: 'scale(1.1) rotate(360deg)' })),
            transition('idle => rolling', [animate('600ms ease-in-out')]),
            transition('rolling => idle', [animate('200ms ease-out')]),
        ]),
    ],
})
export class DiceComponent {
    availableDices = input<number[]>([3, 4, 6, 8, 10, 12, 20, 100]);
    selectedDices = input<number[]>([]);
    rollResults = input<number[]>([]);
    recentRolls = signal<number[]>([]);
    enableDuplicates = input<boolean>(true);
    maxDiceCount = input<number>(7);
    isRolling = signal<boolean>(false);

    get totalRollResult(): number {
        return this.rollResults().reduce((a, b) => a + b, 0);
    }

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
        if (this.selectedDices().length === 0) {
            console.warn('No dice selected to roll');
            return;
        }
        this.isRolling.set(true);

        setTimeout(() => {
            const results = this.selectedDices().map(
                (dice) => Math.floor(Math.random() * dice) + 1
            );
            this.rollResults().length = 0;
            this.rollResults().push(...results);

            this.recentRolls().push(...results);
            if (this.recentRolls().length > 10) {
                this.recentRolls().splice(0, this.recentRolls().length - 10);
            }

            this.isRolling.set(false);
        }, 1000);
    }

    clearRolls() {
        this.selectedDices().length = 0;
        this.rollResults().length = 0;
    }

    getDiceColor(diceValue: number, dice: number): string {
        switch (diceValue) {
            case 20:
                return dice === 20 ? 'bg-yellow-500' : 'bg-blue-500';
            case 1:
                return dice === 20 ? 'bg-red-500' : 'bg-blue-500';
            default:
                return 'bg-blue-500';
        }
    }
}
