import { Component } from '@angular/core';
import { IDescription, ISidebar } from '../interfaces/sidebar.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.scss'],
})
export class SideBarComponent {
  linkName:string = 'Zoomer link'
  sideBarArray:ISidebar[] = [
    {
      name: 'მობილური',
      description:{
        name:'iphone 16',
        price:3700,
        quantity:10
      }, 
      id:1,
      iconImg:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg',
    },
    {
      name: 'ტაბები',
      description:{
        name:'ipad',
        price:4000,
        quantity:3
      }, 
      id:2,
      iconImg:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Tablet-05.svg',
    },
    {
      name: 'ლეპტოპები',
      description:{
        name:'Dell',
        price:2200,
        quantity:5
      }, 
      id:3,
      iconImg:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_IT.svg',
    },
    {
      name: 'სმარტ გაჯეტები',
      description:{
        name:'rame rume',
        price:3000,
        quantity:8
      }, 
      id:4,
      iconImg:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_smart%20house.svg',
    },
  ];

  numbers:number[] = [
    1, 2, 3, 4, 5, 6
  ]

  infoToChild:IDescription
  infoFromChild:IDescription
  myName:string = "Beka Ungiadze"
  showDiv:boolean = true
  otherName:string = "Saba"
  randomNumber:number;
  activeClass:number;
  userText:string;

  myStyles = {
    'font-size':'60px',
    'background-color':'blue',
  }

  trackSideBar(value){
    return value.index
  }

  onClick(data){
    this.infoToChild = data.description
  }

  catchData(data:IDescription){
    console.log(data)
    this.infoFromChild = data
  }

  toggleMenu(){
    const rndNumber = Math.floor(Math.random() * (100-10)+10)
    this.randomNumber = rndNumber
  }

  returnStyle(){
    return 'blue'
  }

  trackId(index:number){
    return index
  }

  showPara(data:number){
    console.log(data)
    this.activeClass = data
  }

}

//შექმენით ერთი მშობელი და მეორე შვილი კომპონენტი
//მშობელ კომპონენტში ngFor-ის დახმარებით გამოიტანეთ ერეის მნიშნელობები:
//ერეიში უნდა გქონდეს ობიექტები, რომლებსაც ექნება ფროფერთები:
  // სახელი, გვარი, აღწერა (რომელიც თავისმხრივ კიდევ ობიექტი იქნება და რამე ფროფერთი თავისი მნიშვნელობით შეუქმენით)
  // ქლიქ მეთოდზე რომელ ელემენტსაც დააჭერთ იმ ელემენტის შესაბამისი აღწერა (შიდა ობიექტი რომ არის) უნდა გადაეცეს
  // შვილ კომპონენტს და შვილ კომპონენტში გამოაჩინოთ აღწერის მნიშვნელობა.
  // შვილ კომპონენტს ასევე გადაეცით ერეის სიგრძის მნიშვნელობა length-1.
// შვილ კომპონენტში შექმნით რაიმე ღილაკს რაზეც დაკლიკვისას 
// მშობელ კომპონენტში გამოისვრის რანდომ ციფრს 0 დან ერეის სიგრძემდე.
// მშობელ კომპონენტში დაიჭერთ ამ ციფრს და აღნიშნული ციფრის მიხედვით დაადებთ კლასს კონკრეტულ ელემენტს ერეიდან, 
// რომლის რიგიც ემთხვევა ამ ციფრს.