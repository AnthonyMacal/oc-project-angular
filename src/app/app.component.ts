import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oc-project-angular';
  ;

  posts = [ 
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id nibh ut venenatis. Integer pulvinar turpis vel tortor tincidunt.',
      loveIts:15,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id nibh ut venenatis. Integer pulvinar turpis vel tortor tincidunt.',
      loveIts:0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id nibh ut venenatis. Integer pulvinar turpis vel tortor tincidunt.',
      loveIts:0,
      created_at: new Date()
    },
  ];
}
