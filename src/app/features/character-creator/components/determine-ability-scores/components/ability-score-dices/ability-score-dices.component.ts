import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { DiceSet } from '../../models/dice-set.model';

@Component({
    selector: 'app-ability-score-dices',
    imports: [],
    template: `
        <div>
            <div class="h-full w-full grid grid-cols-3 gap-4 p-4">
                @for (diceSet of diceSets(); track $index) {
                <div
                    class="flex flex-col justify-center items-center p-ripple group cursor-pointer backdrop-blur-sm rounded-xl shadow-xl w-full flex flex-col overflow-hidden transform itemClass h-auto bg-white/10 border border-white/20"
                    (click)="selectRoll(diceSet)"
                >
                    <div class="text-xl font-semibold">Dice Set {{ diceSet.id }}</div>
                    <div class="flex space-x-2">
                        @for (roll of diceSet.rolls; track $index; let i = $index) {
                        <div class="text-center text-lg font-bold">
                            <p class="{{ i === 3 ? 'text-red-500' : '' }}">{{ roll }}</p>
                        </div>
                        }
                    </div>
                    <div class="flex text-3xl font-bold text-white pt-2">
                        <p>{{ getRollTotal(diceSet.rolls) }}</p>
                    </div>
                </div>
                }
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbilityScoreDicesComponent {
    diceSets = input<DiceSet[]>();
    selectedRollEvent = output<number>();

    getRollTotal(rolls: number[]) {
        const sortedRolls = [...rolls].slice(0, 3);
        return sortedRolls.reduce((acc, sortedRoll) => acc + sortedRoll);
    }

    selectRoll(diceSet: DiceSet) {
        const set = diceSet.id;
        this.selectedRollEvent.emit(set);
    }
}
