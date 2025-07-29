import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-ability-score-dices',
    imports: [],
    template: `
        <div
            class="flex flex-col justify-center items-center p-ripple group cursor-pointer 
            backdrop-blur-sm rounded-xl shadow-xl w-full flex flex-col overflow-hidden 
            transform itemClass h-auto bg-white/10 border border-white/20"
        >
        <div>
          @for (diceSet of diceSets; track $index) {
        }
        </div>
      </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbilityScoreDicesComponent {
    diceSets = [
        { id: 1, rolls: [0, 0, 0, 0, 0] },
        { id: 2, rolls: [0, 0, 0, 0, 0] },
        { id: 3, rolls: [0, 0, 0, 0, 0] },
        { id: 4, rolls: [0, 0, 0, 0, 0] },
        { id: 5, rolls: [0, 0, 0, 0, 0] },
        { id: 6, rolls: [0, 0, 0, 0, 0] },
    ];
}
