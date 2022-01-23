import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SourcePageModule } from './source/source.module';
import { SourcePage } from './source/source.page';
import { SourceformComponent } from './sourceform/sourceform.component';
import { Tab2Page } from './tab2/tab2.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'source',
    loadChildren: () => import('./source/source.module').then(m => m.SourcePageModule)
  },
  {
    path: 'sourceform',
    component: SourceformComponent
  }
  ,{ path: ':name', component: Tab2Page }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
