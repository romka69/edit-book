import React, { useEffect } from "react"

import Layout from "./components/shared/Layout"
import EditBook from "./components/EditBook"

const appName = "Edit-Book"

function App() {
  useEffect(() => {
    document.title = appName
  }, []);

  return (
    <Layout appName={appName}>
      <EditBook />
    </Layout>
  )
}

export default App
