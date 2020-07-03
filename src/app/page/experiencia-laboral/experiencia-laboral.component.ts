import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  form: FormGroup;
  variable: string = '';
  variable2: string = '';
  lstcodigo: Codigo[] = [{ codigo: 1, nombre: 'Programador' }, { codigo: 2, nombre: 'administrativos' }];
  get formArray(): AbstractControl | null { return this.form.get('formArray'); }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }
  private initform(): void {
    
      this.form = this.fb.group({
        formArray: this.fb.array([
          this.fb.group({
            fechaInicioFormControl: ['', Validators.required],
            fechaFinFormControl: ['', Validators.required],
          }),
          this.fb.group({
            perCodigoFormControl: ['', Validators.required],
            titCodigoFormControl: ['', Validators.required],
          }),
        ])
      });
  }
  clickenviar(): void {
    console.log("enviando...")
  }
}
interface Codigo {
  codigo: number;
  nombre: string;
}
