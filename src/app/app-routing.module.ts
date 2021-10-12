import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
    
  },
  {
    path: "mclaren",
    loadChildren: () => import("./mclaren/mclaren.module").then(m => m.MclarenModule)
    
  },
  {
    path: "aston-martin",
    loadChildren: () => import("./aston-martin/aston-martin.module").then(m => m.AstonMartinModule)
    
  },
  {
    path: "bugatti",
    loadChildren: () => import("./bugatti/bugatti.module").then(m => m.BugattiModule)
    
  },
  {
    path: "ferrari",
    loadChildren: () => import("./ferrari/ferrari.module").then(m => m.FerrariModule)
    
  },
  {
    path: "lamborghini",
    loadChildren: () => import("./lamborghini/lamborghini.module").then(m => m.LamborghiniModule)
    
  },
  {
    path: "mercedez-benz",
    loadChildren: () => import("./mercedez-benz/mercedez-benz.module").then(m => m.MercedezBenzModule)
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
