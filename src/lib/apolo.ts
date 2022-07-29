import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sucff92kkx01yyfcex0lkj/master',
    cache: new InMemoryCache()
})