import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { DiceSet } from '../../models/dice-set.model';

@Component({
    selector: 'app-ability-score-dices',
    template: `
        <div>
            <div class="h-full w-full grid grid-cols-3 gap-4 p-4">
                @for (diceSet of diceSets(); track $index) {
                <div
                    class="flex flex-col justify-center items-center 
                    p-ripple group cursor-pointer backdrop-blur-sm rounded-xl 
                    shadow-xl w-full flex flex-col overflow-hidden transform itemClass 
                    h-auto bg-white/10 border-2 border-white/20
                    bg-gradient-to-b from-gray-800/20 via-gray-700/20 to-gray-600/20 border-2 border-gray-500/30 shadow-lg shadow-gray-500/20 transition-colors duration-300
                    "
                    class='{{ getCardClasses(diceSet.id) }}'
                    (click)="isLocked() ? $event.stopPropagation() : selectRoll(diceSet)"
                >
                    <div class="text-xl font-semibold">Dice Set {{ diceSet.id }}</div>
                    <div class="flex space-x-2">
                        @for (roll of diceSet.rolls; track $index; let i = $index) {
                        <div class="text-center text-lg font-bold">
                            <p class="{{ i === 3 ? 'text-red-500' : '' }}">{{ roll }}</p>
                        </div>
                        }
                    </div>
                    <div class="flex text-3xl font-bold text-white pt-2 mb-2">
                        <p>
                            {{
                                getRollTotal(diceSet.rolls) === -3
                                    ? 'No Valid Rolls'
                                    : getRollTotal(diceSet.rolls)
                            }}
                        </p>
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
    selectedRoll = signal<number>(0);
    isLocked = signal<boolean>(false);

    getRollTotal(rolls: number[]) {
        const sortedRolls = [...rolls].slice(0, 3);
        return sortedRolls.reduce((acc, sortedRoll) => acc + sortedRoll);
    }

    selectRoll(diceSet: DiceSet) {
        const selectedSet = diceSet.id;
        this.selectedRoll.set(selectedSet);
        this.isLocked.set(true);
        this.selectedRollEvent.emit(selectedSet);
    }

    getCardClasses(number: number) {
        if (this.selectedRoll() === 0) {
            return '';
        }

        if (this.selectedRoll() === number) {
            return 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border-2 border-blue-400/60 shadow-2xl shadow-blue-400/20 drop-shadow-lg transition-colors duration-300';
        }

        return 'text-zinc-500 opacity-50 pointer-events-none bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:scale-104 transition-all duration-300';
    }
}
