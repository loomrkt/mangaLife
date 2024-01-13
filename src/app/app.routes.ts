import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutEmptyComponent } from './layouts/layout-empty/layout-empty.component';
import { AccueilPageComponent } from './pages/accueilPage/accueilPage.component';
import { ElementPagesComponent } from './pages/elementPages/elementPages.component';
import { ConnexionPageComponent } from './pages/authentification/connexionPage/connexionPage.component';
import { InscriptionPageComponent } from './pages/authentification/InscriptionPage/InscriptionPage.component';
import { PanierPageComponent } from './pages/panierPage/panierPage.component';
export const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children: [
      {path:"", component: AccueilPageComponent},
      {path:"element", component: ElementPagesComponent}
    ]
  },
  {
    path:"authentification",
    component: LayoutEmptyComponent,
    children: [
      {path:"", component: ConnexionPageComponent},
      {path:"inscription", component: InscriptionPageComponent}
    ]
  },
  {
    path:"panier",
    component: LayoutEmptyComponent,
    children: [
      {path:"", component: PanierPageComponent}
    ]
  },
  {
    path: "**",
    redirectTo: ""
}
];
