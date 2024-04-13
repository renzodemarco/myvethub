import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { AppContextProvider } from './context/AppContext'

function App() {

  return (
    <AppContextProvider>
      <Header />
      <Main />
    </AppContextProvider>
  )
}

export default App
