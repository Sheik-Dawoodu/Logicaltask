import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      users: this.fb.array([]),
    });
  }

  get users(): any {
    return (this.userForm.get('users') as any).controls;
  }

  addUser() {
    const userGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    (this.userForm.get('users') as any).push(userGroup);
  }

  removeUser(index: number) {
    (this.userForm.get('users') as any).removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userArray = this.userForm.value.users;
      console.log('Submitted Users:', userArray);
    } else {
      alert('Form is not valid. Please check the fields.');
    }
  }
}
