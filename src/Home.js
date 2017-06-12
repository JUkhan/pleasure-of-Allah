/** @jsx html */

import {html, Router} from 'zaitun';

export default class Home{ 
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
         return <div>Home</div>             
               
    }   
    update(model, action){     
        
        switch (action.type) {          
           
            default:
                return model;
        }
    }
    
}
