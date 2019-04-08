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
    MatInputModule,
    MatTabsModule
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
        MatInputModule,
        MatTabsModule
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
        MatInputModule,
        MatTabsModule
    ],
})

export class MaterialModule { }