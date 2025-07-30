import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-ability-score-dices',
    imports: [],
    template: `
        <div>
            <div class="h-full w-full grid grid-cols-3 gap-4 p-4">
                @for (diceSet of diceSets(); track $index) {
                <div
                    class="flex flex-col justify-center items-center p-ripple group cursor-pointer backdrop-blur-sm rounded-xl shadow-xl w-full flex flex-col overflow-hidden transform itemClass h-auto bg-white/10 border border-white/20"
                >
                    <div class="text-lg font-semibold">Dice Set {{ diceSet.id }}</div>
                    <div class="flex space-x-2">
                        @for (roll of diceSet.rolls; track $index) {
                        <div class="flex-1">
                            <div class="text-center">{{ roll }}</div>
                        </div>
                        }
                    </div>
                </div>
                }
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbilityScoreDicesComponent {
    diceSets = input<{ id: number; rolls: number[] }[]>();
}
