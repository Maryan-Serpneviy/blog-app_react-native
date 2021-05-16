import React, { FC } from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

/* store */
import { Provider } from 'mobx-react'
import { mainStore as store } from './src/store/todos.store'

import Screens from './src/screens'

const App: FC = () => {
  /* initialize fonts */
  const [fontsLoaded] = useFonts({
    'caviar-dreams': require('./src/assets/fonts/CaviarDreams.ttf'),
    'caviar-dreams_bold': require('./src/assets/fonts/CaviarDreams_Bold.ttf'),
    khand: require('./src/assets/fonts/khand.ttf')
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  )
}

export default App