import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';

import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';


@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatSidenavModule,
        MatGridListModule,
        MatJumbotronModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatSidenavModule,
        MatGridListModule,
        MatJumbotronModule,
        MatIconModule,
        MatInputModule
    ],
})

export class MaterialModule { }