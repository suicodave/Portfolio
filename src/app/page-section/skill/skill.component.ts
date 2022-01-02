import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/components/skill-list/skill-list.component';

@Component({
  selector: 'app-skill',
  template: `
    <div class="w-full py-16 bg-gray-200">
      <h1 class="font-bold text-center text-4xl">
        Tech Stacks
      </h1>

      <div class="mx-10 grid h-3/4 relative lg:grid-cols-3 gap-8">

          <div class="languages relative lg:p-8">
            <app-skill-list [data]="languages" headerLogo="https://cdn3.iconfinder.com/data/icons/coding/16/html-tag-01-512.png" ></app-skill-list>
          </div>

          <div class="frameworks lg:p-8 relative">
            <app-skill-list [data]="frameworks" headerLogo="https://cdn3.iconfinder.com/data/icons/master/24/Gears-512.png" ></app-skill-list>
          </div>


          <div class="tools lg:p-8 relative">
            <app-skill-list [data]="tools" headerLogo="https://cdn0.iconfinder.com/data/icons/simple-darkcon-1/95/settings-512.png" ></app-skill-list>
          </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SkillComponent implements OnInit {

  languages: SkillModel[] = [
    {
      logo: 'https://logodix.com/logo/773602.png',
      label: 'C#',
      fromYear: 2020
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png',
      label: 'Typescript',
      fromYear: 2017
    },
    {
      logo: 'https://www.php.net/images/logos/new-php-logo.png',
      label: 'PHP',
      fromYear: 2015
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png',
      label: 'Javascript',
      fromYear: 2015
    },
    {
      logo: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png',
      label: 'HTML',
      fromYear: 2014
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
      label: 'CSS',
      fromYear: 2014
    }
  ];

  frameworks: SkillModel[] = [
    {
      logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
      label: 'Angular',
      fromYear: 2017
    },
    {
      logo: 'https://angular.io/generated/images/marketing/concept-icons/material.png',
      label: 'Angular Material',
      fromYear: 2017
    },
    {
      logo: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg',
      label: 'Tailwind',
      fromYear: 2021
    },
    {
      logo: 'https://logodix.com/logo/1796958.png',
      label: 'ASP.Net',
      fromYear: 2020
    },
    {
      logo: 'https://blog.sharetechlinks.com/wp-content/uploads/2020/11/ef-core-featured.png',
      label: 'Entity Framework Core',
      fromYear: 2020
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
      label: 'Laravel',
      fromYear: 2017
    }
  ];

  tools: SkillModel[] = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/640px-Visual_Studio_Code_1.35_icon.svg.png',
      label: 'Visual Studio Code',
      fromYear: 2017
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png',
      label: 'Git',
      fromYear: 2017
    },
    {
      logo: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg',
      label: 'Node.js',
      fromYear: 2017
    },
    {
      logo: 'https://mariadb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent-300x245.png.webp',
      label: 'Maria DB',
      fromYear: 2015
    },
    {
      logo: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
      label: 'SQL Server',
      fromYear: 2020
    },
    {
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      label: 'GitHub',
      fromYear: 2017
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg/640px-Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg.png',
      label: 'Windows',
      fromYear: 2007
    },
    {
      logo: 'https://www.kreaweb.be/wp-content/uploads/2021/03/laragon.png',
      label: 'Laragon',
      fromYear: 2019
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
