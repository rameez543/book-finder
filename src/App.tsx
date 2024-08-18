import BookList from './components/BookList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {


  return (
    <Router>
      <QueryClientProvider client={queryClient}>
   
      <Routes>
          <Route path="/:pageNumber?" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
  
      </QueryClientProvider>
      
     
    </Router>
  )
}

export default App
