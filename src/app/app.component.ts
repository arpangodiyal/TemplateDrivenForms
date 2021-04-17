import { Component, VERSION } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  topics = ['Angular', 'React', 'Vue'];
  email2="hello@example.com";
  change = 0;

  userAddress = {
    street:'Street-1',
    city:'Delhi',
    state:'Delhi'
  }

  userModel = new User('Rob@test.com', '1122334455', 'Angular', 'Morning', true, this.userAddress);

  showValue(data){
    console.log(data);
    console.log(this.email2);
  }

  onSubmit(){
    console.log(this.userModel);
  }
}
