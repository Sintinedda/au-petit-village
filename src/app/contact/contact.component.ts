import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NgIf } from '@angular/common';
import 'dotenv'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, GoogleMapsModule, NgIf],
  template: `
    <main>
      <div class="contact-container">
        <h1 class="contact-h1">Contact</h1>
        <div class="contact-us">
          <h2 class="contact-h2">Nous contacter</h2>
          <div class="contact-us-items">
            <div class="contact-us-address">
              <span class="material-symbols-outlined">explore_nearby</span>
              <address class="contact-us-item item-address">
                Avenue Maréchal Lyautey<br/>
                20090 Ajaccio, Corse-du-Sud
              </address>
            </div>
            <p class="contact-us-tel">
              <span class="material-symbols-outlined">call</span>
              <a href="tel:0495515303" class="contact-us-item item-tel">0495515303</a>
            </p>
          </div>
        </div>
        <div class="contact-form-container">
          <h2 class="contact-h2">Formulaire de contact</h2>
          <form [formGroup]="form" class="contact-form" (submit)="sendEmail($event)">
            <div class="contact-form-name">
              <div class="contact-form-firstname">
                <label class="contact-form-label">Prénom :</label>
                <input type="text" formControlName="firstName" class="contact-form-input input-name" name="first_name">
                <div *ngIf="form.controls['firstName'].errors" class="contact-alert">
                  {{alert}} votre prénom
                </div>
              </div>
              <div class="contact-form-lastname">
                <label class="contact-form-label">Nom :</label>
                <input type="text" formControlName="lastName" class="contact-form-input input-name" name="last_name">
                <div *ngIf="form.controls['lastName'].errors" class="contact-alert">
                  {{alert}} votre nom
                </div>
              </div>           
            </div>
            <label class="contact-form-label">Email :</label>
            <input type="email" formControlName="email" class="contact-form-input input-email" name="email">
            <div *ngIf="form.controls['email'].errors" class="contact-alert">
                  {{alert}} votre email
            </div>
            <label class="contact-form-label">Sujet :</label>
            <input type="text" formControlName="subject" class="contact-form-input input-subject" name="subject">
            <div *ngIf="form.controls['subject'].errors" class="contact-alert">
                  {{alert}} le sujet de votre message
            </div>
            <label class="contact-form-label">Message :</label>
            <textarea name="message" formControlName="message" class="contact-form-textarea"></textarea>
            <div *ngIf="form.controls['message'].errors" class="contact-alert">
                  {{alert}} votre message
            </div>
            <input type="submit" class="contact-form-btn" value="Envoyer" [disabled]="form.invalid" />
          </form>
        </div>
      </div>
    </main>
  `,
  styles: ``
})

export class ContactComponent implements OnInit {

  form!: FormGroup;
  alert = "Veuillez renseigner";
  
  constructor() { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    
    emailjs
      .sendForm(import.meta.env['NG_APP_EMAILJS_SERVICE'], import.meta.env['NG_APP_EMAILJS_TEMPLATE'], e.target as HTMLFormElement, {
        publicKey: import.meta.env['NG_APP_EMAILJS_PUBLIC_KEY'],
      })
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Votre message a bien été envoyé");
        this.form.reset();
      }, (error) => {
        console.log(error.text);
        alert("Votre message n'a pas pu être envoyé")
      });
  }
}
