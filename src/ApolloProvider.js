import React from 'react'
import App from './App'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
    uri: "https://sdi-survey.herokuapp.com" // "https://sdi-react-app.herokuapp.com"  // Here Server Address "http://localhost:5000/"//
})

const authLink = setContext(() =>{
    const token = localStorage.getItem('jwttoken')

    return{
        headers:{
            Authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)