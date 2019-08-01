import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KuceComponent } from './kuce/kuce.component';
import { Routes, RouterModule } from '@angular/router';
import { StanoviComponent } from './stanovi/stanovi.component';
import { ZemljistaComponent } from './zemljista/zemljista.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/kuce', pathMatch: 'full' },
  { path: 'kuce', component: KuceComponent },
  { path: 'stanovi', component: StanoviComponent },
  { path: 'zemljista', component: ZemljistaComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
