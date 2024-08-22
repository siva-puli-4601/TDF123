import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from '../state.service';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../subject.service';
import { interval, Observable, of } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  coustomobser: any;
  constructor(public ser:StateService,public sub: SubjectService){}
  value:boolean = false;
  ngOnInit() {


    // let value=of(1,2,3,4,5,6);

    // value.subscribe((data)=>console.log("hello"));
    
    // interval(1000).subscribe((count: number) => {
    //   console.log(count);
    // })

  // this.coustomobser=Observable.create((observer:any)=>{
  //   var count=0;
  //   setInterval(()=>{
  //     count++;
  //     observer.next(count);
  //   },1000)
  // })
  // this.coustomobser.subscribe((data: any)=>
  // {
  //   console.log(data);
  // });



    // Safely check for the key in localStorage
    const savedState = localStorage.getItem('islogin');

    this.value = savedState === 'true'; // Default to false if key is not found

  //   this.sub.subject.subscribe((data)=>
  //   {
  //     console.log(data);
     
  //   }
  // )
//   this.sub.subject.next("hello");

//   this.sub.bSubject.subscribe((data)=>{
//     console.log(data);
//   }
    
//   )

//   this.sub.replay.subscribe((data)=>{
//     console.log(data);
//   })

//   this.sub.asyncSub.subscribe((data)=>{
//    console.log(data);
//   })

//  this.sub.asyncSub.complete();
  
} 
  logOut()
  {
    localStorage.removeItem('mail');
    localStorage.removeItem('password');
    localStorage.removeItem('islogin');
    this.value=false;
  }

  //interval(1000).subscribe((count:number)=>{console.log(count)});
  // ngOnDestroy()
  // {
  //   this.coustomobser.unsubscribe();
  // }

}

