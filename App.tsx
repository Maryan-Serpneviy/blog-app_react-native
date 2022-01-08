import React, { FC, useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

/* store */
import { Provider, observer } from 'mobx-react'
import { postsStore as store } from './src/store/posts.store'

import { bootstrap } from './src/core/bootstrap'
import AppContainer from './src/navigation'

const App: FC = () => {
  /* initialize fonts */
  const [fontsLoaded] = useFonts({
    'caviar-dreams': require('./src/assets/fonts/CaviarDreams.ttf'),
    'caviar-dreams_bold': require('./src/assets/fonts/CaviarDreams_Bold.ttf'),
    khand: require('./src/assets/fonts/khand.ttf')
  })

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      await bootstrap()
      setLoading(false)
    })()
  }, [])

  if (!fontsLoaded || loading) return <AppLoading />

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default observer(App)