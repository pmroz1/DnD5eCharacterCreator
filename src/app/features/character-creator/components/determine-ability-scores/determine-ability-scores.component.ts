import { AfterViewInit, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from 'primeng/card';
import { AbilityScoreDicesComponent } from './components/ability-score-dices/ability-score-dices.component';
import { Button } from 'primeng/button';
import { DiceSet } from './models/dice-set.model';
import { AssignAbilityPointsComponent } from './components/assign-ability-points/assign-ability-points.component';
import { AbilityAssignMap } from './models/ability-assign.map';

@Component({
    selector: 'app-determine-ability-scores',
    imports: [Card, AbilityScoreDicesComponent, Button, AssignAbilityPointsComponent],
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
                <p class="text-xl">
                    3) Assign scores to abilities as desired by clicking on the dice and then on the
                    ability
                </p>
                <div class="flex flex-row gap-2 items-center ">
                    <p-button class="pt-5 pb-3" (click)="rollPoints()">Roll points</p-button>
                    <p-button
                        class="pt-5 pb-3"
                        severity="contrast"
                        icon="pi pi-unlock"
                        ariaLabel="Unlock"
                        [disabled]="!isLocked()"
                        (click)="unlockSelection()"
                    ></p-button>
                </div>
            </div>
            <app-ability-score-dices
                [diceSets]="diceSets()"
                class="mt-6"
                (selectedRollEvent)="selectedRollEvent($event)"
                [resetSignal]="resetSignal()"
            ></app-ability-score-dices>
            <app-assign-ability-points
                class="mt-6"
                [abilityPointsMap]="abilityPointsMap()"
                [selectedValueDice]="selectedValueDice()"
                (updatedAbilityPointsMap)="updatedAbilityPointsMap($event)"
            ></app-assign-ability-points>
        </p-card>
    </div>`,
    styles: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetermineAbilityScoresComponent implements AfterViewInit {
    diceSets = signal([
        { id: 1, rolls: [-1, -1, -1, -1] },
        { id: 2, rolls: [-1, -1, -1, -1] },
        { id: 3, rolls: [-1, -1, -1, -1] },
        { id: 4, rolls: [-1, -1, -1, -1] },
        { id: 5, rolls: [-1, -1, -1, -1] },
        { id: 6, rolls: [-1, -1, -1, -1] },
    ] as DiceSet[]);

    abilityPointsMap = signal<{ [key: string]: number }>({
        STRENGTH: -1,
        DEXTERITY: -1,
        CONSTITUTION: -1,
        INTELLIGENCE: -1,
        WISDOM: -1,
        CHARISMA: -1,
    });

    isLocked = signal(false);
    resetSignal = signal(false);
    selectedValueDice = signal<number>(0);

    ngAfterViewInit(): void {
        this.rollPoints();
    }

    rollPoints() {
        this.resetSignal.set(true);
        this.isLocked.set(false);

        this.diceSets.update((set) => {
            return set.map((diceSet) => {
                const newRolls = this.rollDice();
                return { ...diceSet, rolls: newRolls };
            });
        });

        setTimeout(() => this.resetSignal.set(false), 100);
    }

    rollDice() {
        const rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls.sort((a, b) => b - a);
        return rolls;
    }

    selectedRollEvent(diceSetId: number) {
        console.log(`Selected roll for dice set ID: ${diceSetId}`);
        if (diceSetId === 0) {
            this.isLocked.set(false);
        } else {
            this.isLocked.set(true);
            this.selectedValueDice.set(
                this.getRollTotal(this.diceSets().find((ds) => ds.id === diceSetId)?.rolls || [])
            );
        }
    }

    unlockSelection() {
        this.resetSignal.set(true);
        this.isLocked.set(false);
        setTimeout(() => this.resetSignal.set(false), 100);
    }

    getRollTotal(rolls: number[]) {
        const sortedRolls = [...rolls].slice(0, 3);
        return sortedRolls.reduce((acc, sortedRoll) => acc + sortedRoll);
    }

    updatedAbilityPointsMap($event: AbilityAssignMap) {
        console.log('Updating ability points map:', $event);
        this.abilityPointsMap.set($event);
        this.isLocked.set(false);
        this.selectedValueDice.set(0);
        this.resetSignal.set(true);
    }
}
