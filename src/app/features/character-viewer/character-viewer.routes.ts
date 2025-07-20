import { Route } from "@angular/router";
import { CharacterViewerComponent } from "./pages/character-viewer/character-viewer.component";

export const CHARACTER_VIEWER_ROUTES: Route[] = [
  {
    path: '',
    component: CharacterViewerComponent
  }
];