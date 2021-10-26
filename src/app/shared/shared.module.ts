import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MclarenHeaderComponent } from './components/mclaren/mclaren-header/mclaren-header.component';
import { MclarenFooterComponent } from './components/mclaren/mclaren-footer/mclaren-footer.component';
import { FerrariHeaderComponent } from './components/ferrari/ferrari-header/ferrari-header.component';
import { FerrariFooterComponent } from './components/ferrari/ferrari-footer/ferrari-footer.component';
import { LamborghiniHeaderComponent } from './components/lamborghini/lamborghini-header/lamborghini-header.component';
import { LamborghiniFooterComponent } from './components/lamborghini/lamborghini-footer/lamborghini-footer.component';
import { BugattiHeaderComponent } from './components/bugatti/bugatti-header/bugatti-header.component';
import { BugattiFooterComponent } from './components/bugatti/bugatti-footer/bugatti-footer.component';
import { AstonMartinFooterComponent } from './components/aston-martin/aston-martin-footer/aston-martin-footer.component';
import { AstonMartinHeaderComponent } from './components/aston-martin/aston-martin-header/aston-martin-header.component';
import { MerdecezHeaderComponent } from './components/mercedez/merdecez-header/merdecez-header.component';
import { MerdecezFooterComponent } from './components/mercedez/merdecez-footer/merdecez-footer.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MclarenHeaderComponent,
    MclarenFooterComponent,
    FerrariHeaderComponent,
    FerrariFooterComponent,
    LamborghiniHeaderComponent,
    LamborghiniFooterComponent,
    BugattiHeaderComponent,
    BugattiFooterComponent,
    AstonMartinFooterComponent,
    AstonMartinHeaderComponent,
    MerdecezHeaderComponent,
    MerdecezFooterComponent,
    
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MclarenHeaderComponent,
    MclarenFooterComponent,
    FerrariHeaderComponent,
    FerrariFooterComponent,
    LamborghiniHeaderComponent,
    LamborghiniFooterComponent,
    BugattiHeaderComponent,
    BugattiFooterComponent,
    AstonMartinFooterComponent,
    AstonMartinHeaderComponent,
    MerdecezHeaderComponent,
    MerdecezFooterComponent,
   
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  
})
export class SharedModule { }
