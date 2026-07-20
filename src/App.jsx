import { useState } from 'react'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import Win from './pages/Win'
import Finance from './pages/Finance'
import Risks from './pages/Risks'
import Delivery from './pages/Delivery'

const pages={overview:<Overview/>,win:<Win/>,finance:<Finance/>,risks:<Risks/>,delivery:<Delivery/>}
export default function App(){const [active,setActive]=useState('overview');return <Layout active={active} setActive={setActive}>{pages[active]}</Layout>}
