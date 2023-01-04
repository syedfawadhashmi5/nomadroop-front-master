import {
    CREATE_PROPERTY,
    ALL_PROPERTIES,
    UPDATE_PROPERTY,
    DELETE_PROPERTY,
    SHOW_PROPERTY, 
    DELETE_ALL_PROPERTY
} from "./types";
  
import PropertyDataService from "../services/property.service";

// Start: Create Property 
export const getAllProperties = () => async (dispatch) => {
    try {
        const res = await PropertyDataService.getAll();

        let rooms = []
        if(res.data.success){
          rooms = res.data.rooms
        }

        dispatch({
            type: ALL_PROPERTIES,
            payload: rooms,
        });
      
        } catch (err) {
          return Promise.reject(err);
        }
};


  export const deleteProperty = (id) => async (dispatch) => {
    try {
      await PropertyDataService.delete(id);
  
      dispatch({
        type: DELETE_PROPERTY,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };


  // // Start: Create Property 
  // export const createProperty = (title, description) => async (dispatch) => {
  //   try {
  //     const res = await PropertyDataService.create({ title, description });
  //     dispatch({
  //       type: CREATE_PROPERTY,
  //       payload: res.data,
  //     });
  
  //     return Promise.resolve(res.data);
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // };

  // // Start: Update Property 
  
  // export const updateProperty = () => async (dispatch) => {
  //   try {
  //     const res = await TutorialDataService.getAll();
  
  //     dispatch({
  //       type: RETRIEVE_TUTORIALS,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // export const updateTutorial = (id, data) => async (dispatch) => {
  //   try {
  //     const res = await TutorialDataService.update(id, data);
  
  //     dispatch({
  //       type: UPDATE_TUTORIAL,
  //       payload: data,
  //     });
  
  //     return Promise.resolve(res.data);
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // };
  

  
  // export const deleteAllTutorials = () => async (dispatch) => {
  //   try {
  //     const res = await TutorialDataService.deleteAll();
  
  //     dispatch({
  //       type: DELETE_ALL_TUTORIALS,
  //       payload: res.data,
  //     });
  
  //     return Promise.resolve(res.data);
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // };
  
  // export const findTutorialsByTitle = (title) => async (dispatch) => {
  //   try {
  //     const res = await TutorialDataService.findByTitle(title);
  
  //     dispatch({
  //       type: RETRIEVE_TUTORIALS,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


