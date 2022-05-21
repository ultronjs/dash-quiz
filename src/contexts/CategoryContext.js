import React, { createContext, useContext, useState} from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext)

export const CategoryProvider = ({ children }) => {
  const {currentUser} = useAuth()
  const [categories,setCategories] = useState([])

  const getCategoriesData = () => {
    db.collection('categories').onSnapshot(snapShot =>{
    setCategories(snapShot.docs.map(doc => ({id:doc.id,category:doc.data()}) ))
    })
  }

  const value = {
      categories,
      getCategoriesData
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
