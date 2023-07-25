import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  education: string[] = [
    'Lise',
    'Önlisans',
    'Lisans',
    'Yüksek Lisans'
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService:EmployeeService,
    private _dialogRef:DialogRef<EmpAddEditComponent>
    ){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
    
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Çalışan başarıyla eklendi.')
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      })
    }
  }

}
