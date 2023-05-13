import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  //Variables
  public title = "My title";
  public name = 'Alexander';
  public age = 38;
  public img = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpMNkdqxoi2dFJu0-uldf8L0aHMFDedNp7xGY4YRkHielu3K41PF6TN1Py9lCVYMAVtEsV1IxGcaQBRgfps0F137WCY6XcJiG2eXUN4fOhAPMj3n39gGLz_hKkWrQdmXGODR8f8-MVG2KjTB0UXBMwCSAREihFfw70bKMxUZbS1We4tr8GjFiOQy6q/s1600/scrum-foundation-professional-certificate-sfpc.1.png';
  public btnDisbled = true;

  //Objeto
  objPersona = {
    name: "Alexander Jair Rojas Paria",
    age: 18,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2vlt0uF5YNlIxb5wHC4Pi6q0agXy-egwbd_k_7wfz-Gt6Xr_gQW4P_DWD1vrUC1lWhlWJjpOLe7fZqZEPiRWoYRFRlfpGZOzZBvxTIgT2htXhfqfo5INLOEP4aDEz3eEQ1IChswSGDIUnzsEy-yikvMKKrlwfKOjxN9zglD7gfQwuW-lQLYe3WU_u/s1600/cap1.png"
  }

  //Metodos
  public metToggleButton(){
    //this.btnDisbled = false;
    this.btnDisbled = !this.btnDisbled;
  }

  public metIncrementAge(){
      this.age +=1;
  }

  public metIncrementObjAge(){
    this.objPersona.age +=1;
  }

  public evetScrollMove(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTo);
  }

  public evetKeyUpTxtName(event: Event){
    const element = event.target as HTMLInputElement;
    //this.objPersona.name = element.value;
    this.name = element.value;
  }
}
