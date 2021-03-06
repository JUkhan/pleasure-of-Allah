import {Router} from 'zaitun';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {filter} from 'rxjs/operator/filter';

export class Actions extends Subject{
    dispatch(action, model={}){
        action.model=model;
        this.next(action);
    }
    whenAction(...types){        
        return filter.call(this,((action)=>Boolean(types.find(type=>type===action.type))));
    }
}
export class EffectSubscription extends Subscription{    
    constructor(){
        super();        
    }    
    addEffect(streamCallback){
        const actionStream=streamCallback(Router.CM.action$);
        this.add(actionStream.subscribe(ac=>{
            if(typeof ac.dispatch==='function'){
                ac.dispatch(ac);
            }
        }));
        return this;
    }    
    dispose(){
        if(!this.closed){            
            this.unsubscribe();
        }
    }
}
