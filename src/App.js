import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/basic.scss';
import './styles/main.scss';

import Project from './components/mainpagecomponents/project';
import Purchase from './components/mainpagecomponents/Purchase';
import Video from './components/mainpagecomponents/Video';
import Collection from './components/mainpagecomponents/Collection';
import Navibar from './components/commoncomponents/Navibar';
import Footer from './components/commoncomponents/Footer';
import Tokenomic from './components/issuecomponents/Tokenomic';
import Stakeburn from './components/issuecomponents/Stakeburn';
import Founddao from './components/issuecomponents/Founddao';
import Carouselmeet from './components/meetpunkcomponents/Carouselmeet';
import Faqs from './components/faqs/Faqs';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <Fragment>
        <Navibar />
        <Switch>
          <Route exact path='/'>
            <Project />
            <Purchase />
            <Video />
            <Collection />
          </Route>
          <Route path='/issue'>
            <Tokenomic />
            <Stakeburn />
            <Founddao />
          </Route>
          <Route path='/meetpunk'>
            <Carouselmeet />
          </Route>
          <Route path='/faqs'>
            <Faqs />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
