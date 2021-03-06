/** @jsx html */

import {html, Router} from 'zaitun';
import appService from './appService';

export default class Home{ 
    constructor(){
       
    }
    init(){               
        return {msg:'I love Allah.'}
    }    
    afterViewRender(model, dispatch){
     
    }   
    
    onDestroy(){
      
    } 	
    view({model, dispatch}){       
         return <div>
             <button on-click={[dispatch,{type:'notify'}]}>Notify</button>
         </div>             
               
    }   
    update(model, action){     
        
        switch (action.type) {          
           case 'notify':
           appService.notifyMsg('Pleasure of Allah', model.msg);
           return model;
            default:
                return model;
        }
    }
    
}
