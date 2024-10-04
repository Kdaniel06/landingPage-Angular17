import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  // * Validate the form required fields
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {
      
  }

  send(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value)
  }

  hasErrors(field: string, errorType: string) {
    return this.contactForm.get(field)?.hasError(errorType) && this.contactForm.get(field)?.touched;
  }
}
