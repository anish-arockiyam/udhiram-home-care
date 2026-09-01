import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { IconComponent } from '../../shared/icon.component';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'udhiram-home',
  standalone: true,
  imports: [HeaderComponent, SectionHeadingComponent, IconComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly fb = inject(FormBuilder);

  readonly services: Service[] = [
    { icon: 'hands', title: 'All Types of Surgical Dressing', description: 'Professional support with surgical wound dressing and related home-care needs.' },
    { icon: 'pill', title: 'Medication Management', description: 'Support with medication routines and responsible medication management.' },
    { icon: 'syringe', title: 'Injection Administration', description: 'Assistance with different types of injection administration as prescribed.' },
    { icon: 'catheter', title: 'Catheter Care & Change', description: 'Support with catheter care and change according to the individual’s care requirements.' },
    { icon: 'user', title: 'Personal Care Assistance', description: 'Compassionate assistance with everyday personal-care needs while respecting privacy and dignity.' },
    { icon: 'heart', title: 'Other Care Services', description: 'Looking for another type of home-care support? Feel free to contact us to discuss your requirements.' }
  ];

  readonly features: Feature[] = [
    { icon: 'heart', title: 'Professional & Compassionate', description: 'We treat every individual with respect, dignity and patience.' },
    { icon: 'user', title: 'Personalised Care', description: 'Care is arranged according to the individual’s needs.' },
    { icon: 'phone', title: 'Family Communication', description: 'We keep families informed and involved in the care process.' },
    { icon: 'shield', title: 'Safety & Hygiene', description: 'We maintain appropriate hygiene and patient-safety practices.' },
    { icon: 'check', title: 'Reliable Support', description: 'Our goal is to give families dependable support and peace of mind.' }
  ];

  readonly trustItems = [
    ['shield', 'Qualified / Trained Caregivers'],
    ['heart', 'Personalised Care'],
    ['hands', 'Hygiene & Patient Safety'],
    ['phone', 'Regular Family Communication'],
    ['home', 'Flexible Care Options'],
    ['heart', 'Professional & Compassionate Approach']
  ];

  readonly enquiryForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\\-\\s]{7,20}$/)]],
    email: ['', [Validators.email]],
    service: ['', Validators.required],
    contactMethod: ['Phone', Validators.required],
    message: ['', [Validators.maxLength(1000)]]
  });

  submitted = false;

  scrollToServices(): void {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  submitEnquiry(): void {
    this.submitted = true;
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }
    // Intentionally no backend call: replace this block with the client's API integration.
    this.enquiryForm.reset({ fullName: '', phone: '', email: '', service: '', contactMethod: 'Phone', message: '' });
  }

  invalid(control: keyof typeof this.enquiryForm.controls): boolean {
    const field = this.enquiryForm.controls[control];
    return field.invalid && (field.touched || this.submitted);
  }
}
