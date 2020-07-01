import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required)
    })
  }

}
