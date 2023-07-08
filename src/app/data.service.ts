import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: any[]=[
    {emp:'1', name:'Riya Bazgian', emails:['riyabzgn9@gmail.com'], phNo: '+9779823688870', dob:'03/27/2002'},
    {emp:'2', name:'Pritha Shrestha', emails:['pritha123@gmail.com'], phNo: '+9779800000000', dob:'01/24/200'},
  ];

  constructor() { }


  updateUser(user: any) {
    const index = this.formData.findIndex((u: any) => u.emp === user.emp);
    if (index !== -1) {
      this.formData[index] = user;
    }
  }
  

  setFormValue(data: any){
    this.formData.push(data);
    console.log('this.formData', this.formData);
  }

  getFormValue(): any{
    return this.formData;
  }

}
