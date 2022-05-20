import React, { createContext, useContext, useState } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

const QuestionContext = createContext();

export const useQuestion = () => useContext(QuestionContext);

export const QuestionProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [questionsBank, setQuestionsBank] = useState([]);

  const getQuestionsData = (categoryName) => {
    db.collection(categoryName).onSnapshot((snapShot) => {
      setQuestionsBank(
        snapShot.docs.map((doc) => ({ id: doc.id, questions: doc.data() }))
      );
    });
  };

  const value = {
    questionsBank,
    getQuestionsData,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
