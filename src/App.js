import React, { useEffect } from "react"
import { Provider } from "react-redux"
import store from "./redux/store.js"
import { fetchBook } from "./redux/slices/chapters"

import Layout from "./components/shared/Layout"
import EditBook from "./components/EditBook"

const appName = "Edit-Book"

const onLoad = () => {
  store.dispatch(fetchBook())
}

onLoad()

function App() {
  useEffect(() => {
    document.title = appName
  }, []);

  return (
    <Provider store={store}>
      <Layout appName={appName}>
        <EditBook />
      </Layout>
    </Provider>
  )
}

export default App
