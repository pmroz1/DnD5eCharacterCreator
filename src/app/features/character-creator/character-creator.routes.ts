import { Route } from "@angular/router";
import { CharacterCreatorComponent } from "./pages/character-creator/character-creator.component";

export const CHARACTER_CREATOR_ROUTES: Route[] = [
  {
    path: '',
    component: CharacterCreatorComponent
  }
];