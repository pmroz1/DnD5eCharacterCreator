import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
    computed,
} from '@angular/core';
import { AbilityAssignMap } from '../../models/ability-assign.map';
import { ChartModule } from 'primeng/chart';
@Component({
    selector: 'app-assign-ability-points',
    imports: [ChartModule],
    template: ` <div class="flex flex-row gap-2 justify-between items-center p-4">
        <div class="flex flex-col justify-center items-center w-full mx-auto mt-4">
            @if(abilityPointsMap() !== null && abilityPointsMap() !== undefined) { @for(map of
            objectKeys(abilityPointsMap()); track map) {
            <div
                class="flex justify-between items-center p-ripple 
                backdrop-blur-sm rounded-xl shadow-xl w-1/2 overflow-hidden h-15 
                transform itemClass bg-white/10 border border-white/20 mb-2 mt-2"
                (click)="updateAbilityPointsMap(map)"
            >
                <div class="font-semibold text-2xl pl-4 pr-4">{{ map }}:</div>
                <div class="text-2xl font-bold pl-4 pr-4">{{ abilityPointsMap()?.[map] }}</div>
            </div>
            }} @else {
            <p class="text-gray-500">No ability points assigned yet.</p>
            }
        </div>
        <div class="card flex justify-center w-full ">
            <p-chart type="radar" [data]="data()" [options]="options()" class="w-full md:w-[30rem]" />
        </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignAbilityPointsComponent {
    abilityPointsMap = input<AbilityAssignMap>();
    updatedAbilityPointsMap = output<AbilityAssignMap>();
    selectedValueDice = input<number>(0);

    data = computed(() => {
        return {
            labels: this.objectKeys(this.abilityPointsMap()),
            datasets: [
                {
                    label: 'Ability Points',
                    data: this.objectKeys(this.abilityPointsMap()).map(
                        (key) => this.abilityPointsMap()?.[key]
                    ),
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
                },
            ],
        };
    });

    options = computed(() => {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#ffffff'
                    }
                },
                title: {
                    display: true,
                    text: 'Ability Scores Distribution',
                    color: '#ffffff'
                },
            },
            scales: {
                r: {
                    angleLines: {
                        color: '#ffffff33'
                    },
                    grid: {
                        color: '#ffffff33'
                    },
                    pointLabels: {
                        color: '#ffffff'
                    },
                    ticks: {
                        color: '#ffffff',
                        backdropColor: 'transparent'
                    },
                    min: 0,
                    max: 20
                }
            }
        };
    });

    objectKeys(obj: AbilityAssignMap | null | undefined): string[] {
        return Object.keys(obj || {});
    }

    updateAbilityPointsMap(ability: string) {
        console.log(
            `Updating ability points for ${ability} with value ${this.selectedValueDice()}`
        );
        if (this.selectedValueDice() > 0) {
            const map = this.abilityPointsMap();
            if (map) {
                map[ability] = this.selectedValueDice();
                this.updatedAbilityPointsMap.emit(map);
            }
        }
    }
}
