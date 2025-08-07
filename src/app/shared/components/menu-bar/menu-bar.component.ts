import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { Dialog } from 'primeng/dialog';
import { DiceComponent } from '@shared/dice/dice.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu-bar',
    imports: [MenubarModule, ButtonModule, Dialog, DiceComponent, CommonModule, RouterModule],
    template: `<div
        class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
        <div class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div
                        class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                    >
                        <i class="pi pi-bolt text-white text-xl"></i>
                    </div>
                    <div>
                        <h1
                            class="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                        >
                            D&D 5e Creator
                        </h1>
                        <p class="text-xs text-white/60">Character Builder</p>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    @for (item of items; track item.label) {
                    <a
                        [routerLink]="item.routerLink"
                        class="group flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white hover:text-blue-300"
                    >
                        <i
                            [class]="item.icon"
                            class="text-sm group-hover:scale-110 transition-transform duration-300"
                        ></i>
                        <span class="font-medium">{{ item.label }}</span>
                        @if (item.badge) {
                        <span class="px-2 py-1 bg-red-500 text-white text-xs rounded-full">{{
                            item.badge
                        }}</span>
                        }
                    </a>
                    }

                    <button
                        (click)="showDialog()"
                        class="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1"
                    >
                        <i
                            class="pi pi-refresh group-hover:rotate-180 transition-transform duration-500"
                        ></i>
                        Roll Dice!
                    </button>
                </div>
            </div>
        </div>

        <p-dialog
            maskStyleClass="backdrop-blur-sm"
            [(visible)]="visible"
            styleClass="!border-0 !bg-transparent"
            [modal]="true"
            [closeOnEscape]="true"
            [dismissableMask]="true"
            [draggable]="false"
            [resizable]="false"
        >
            <ng-template #headless>
                <div
                    class="backdrop-blur-md bg-black/80 border border-white/20 rounded-2xl p-6 shadow-2xl"
                >
                    <app-dice></app-dice>
                </div>
            </ng-template>
        </p-dialog>
    </div>`,
    styles: `
        :host {
            position: relative;
            z-index: 1000;
        }
        
        .backdrop-blur-md {
            backdrop-filter: blur(12px);
        }
        
        .shadow-orange-500\\/25 {
            box-shadow: 0 25px 50px -12px rgba(249, 115, 22, 0.25);
        }
    `,
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
