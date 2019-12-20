import { NgModule } from '@angular/core';
import { fromServices } from './index';

@NgModule({
    imports: [],
    declarations: [],
    providers: [...fromServices],
    exports: []
})
export class ServicesModule {}