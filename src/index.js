import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskNo1 from './pages/task-no1/TaskNo1';
import TaskNo2 from './pages/task-no2/TaskNo2';
import TaskNo3 from './pages/task-no3/TaskNo3';
import TaskNo4 from './pages/task-no4/TaskNo4';
import BasicForm from './pages/React-forms/BasicForm';
import UncontrolledForm from './pages/React-forms/UncontrolledForm';
import JsonForm from './pages/React-forms/JsonForm';
import FormikForm from './pages/React-forms/FormikForm';
import LifecycleMethods from './pages/Lifecycle-methods/lifecycleMethods';
import UseEffect1 from './pages/useEffect_example/useEffect1';
import MountingPhase from './pages/SideEffects/mountingPhase';
import Parent from './pages/SideEffects/unmountingPhase/Parent';
import Products from './pages/Products/Products';
import RoutingOutlet from './router/RoutingOutlet';
import Counter from './pages/Counter/Counter';
import Loandata from './pages/LoanData/loandata';


import { Provider } from 'react-redux';
import {store} from './Store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*    <Provider store={store}>
      <Counter/>
      <Loandata />
   </Provider> */
<RoutingOutlet />

   );

