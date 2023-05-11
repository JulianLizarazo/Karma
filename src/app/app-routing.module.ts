import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  // {
  //   path: "home",
  //   loadChildren: () => import("./inicio/inicio.module").then(m => m.HomeModule),
    
  // },
  // {
  //   path: "mclaren",
  //   loadChildren: () => import("./kawasaki/kawasaki.module").then(m => m.MclarenModule)
    
  // },
  // {
  //   path: "mclaren/roadster",
  //   loadChildren: () => import("./kawasaki/marcas/kawasaki-scooter/kawasaki-scooter.module").then(m => m.MclarenRoadsterModule)
    
  // },
  // {
  //   path: "mclaren/altas-prestaciones",
  //   loadChildren: () => import("./kawasaki/marcas/kawasaki-cruiser/kawasaki-cruiser.module").then(m => m.MclarenAltasPrestacionesModule)
    
  // },
  // {
  //   path: "mclaren/gran-turismo",
  //   loadChildren: () => import("./kawasaki/marcas/kawasaki-deportivo/kawasaki-deportivo.module").then(m => m.MclarenGranTurismoModule)
    
  // },
  // {
  //   path: "mclaren/muscle-car",
  //   loadChildren: () => import("./kawasaki/marcas/kawasaki-enduro/kawasaki-enduro.module").then(m => m.MclarenMusclecarModule)
    
  // },
  // {
  //   path: "mclaren/superdeportivo",
  //   loadChildren: () => import("./kawasaki/marcas/kawasaki-touring/kawasaki-touring.module").then(m => m.MclarenSuperdeportivoModule)
    
  // },
  
  // {
  //   path: "ferrari",
  //   loadChildren: () => import("./yamaha/yamaha.module").then(m => m.FerrariModule)
    
  // },
  // {
  //   path: "ferrari/roadster",
  //   loadChildren: () => import("./yamaha/marcas/yamaha-scooter/yamaha-scooter.module").then(m => m.FerrariRoadsterModule)
    
  // },
  // {
  //   path: "ferrari/muscle-car",
  //   loadChildren: () => import("./yamaha/marcas/yamaha-enduro/yamaha-enduro.module").then(m => m.FerrariMusclecarModule)
    
  // },
  // {
  //   path: "ferrari/altas-prestaciones",
  //   loadChildren: () => import("./yamaha/marcas/yamaha-deportivo/yamaha-deportivo.module").then(m => m.FerrariAltasPrestacionesModule)
    
  // },
  // {
  //   path: "ferrari/superdeportivo",
  //   loadChildren: () => import("./yamaha/marcas/yamaha-touring/yamaha-touring.module").then(m => m.FerrariSuperdeportivoModule)
    
  // },
  // {
  //   path: "ferrari/gran-turismo",
  //   loadChildren: () => import("./yamaha/marcas/yamaha-cruiser/yamaha-cruiser.module").then(m => m.FerrariGranTurismoModule)
    
  // },
  // {
  //   path: "marcas",
  //   loadChildren: () => import("./marcas/marcas.module").then(m => m.MarcasModule)
    
  // },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
    
  },
  // {
  //   path: "vehicle/:id_vehicle",
  //   loadChildren: () => import("./detalle-moto/vehicle-detail.module").then(m => m.VehicleDetailModule)
    
  // },
  // {
  //   path: "order/:id_vehicle",
  //   loadChildren: () => import("./orden/orden.module").then(m => m.OrderModule)
    
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
