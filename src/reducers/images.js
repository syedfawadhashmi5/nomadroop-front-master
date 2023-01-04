
  import {
    CREATE_IMAGE,
    GET_IMAGE,
    UPDATE_IMAGE,
    DELETE_IMAGE,
    GET_ALL_IMAGE
  } from "../actions/types";

  const initialState = [];
  
  function imageReducer(images = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_IMAGE:
        return [...images, payload];
  
      case GET_IMAGE:
        return payload;
  
      case UPDATE_IMAGE:
        return images.map((image) => {
          if (image.id === payload.id) {
            return {
              ...image,
              ...payload,
            };
          } else {
            return image;
          }
        });
  
      case DELETE_IMAGE:
        return images.filter(({ id }) => id !== payload.id);
  
      case GET_ALL_IMAGE:
        return [...images, payload];
  
      default:
        return images;
    }
  };
  
  export default imageReducer;
