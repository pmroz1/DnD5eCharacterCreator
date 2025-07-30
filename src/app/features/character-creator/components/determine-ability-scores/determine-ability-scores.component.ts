import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from 'primeng/card';
import { AbilityScoreDicesComponent } from './components/ability-score-dices/ability-score-dices.component';
import { Button } from 'primeng/button';
import { DiceSet } from './models/dice-set.model';

@Component({
    selector: 'app-determine-ability-scores',
    imports: [Card, AbilityScoreDicesComponent, Button],
    template: `<div class="flex flex-col justify-center items-center w-full mx-auto mt-4">
        <p-card class="flex justify-center items-center w-full mx-auto mt-4">
            <div class="flex flex-col justify-center items-center">
                <p
                    class="text-5xl font-bold mb-4 drop-shadow-lg transition-colors duration-300 text-white"
                >
                    Determine Ability Scores
                </p>
                <p class="text-xl">1) Roll 4d6 and discard the lowest die</p>
                <p class="text-xl">2) Repeat for each ability score for total of 6 scores</p>
                <p class="text-xl">3) Assign scores to abilities as desired</p>
                <p-button class="pt-5 pb-3" (click)="rollPoints()">Roll points</p-button>
            </div>
            <app-ability-score-dices
                [diceSets]="diceSets()"
                class="mt-6"
                (selectedRoll)="onSelectedRoll($event)"
            ></app-ability-score-dices>
        </p-card>
    </div>`,
    styles: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetermineAbilityScoresComponent {
    diceSets = signal([
        { id: 1, rolls: [-1, -1, -1, -1] },
        { id: 2, rolls: [-1, -1, -1, -1] },
        { id: 3, rolls: [-1, -1, -1, -1] },
        { id: 4, rolls: [-1, -1, -1, -1] },
        { id: 5, rolls: [-1, -1, -1, -1] },
        { id: 6, rolls: [-1, -1, -1, -1] },
    ]);

    rollPoints() {
        this.diceSets.update((set) => {
            return set.map((diceSet) => {
                const newRolls = this.rollDice();
                return { ...diceSet, rolls: newRolls };
            });
        });
    }

    rollDice() {
        const rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls.sort((a, b) => b - a);
        return rolls;
    }

    onSelectedRoll($event: DiceSet) {
        console.log('Selected Roll:', $event);
    }
}
