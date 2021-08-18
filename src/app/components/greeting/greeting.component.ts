import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `

    <div class="">
      <h1 class="text-6xl text-indigo-50">
        Hi, I'm Dave!
      </h1>

      <p class="text-4xl text-indigo-100">
        I'm a Full-Stack Web Developer.
      </p>

      <p class="text-xl text-indig-200 mt-24 w-4/5 text-justify">
        I write apps that help businesses digitize their sensitive data ranging from data-entry to monitoring and reporting dashboards to help the management make an informed decisions.
      </p>

      <button mat-raised-button class="bg-green-600 text-white mt-5">Learn More</button>

    </div>
  `,
  styles: [
  ]
})
export class GreetingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
