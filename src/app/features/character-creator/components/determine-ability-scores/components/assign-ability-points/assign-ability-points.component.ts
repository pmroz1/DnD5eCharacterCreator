import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AbilityAssignMap } from '../../models/ability-assign.map';
@Component({
    selector: 'app-assign-ability-points',
    imports: [JsonPipe],
    template: `{{ abilityPointsMap() | json }}
        <div class="flex flex-col justify-center items-center w-full mx-auto mt-4">
            @if(abilityPointsMap() !== null && abilityPointsMap() !== undefined) { @for(map of
            objectKeys(abilityPointsMap()); track map) {
            <div
                class="flex justify-between w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md mb-2"
            >
                <span class="font-semibold text-lg">{{ map }}</span>
                <span class="text-xl font-bold">{{ abilityPointsMap()?.[map] }}</span>
            </div>
            }} @else {
            <p class="text-gray-500">No ability points assigned yet.</p>
            }
        </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignAbilityPointsComponent {
    abilityPointsMap = input<AbilityAssignMap>();

    objectKeys(obj: AbilityAssignMap | null | undefined): string[] {
        return Object.keys(obj || {});
    }
}
