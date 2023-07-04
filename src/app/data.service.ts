import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: any[]=[];

  constructor() { }

  setFormValue(data: any){
    this.formData.push(data);
    console.log('this.formData', this.formData);
  }

  getFormValue(): any{
    return this.formData;
  }

}
