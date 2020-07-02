import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as _moment from 'moment';
import { group } from '@angular/animations';

const moment = _moment;


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  form: FormGroup;
  fechai: Date;
  fechafi: string = '';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  formGroup: FormGroup;

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;


  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.form = this.fb.group({
      nombreFormControl:['', Validators.required],
      apellidoFormControl:['', Validators.required]
    }),
      this.fb, group({
        identificacionFormControl:['', Validators.required],
        fechaNacimientoFormControl:['', Validators.required]
      })


    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstNameFormCtrl: ['', Validators.required],
          lastNameFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email]
        }),
      ])
    });

    this.nameFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.email]
    });
  }



  clickenviar(): void {
    console.log("enviando...")
    this.fechai = this.form.get('fechaNacimiento').value;
    this.fechafi = moment(this.fechai, 'MM DD YYYY').format('YYYY-MM-DD');
  }


}
