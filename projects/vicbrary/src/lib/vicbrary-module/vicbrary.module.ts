import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal.component';



@NgModule({
  declarations: [SpinnerComponent, ButtonComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent, ButtonComponent, ModalComponent
  ]
})
export class VicbraryModule { }
