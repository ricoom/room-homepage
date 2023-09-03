import { Component } from '@angular/core';
import { Datadao } from 'src/app/models/datadao';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
open:boolean=true;
  k:any=0
 curData:Datadao= new Datadao('../assets/images/desktop-image-hero-1.jpg',
 ' Discover innovative ways to decorate',
 `We provide unmatched quality, comfort, and style for property owners across the country. 
 Our experts combine form and function in bringing your vision to life. Create a room in your 
 own style with our collection and make your property a reflection of you and what you love.`)
  data:Datadao[]=[
    new Datadao('../assets/images/desktop-image-hero-2.jpg',
 '   We are available all across the globe',
 ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
 Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
 store locator. Any questions? Don't hesitate to contact us today.`),

    new Datadao('../assets/images/desktop-image-hero-3.jpg',
  'Manufactured with the best materials',
  `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`),
  
  new Datadao('../assets/images/desktop-image-hero-1.jpg',
  ' Discover innova ways to decorate',
  `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`)

]
getContent(){
 for (let i = 0; i < this.data.length; i++) {
  this.curData = this.data[this.k];
  console.log(this.curData)
  break;
 }
 this.k++;

}

reverseContent(){
    this.k=0

  for (let i = 0; i < this.data.length; i++) {
   this.curData = this.data[this.k];
   console.log(this.curData)
   break;
  }

  this.k++;
 
 }


}
