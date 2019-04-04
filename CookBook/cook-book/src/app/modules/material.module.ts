import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatSidenavModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatSidenavModule,
        MatGridListModule
    ],
})

export class MaterialModule { }