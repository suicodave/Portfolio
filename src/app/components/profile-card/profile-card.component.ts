import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  template: `
    <mat-card class="mat-elevation-z7 py-8 bg-gray-700 w-96">

      <div class="flex justify-center">
        <img class="avatar w-52 h-52 rounded-full" src="https://avatars.githubusercontent.com/u/28585323?v=4" alt="Profile Image">
      </div>

      <p class="text-center mt-10 text-white text-4xl">
        Dave Suico
      </p>

      <div class="links bg-gray-500 rounded-lg flex py-1 justify-evenly  mt-10">
        <a mat-button href="https://github.com/suicodave" target="_" class="w-16 h-16 rounded-full flex  justify-center items-center">
          <img class="object-contain h-10 w-10" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github Link">
        </a>

        <a mat-button href="mailto:alwayshungry102@gmail.com" class="w-16 h-16 rounded-full flex  justify-center items-center">
          <img class="object-contain h-10 w-10" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-500x281.png" alt="My E-mail">
        </a>

        <a mat-button  href="https://www.linkedin.com/in/dave-suico-04a043204" class="  w-16 h-16 rounded-full flex  justify-center items-center" target="_">
          <img class="object-contain h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="LinkedIn Link">
        </a>

      </div>

    </mat-card>
  `,
  styles: [
  ]
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
