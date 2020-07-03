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

  formGroup: FormGroup;

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;


  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.form.get('formArray'); }
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.form = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          nombreFormControl: ['', Validators.required],
          apellidoFormControl: ['', Validators.required]
        }),
        this.fb.group({
          identificacionFormControl: ['', Validators.required],
          fechaNacimientoFormControl: ['', Validators.required],
        }),
      ])
    })
  }



  clickenviar(): void {
    console.log("enviando...")
    this.fechai = this.formArray.get([1]).get('fechaNacimientoFormControl').value;
    this.fechafi = moment(this.fechai, 'MM DD YYYY').format('YYYY-MM-DD');
    console.log(this.fechafi);
  }


}
