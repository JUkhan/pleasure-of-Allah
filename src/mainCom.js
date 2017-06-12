/** @jsx html */

import { html, Router } from 'zaitun';
import { juForm } from './ui/juForm';
import appService from './appService';

import { Dispatcher, Actions } from './effect';

const CHILD = Symbol('CHILD');

export class mainCom {
    constructor() {
        this.popup = new juForm();

    }
    afterViewRender() {
        appService.setPopup(this.popup);

        //set actions to the Router.CM. so that we can use it
        //through out the app
        const action$ = new Actions();
        action$.subscribe(action => { });
        Router.CM.action$ = action$;
    }
    init() {
        return {
            popup: {
                options: this.getPopupOptions(),
                data: { msg: <b>Message goes here</b> }
            },
            menu:[
                {path:'Home', text:'Home'},
                {path:'Quran', text:'Quran'}
            ]
        };
    }
    view({ model, dispatch }) {
        return <div>
            <this.TopMenu model={model.menu}/>
            <div>{Router.CM.child.view({ model: model.child, dispatch: action => dispatch({ type: CHILD, childAction: action }) })}</div>
            {this.popup.view({ model: model.popup, dispatch })}
        </div>
    }
    update(model, action) {
        switch (action.type) {
            case CHILD:
                return { ...model, child: Router.CM.child.update(model.child, action.childAction) };

            default:
                return model;
        }
    }
    getPopupOptions() {
        return {
            viewMode: 'popup',
            title: 'Popup Title',
            name: 'alert-popup',
            size: 'sm',
            inputs: [
                { type: 'vnode', vnode: model => model.data.msg }
            ]
        }
    }
    TopMenu({model}) {
        return <nav classNames="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <button classNames="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                aria-expanded="false" aria-label="Toggle navigation">
                <span classNames="navbar-toggler-icon"></span>
            </button>
            <a classNames="navbar-brand" href="#/counter">Pleasure of Allah</a>
            <div classNames="collapse navbar-collapse" id="navbarCollapse">
                <ul classNames="navbar-nav mr-auto">
                    {model.map(nav=><li classNames="nav-item" class={{active:Router.activeRoute.navPath===nav.path}}><a classNames="nav-link" href={'#/'+nav.path}>{nav.text}</a></li>)}                   
                </ul>

            </div>
        </nav>
    }
}