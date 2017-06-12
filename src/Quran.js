/** @jsx html */

import {html, Router} from 'zaitun';
import {EffectSubscription} from './effect';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

export default class Quran{ 
    constructor(){
        this.es=new EffectSubscription();
    }
    init(){               
        return {data:0, msg:''}
    }    
    afterViewRender(model, dispatch){
      
    }    
    
    onDestroy(){
       
        this.es.dispose();
    } 	
    view({model, dispatch}){
        this.es.dispatch=dispatch;
         return <h1>
                    Quran
                </h1>             
               
    }   
    update(model, action){     
        
        switch (action.type) {
           
            default:
                return model;
        }
    }
    
}
