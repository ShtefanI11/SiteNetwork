import React, { Component } from 'react';
import css from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersConteiner from './components/Users/UsersConteiner'
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsConteiner = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={css.app_wrapper}>
        <HeaderContainer />
        <Nav />
        <div className={css.app_wrapper_content}>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs/' render={withSuspense(DialogsConteiner)} />
          <Route path='/users' render={() => <UsersConteiner />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const SamuraiJSApp = (props) => {
  return <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}
export default SamuraiJSApp