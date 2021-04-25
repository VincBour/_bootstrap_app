import * as React from 'react';
import { render } from 'react-dom';
import { TrainingApp } from './TrainingApp';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

render(<TrainingApp />, document.getElementById('root_training_app'));
