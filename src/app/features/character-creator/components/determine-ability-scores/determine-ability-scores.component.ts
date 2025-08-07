import { AfterViewInit, ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { AbilityScoreDicesComponent } from './components/ability-score-dices/ability-score-dices.component';
import { DiceSet } from './models/dice-set.model';
import { AssignAbilityPointsComponent } from './components/assign-ability-points/assign-ability-points.component';
import { AbilityAssignMap } from './models/ability-assign.map';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-determine-ability-scores',
    imports: [AbilityScoreDicesComponent, AssignAbilityPointsComponent, CommonModule],
    templateUrl: './determine-ability-scores.component.html',
    styleUrls: ['./determine-ability-scores.component.scss'],
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
    usedDiceIds = signal<Set<number>>(new Set());
    selectedDiceId = signal<number>(0);

    assignedCount = computed(() => {
        const abilityMap = this.abilityPointsMap();
        return Object.values(abilityMap).filter((value) => value > 0).length;
    });

    progressPercentage = computed(() => {
        return (this.assignedCount() / 6) * 100;
    });

    ngAfterViewInit(): void {
        this.rollPoints();
    }

    rollPoints() {
        this.resetSignal.set(true);
        this.isLocked.set(false);
        this.selectedValueDice.set(0);
        this.selectedDiceId.set(0);
        this.usedDiceIds.set(new Set());

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

        if (diceSetId > 0 && this.usedDiceIds().has(diceSetId)) {
            console.log(`Dice ${diceSetId} is already used`);
            return;
        }

        if (diceSetId === 0) {
            this.isLocked.set(false);
            this.selectedValueDice.set(0);
            this.selectedDiceId.set(0);
        } else {
            this.isLocked.set(true);
            this.selectedDiceId.set(diceSetId);
            this.selectedValueDice.set(
                this.getRollTotal(this.diceSets().find((ds) => ds.id === diceSetId)?.rolls || [])
            );
        }
    }

    unlockSelection() {
        this.isLocked.set(false);
        this.selectedValueDice.set(0);
        this.selectedDiceId.set(0);
        this.resetSignal.set(true);
        setTimeout(() => this.resetSignal.set(false), 100);
    }

    getRollTotal(rolls: number[]) {
        const sortedRolls = [...rolls].slice(0, 3);
        return sortedRolls.reduce((acc, sortedRoll) => acc + sortedRoll);
    }

    updatedAbilityPointsMap($event: AbilityAssignMap) {
        console.log('Updating ability points map:', $event);

        const currentDiceId = this.selectedDiceId();
        if (currentDiceId > 0) {
            const newUsedIds = new Set(this.usedDiceIds());
            newUsedIds.add(currentDiceId);
            this.usedDiceIds.set(newUsedIds);
            console.log('Used dice IDs:', Array.from(newUsedIds));
        }

        this.abilityPointsMap.set($event);

        this.isLocked.set(false);
        this.selectedValueDice.set(0);
        this.selectedDiceId.set(0);

        this.resetSignal.set(true);
        setTimeout(() => this.resetSignal.set(false), 50);
    }
}
