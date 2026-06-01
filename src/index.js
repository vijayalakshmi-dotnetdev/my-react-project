import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskNo1 from './pages/task-no1/TaskNo1';
import TaskNo2 from './pages/task-no2/TaskNo2';
import TaskNo3 from './pages/task-no3/TaskNo3';
import TaskNo4 from './pages/task-no4/TaskNo4';
import BasicForm from './pages/A_Basic-form/BasicForm';
import UncontrolledForm from './pages/A_Basic-form/UncontrolledForm';
import JsonForm from './pages/A_Basic-form/JsonForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <JsonForm />
  </React.StrictMode>
);

