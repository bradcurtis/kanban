// eslint-disable-next-line no-unused-vars
import * as React from 'react';

// const API_URL = process.env.REACT_APP_API_URL || 'https://arcane-plains-20636.herokuapp.com' 

export async function getKanbanItems(api){
  const response = await fetch(api+"/api/kanban");  
  return response.json();
}