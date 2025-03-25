import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;
  roles = ['Admin', 'Editor', 'Viewer'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {
    this.userForm = this.fb.group({
      id: [this.data?.id || new Date().getTime()],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required, Validators.pattern('Admin|Editor|Viewer')]]
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  closeModal() {
    this.dialogRef.close(null);
  }
}

