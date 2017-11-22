import { NgModule, ModuleWithProviders } from '@angular/core';
import {LoadingModule} from './loading/loading.module';


@NgModule({
  imports: [
    LoadingModule,
  ],
  exports: [
    LoadingModule,
  ],
  declarations: [],
  providers: [],
})
export class NgxMultiUtilsModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: NgxMultiUtilsModule,
      providers: [
      ]
    };
  }
}
