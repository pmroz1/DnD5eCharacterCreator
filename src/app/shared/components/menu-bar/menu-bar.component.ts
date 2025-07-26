import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { Dialog } from 'primeng/dialog';
import { DiceComponent } from '@shared/dice/dice.component';

@Component({
    selector: 'app-menu-bar',
    standalone: true,
    imports: [MenubarModule, ButtonModule, Dialog, DiceComponent],
    template: `<p-menubar [model]="items">
        <ng-template pTemplate="end"
            ><p-button label="Roll a dice!" severity="warn" (click)="showDialog()" />
            <div class="card flex justify-center">
                <p-dialog
                    maskStyleClass="backdrop-blur-sm"
                    [(visible)]="visible"
                    styleClass="!border-0 !bg-transparent"
                >
                    <ng-template #headless><app-dice></app-dice></ng-template>
                </p-dialog>
            </div>
        </ng-template>
    </p-menubar>`,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {
    visible: boolean = false;

    showDialog() {
        this.visible = !this.visible;
    }

    items: MenuItem[] = [
        {
            label: 'New Character',
            icon: 'pi pi-plus',
            routerLink: '/character-creator',
        },
        {
            label: 'View Characters',
            icon: 'pi pi-list',
            badge: '0',
            routerLink: '/character-viewer',
        },
    ];
}
