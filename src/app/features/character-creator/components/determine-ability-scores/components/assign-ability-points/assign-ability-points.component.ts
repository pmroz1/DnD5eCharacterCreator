import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';
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
            <p-chart type="radar" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
        </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignAbilityPointsComponent implements OnInit {
    abilityPointsMap = input<AbilityAssignMap>();
    updatedAbilityPointsMap = output<AbilityAssignMap>();
    selectedValueDice = input<number>(0);

    data: any;
    options: any;

    ngOnInit() {
        this.data = {
            labels: this.objectKeys(this.abilityPointsMap()),
            datasets: [
                {
                    label: 'Ability Points',
                    data: this.objectKeys(this.abilityPointsMap()).map(
                        (key) => this.abilityPointsMap()?.[key]
                    ),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        };

        this.options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Ability Points Distribution',
                },
            },
        };
    }

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
