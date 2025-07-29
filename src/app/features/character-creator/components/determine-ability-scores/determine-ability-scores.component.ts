import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from 'primeng/card';
import { AbilityScoreDicesComponent } from './components/ability-score-dices/ability-score-dices.component';

@Component({
    selector: 'app-determine-ability-scores',
    imports: [Card, AbilityScoreDicesComponent],
    template: `<div class="flex flex-col justify-center items-center w-full mx-auto mt-4">
        <p-card class="flex justify-center items-center w-full mx-auto mt-4">
            <div class="flex flex-col justify-center items-center">
                <p
                    class="text-3xl font-bold mb-4 drop-shadow-lg transition-colors duration-300 text-white"
                >
                    Determine Ability Scores
                </p>
                <p class="text-xl">1) Roll 4d6 and drop the lowest die</p>
                <p class="text-xl">2) Repeat for each ability score for total of 6 scores</p>
                <p class="text-xl">3) Assign scores to abilities as desired</p>
            </div>
            <app-ability-score-dices class="mt-6"></app-ability-score-dices>
        </p-card>
    </div>`,
    styles: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetermineAbilityScoresComponent {}
