import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
    computed,
} from '@angular/core';
import { AbilityAssignMap } from '@shared/models/ability-assign-map.model';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-assign-ability-points',
    imports: [ChartModule],
    template: ` 
        <div class="flex flex-row gap-2 justify-between items-center p-4">
            <div class="flex flex-col justify-center items-center w-full mx-auto mt-4">
                @if (abilityPointsMap(); as map) {
                    @for (ability of objectKeys(map); track ability) {
                        <div
                            [class]="getAbilityCardClasses(ability)"
                            (click)="assignAbility(ability)"
                        >
                            <div class="font-semibold text-2xl pl-4 pr-4">{{ ability }}:</div>
                            <div class="text-2xl font-bold pl-4 pr-4">
                                {{ map[ability] === -1 ? '-' : map[ability] }}
                            </div>
                        </div>
                    }
                } @else {
                    <p class="text-gray-500">No ability points assigned yet.</p>
                }
            </div>
            <div class="card flex justify-center w-full">
                <p-chart 
                    type="radar" 
                    [data]="chartData()" 
                    [options]="chartOptions()" 
                    class="w-full md:w-[30rem]" 
                />
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignAbilityPointsComponent {
    abilityPointsMap = input<AbilityAssignMap>();
    updatedAbilityPointsMap = output<AbilityAssignMap>();
    selectedValueDice = input<number>(0);

    private baseCardClasses = `
        flex justify-between items-center p-ripple backdrop-blur-sm rounded-xl 
        shadow-xl w-1/2 overflow-hidden h-15 transform itemClass bg-white/10 
        border border-white/20 mb-2 mt-2 transition-colors duration-300
    `;

    chartData = computed(() => {
        const map = this.abilityPointsMap();
        if (!map) return { labels: [], datasets: [] };

        const validValues = this.objectKeys(map)
            .map(key => map[key])
            .filter(value => value !== -1);

        return {
            labels: this.objectKeys(map),
            datasets: [
                {
                    label: 'Ability Points',
                    data: this.objectKeys(map).map(key => map[key] === -1 ? 0 : map[key]),
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

    chartOptions = computed(() => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: '#ffffff' }
            },
            title: {
                display: true,
                text: 'Ability Scores Distribution',
                color: '#ffffff'
            },
        },
        scales: {
            r: {
                angleLines: { color: '#ffffff33' },
                grid: { color: '#ffffff33' },
                pointLabels: { color: '#ffffff' },
                ticks: {
                    color: '#ffffff',
                    backdropColor: 'transparent'
                },
                min: 0,
                max: 20
            }
        }
    }));

    objectKeys(obj: AbilityAssignMap | null | undefined): string[] {
        return Object.keys(obj || {});
    }

    getAbilityCardClasses(ability: string): string {
        const map = this.abilityPointsMap();
        const hasValue = map?.[ability] !== -1;
        const canAssign = this.selectedValueDice() > 0 && !hasValue;

        if (hasValue) {
            return `${this.baseCardClasses} bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 border-green-400/60`;
        }

        if (canAssign) {
            return `${this.baseCardClasses} cursor-pointer hover:bg-white/15 hover:border-white/30 hover:shadow-2xl`;
        }

        return `${this.baseCardClasses} opacity-50 cursor-not-allowed`;
    }

    assignAbility(ability: string): void {
        const selectedValue = this.selectedValueDice();
        const currentMap = this.abilityPointsMap();
        
        if (selectedValue <= 0 || !currentMap || currentMap[ability] !== -1) {
            return;
        }

        const updatedMap = { ...currentMap };
        updatedMap[ability] = selectedValue;
        this.updatedAbilityPointsMap.emit(updatedMap);
    }
}