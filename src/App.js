import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Movie from './component/Movie';
import AddMovie from './component/AddMovie';
import UpdateMovie from './component/UpdateMovie';
import DeleteMovie from './component/DeleteMovie';

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        {/* <Movie /> */}
        {/* <AddMovie /> */}
        {/* <UpdateMovie /> */}
        <DeleteMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;
