// src/app/graphql.module.ts

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Apollo
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
  	//localhost
    const uri = 'http://localhost:4000/graphql/';
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}

/*
Example - https://medium.com/@mail.bahurudeen/creating-a-graphql-api-server-and-consuming-in-angular-5-application-81e1b8af5aac
https://qiita.com/alokrawat050/items/7fc8a240e047ea6c2e06
https://malcoded.com/posts/graphql-with-angular-apollo
*/