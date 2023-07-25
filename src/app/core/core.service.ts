import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private _snackBar: MatSnackBar,
  
    
    ){}
    horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  openSnackBar(message: string, action: string = 'Başarılı') {
    this._snackBar.open(message, action,{
      duration: 1000,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition
    });
  }

}
