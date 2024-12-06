import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

import { backendUrl } from '../url'

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPage {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })
  formError = false
  sending = false

  submitForm() {
    var name = this.contactForm.value.name ?? '<Anonymous>'
    var email = this.contactForm.value.email ?? '<Anonymous>'
    var message = this.contactForm.value.message ?? '<No message>'

    console.log('Name: ' + name + ' / Email: ' + email + ' / Message: ' + message)

    if (name == '' || email == '' || message == '') {
      this.formError = true
    } else {
      this.formError = false

      fetch('http://' + backendUrl + '/send-mail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: name, email: email, message: message})
      })
      .then((res) => { return res.json() })
      .then((data) => {
          console.log('Success: (see line below)')
          console.log(data)
          alert('Message sent')
            
          this.contactForm = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required)
          })
      })
      .catch((error) => {
          console.log('Error: ' + error.message)
          alert('Error sending message')
      })
    }
  }
}
