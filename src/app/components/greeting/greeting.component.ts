import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `

    <div class="">
      <h3 class="text-6xl text-indigo-50 font-400">
        Meet Dave!
      </h3>

      <p class="text-4xl text-indigo-100">
        -A Full-Stack Web Developer.
      </p>

      <p class="text-xl mt-24 w-4/5 text-justify">
        Build apps to digitize business data from data-entry to monitoring and reporting dashboards to help the management create an informed decisions.
      </p>

      <a href="#aboutMe" mat-raised-button class="bg-purple-500 text-white mt-5">Learn More</a>

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
