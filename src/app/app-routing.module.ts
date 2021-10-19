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
  {
    path: "marcas",
    loadChildren: () => import("./marcas/marcas.module").then(m => m.MarcasModule)
    
  },
  {
    path: "about-us",
    loadChildren: () => import("./about-us/about-us.module").then(m => m.AboutUsModule)
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
