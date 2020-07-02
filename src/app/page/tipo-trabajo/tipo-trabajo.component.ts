import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-tipo-trabajo',
  templateUrl: './tipo-trabajo.component.html',
  styleUrls: ['./tipo-trabajo.component.css']
})
export class TipoTrabajoComponent implements OnInit {
  form: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.initForm();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  private initForm(): void {
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),

    })
  }
  clickenviar(): void {
    console.log("enviando...")
  }

}
