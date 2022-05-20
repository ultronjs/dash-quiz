import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { QuestionProvider } from './contexts/QuestionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <QuestionProvider>
            <App />
          </QuestionProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);