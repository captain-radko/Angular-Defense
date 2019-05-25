import { NgModule } from "@angular/core";
import { MatJumbotronModule } from "@angular-material-extensions/jumbotron";

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
  MatTabsModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from "@angular/material";

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
    MatTabsModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule
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
    MatTabsModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
