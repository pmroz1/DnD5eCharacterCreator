import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'character-creator',
        loadChildren: () => import('./features/character-creator/character-creator.routes').then(m => m.CHARACTER_CREATOR_ROUTES)
    },
    {
        path: 'character-viewer',
        loadChildren: () => import('./features/character-viewer/character-viewer.routes').then(m => m.CHARACTER_VIEWER_ROUTES)
    }
];
