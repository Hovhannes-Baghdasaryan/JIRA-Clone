import { FC } from 'react'
import ToastServices from 'libraries/toastify/toastServices'
import { BrowserRouter } from 'react-router-dom'

import { PageLayout } from 'components'

import 'styles/index.global.scss'

const App: FC = () => (
  <BrowserRouter>
    <PageLayout />

    <ToastServices />
  </BrowserRouter>
)

export default App
