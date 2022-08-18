import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import Home from './Home';
import Error from './Error';
import Start from './Start';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='auth' element={<Home/>} />
        <Route path='/' element={<Start/>}/>
        <Route path='/category/:page' element={<List/>}>
          <Route path='post/:id' element={<Modal/>} />
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Layout>
  </main>
);
