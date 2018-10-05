import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	data: Array<{id: number, firstName: string, lastName: string, dob: string, email: string, country: string}>;

  constructor(private apollo: Apollo) {
    this.displayRegistrations()
  }
  // Get all registrations
  displayRegistrations() {
    const getRegistrations = gql`
      {
        Registrations {
          id
          firstName
          lastName
          dob
          email
          country
        }
      }
    `;

    this.apollo
      .watchQuery({
        query: getRegistrations,
        fetchPolicy: "network-only"
      })
      .valueChanges
      .subscribe(x => {
      	this.data = x.data;
      } );
  }

}
