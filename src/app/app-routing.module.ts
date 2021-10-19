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
    path: "mclaren/roadster",
    loadChildren: () => import("./mclaren/brands/mclaren-roadster/mclaren-roadster.module").then(m => m.MclarenRoadsterModule)
    
  },
  {
    path: "mclaren/altas-prestaciones",
    loadChildren: () => import("./mclaren/brands/mclaren-altas-prestaciones/mclaren-altas-prestaciones.module").then(m => m.MclarenAltasPrestacionesModule)
    
  },
  {
    path: "mclaren/gran-turismo",
    loadChildren: () => import("./mclaren/brands/mclaren-gran-turismo/mclaren-gran-turismo.module").then(m => m.MclarenGranTurismoModule)
    
  },
  {
    path: "mclaren/muscle-car",
    loadChildren: () => import("./mclaren/brands/mclaren-musclecar/mclaren-musclecar.module").then(m => m.MclarenMusclecarModule)
    
  },
  {
    path: "mclaren/superdeportivo",
    loadChildren: () => import("./mclaren/brands/mclaren-superdeportivo/mclaren-superdeportivo.module").then(m => m.MclarenSuperdeportivoModule)
    
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
    path: "bugatti/roadster",
    loadChildren: () => import("./bugatti/brands/bugatti-roadster/bugatti-roadster.module").then(m => m.BugattiRoadsterModule)
    
  },
  {
    path: "bugatti/muscle-car",
    loadChildren: () => import("./bugatti/brands/bugatti-musclecar/bugatti-musclecar.module").then(m => m.BugattiMusclecarModule)
    
  },
  {
    path: "bugatti/altas-prestaciones",
    loadChildren: () => import("./bugatti/brands/bugatti-altas-prestaciones/bugatti-altas-prestaciones.module").then(m => m.BugattiAltasPrestacionesModule)
    
  },
  {
    path: "bugatti/superdeportivo",
    loadChildren: () => import("./bugatti/brands/bugatti-superdeportivo/bugatti-superdeportivo.module").then(m => m.BugattiSuperdeportivoModule)
    
  },
  {
    path: "bugatti/gran-turismo",
    loadChildren: () => import("./bugatti/brands/bugatti-gran-turismo/bugatti-gran-turismo.module").then(m => m.BugattiGranTurismoModule)
    
  },
  {
    path: "ferrari",
    loadChildren: () => import("./ferrari/ferrari.module").then(m => m.FerrariModule)
    
  },
  {
    path: "ferrari/roadster",
    loadChildren: () => import("./ferrari/brands/ferrari-roadster/ferrari-roadster.module").then(m => m.FerrariRoadsterModule)
    
  },
  {
    path: "ferrari/muscle-car",
    loadChildren: () => import("./ferrari/brands/ferrari-musclecar/ferrari-musclecar.module").then(m => m.FerrariMusclecarModule)
    
  },
  {
    path: "ferrari/altas-prestaciones",
    loadChildren: () => import("./ferrari/brands/ferrari-altas-prestaciones/ferrari-altas-prestaciones.module").then(m => m.FerrariAltasPrestacionesModule)
    
  },
  {
    path: "ferrari/superdeportivo",
    loadChildren: () => import("./ferrari/brands/ferrari-superdeportivo/ferrari-superdeportivo.module").then(m => m.FerrariSuperdeportivoModule)
    
  },
  {
    path: "ferrari/gran-turismo",
    loadChildren: () => import("./ferrari/brands/ferrari-gran-turismo/ferrari-gran-turismo.module").then(m => m.FerrariGranTurismoModule)
    
  },
  {
    path: "lamborghini",
    loadChildren: () => import("./lamborghini/lamborghini.module").then(m => m.LamborghiniModule)
    
  },
  {
    path: "lamborghini/roadster",
    loadChildren: () => import("./lamborghini/brands/lamborghini-roadster/lamborghini-roadster.module").then(m => m.LamborghiniRoadsterModule)
    
  },
  {
    path: "lamborghini/muscle-car",
    loadChildren: () => import("./lamborghini/brands/lamborghini-musclecar/lamborghini-musclecar.module").then(m => m.LamborghiniMusclecarModule)
    
  },
  {
    path: "lamborghini/altas-prestaciones",
    loadChildren: () => import("./lamborghini/brands/lamborghini-altas-prestaciones/lamborghini-altas-prestaciones.module").then(m => m.LamborghiniAltasPrestacionesModule)
    
  },
  {
    path: "lamborghini/superdeportivo",
    loadChildren: () => import("./lamborghini/brands/lamborghini-superdeportivo/lamborghini-superdeportivo.module").then(m => m.LamborghiniSuperdeportivoModule)
    
  },
  {
    path: "lamborghini/gran-turismo",
    loadChildren: () => import("./lamborghini/brands/lamborghini-gran-turismo/lamborghini-gran-turismo.module").then(m => m.LamborghiniGranTurismoModule)
    
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
