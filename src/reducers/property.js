
import {
    CREATE_PROPERTY,
    ALL_PROPERTIES,
    UPDATE_PROPERTY,
    DELETE_PROPERTY,
    SHOW_PROPERTY,
  } from "../actions/types";


  const initialState = [];
  
  function propertyReducer(properties = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PROPERTY:
        return [...properties, payload];
  
      case SHOW_PROPERTY:
        return payload;
  
      case UPDATE_PROPERTY:
        return properties.map((property) => {
          if (property.id === payload.id) {
            return {
              ...property,
              ...payload,
            };
          } else {
            return property;
          }
        });
  
      case DELETE_PROPERTY:
        
        return properties.filter(({ id }) => id !== payload.id);
  
      case ALL_PROPERTIES:
        return  payload;
  
      default:
        return properties;
    }
  };
  
  export default propertyReducer;

