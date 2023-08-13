import { FC } from 'react'
import { RoutesWrapper } from 'libraries/router'
import { BrowserRouter } from 'react-router-dom'
import ToastServices from 'libraries/toastify/toastServices'

import 'styles/index.global.scss'

const App: FC = () => (
  <BrowserRouter>
    <RoutesWrapper />

    <ToastServices />
  </BrowserRouter>
)

export default App
