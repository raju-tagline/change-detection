import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    GrandParentComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    FormsModule
  ]
})
export class ChangeDetectionModule { }
