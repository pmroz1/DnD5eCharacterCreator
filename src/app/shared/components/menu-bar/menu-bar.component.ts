import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { Dialog } from 'primeng/dialog';

@Component({
    selector: 'app-menu-bar',
    standalone: true,
    imports: [MenubarModule, ButtonModule, Dialog],
    template: `<p-menubar [model]="items">
        <ng-template pTemplate="end"
            ><p-button label="Roll a dice!" severity="warn" (click)="showDialog()" />
            <p-dialog
                header="Header"
                [modal]="true"
                [(visible)]="visible"
                [style]="{ width: '50rem' }"
            >
                <p>Dialog content goes here...</p>
            </p-dialog>
        </ng-template>
    </p-menubar>`,
    styleUrl: './menu-bar.component.scss',
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
