/** @jsx html */

import {html, Router} from 'zaitun';

export default class Arabic{ 
    constructor(){
       
    }
    init(){               
        return {}
    }    
    afterViewRender(model, dispatch){
     
    }   
    
    onDestroy(){
      
    } 	
    view({model, dispatch}){       
         return <h1>Arabic</h1>             
               
    }   
    update(model, action){     
        
        switch (action.type) {          
           
            default:
                return model;
        }
    }
    
}