import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AbilityAssignMap } from '../../models/ability-assign.map';
@Component({
    selector: 'app-assign-ability-points',
    imports: [],
    template: ` <div class="flex flex-row gap-2">
        <div class="flex flex-col justify-center items-center w-full mx-auto mt-4">
            @if(abilityPointsMap() !== null && abilityPointsMap() !== undefined) { @for(map of
            objectKeys(abilityPointsMap()); track map) {
            <div
                class="flex justify-between items-center p-ripple 
        backdrop-blur-sm rounded-xl shadow-xl w-1/2 overflow-hidden h-15 
        transform itemClass bg-white/10 border border-white/20 mb-2 mt-2"
            >
                <div class="font-semibold text-2xl pl-4 pr-4">{{ map }}:</div>
                <div class="text-2xl font-bold pl-4 pr-4">{{ abilityPointsMap()?.[map] }}</div>
            </div>
            }} @else {
            <p class="text-gray-500">No ability points assigned yet.</p>
            }
        </div>
        <div class="flex flex-col justify-center items-center w-full mx-auto mt-4">
            <p class="text-gray-500">Total Points: {{ objectKeys(abilityPointsMap()).length }}</p>
        </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignAbilityPointsComponent {
    abilityPointsMap = input<AbilityAssignMap>();

    objectKeys(obj: AbilityAssignMap | null | undefined): string[] {
        return Object.keys(obj || {});
    }
}
