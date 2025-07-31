import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AbilityAssignMap } from '../../models/ability-assign.map';
@Component({
    selector: 'app-assign-ability-points',
    imports: [JsonPipe],
    template: `{{ abilityPointsMap() | json}}
        <div class="flex flex-col justify-center items-center w-full mx-auto mt-4"></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignAbilityPointsComponent {
    abilityPointsMap = input<AbilityAssignMap>();
}
