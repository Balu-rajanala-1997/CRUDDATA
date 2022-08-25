import {IInputs, IOutputs} from "./generated/ManifestTypes";
// import * as react from "react";
import { ImainRouter  } from "./RouteComponent";
import ReactDOM = require("react-dom");
import React = require("react");
import { useContext } from "react"
import EditFormContext from './Contexts/EditFormContext';
import HelloWorld from "./HelloWorld";

export class crud implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private appContainer : HTMLDivElement;

    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
     private _context: ComponentFramework.Context<IInputs>;

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this._context = context;
        // Add control initialization code
        this.appContainer = container;

    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
        const { allFormsData, updateAllFormsData  }:any = useContext(EditFormContext);
        this._context = context;
        const dataObject: ImainRouter = { context: this._context };
        ReactDOM.render(
          React.createElement(HelloWorld, dataObject),
          this.appContainer
        );
    }

        //     public Create() {

        //         const _input1 : HTMLInputElement | null = this.appContainer.querySelector('input');
        //         const user_ = _input1?.value;

        //         const _input2 : HTMLInputElement | null = this.appContainer.querySelector('.email');
        //         const eml_ = _input2?.value;
                
        //         const _input3 : HTMLInputElement | null = this.appContainer.querySelector('.age');
        //         const age_ = _input3?.value;

        //         const data: ComponentFramework.WebApi.Entity = {};
        //         data["cr252_username"] = user_;
        //         data["cr252_email"] = eml_;
        //         data["cr252_age"] = age_;
            
        //         // Invoke the Web API to creat the new record
        //         this._context.webAPI.createRecord("cr252_user_details", data).then(
        //             (response: ComponentFramework.LookupValue) => {
        //                 console.log("Result after creating a record.")
        //                 console.log(response);
        //             },
        //             (errorResponse) => {
        //                 console.log("Error in creating a record")
        //                 console.log(errorResponse)
        //             }
        //         );
        // }

        //  retrive the multiple records 
        // public Get() {
        //     this._context.webAPI.retrieveMultipleRecords("cr252_user_details", "?$filter=cr252_age lt 50 and cr252_age gt 20").then(
        //         (response: any) => {
        //             console.log("Result after Getting a record.")
        //             console.log(response)
        //         },
        //         (errorResponse) => {
        //             console.log("Error in Getting a record")
        //             console.log(errorResponse)
        //         }
        //     );
        // }


        // public Update() {
        //     const data: ComponentFramework.WebApi.Entity = {};
        //     data["cr252_username"] = "rajagopal546";
        //     data["cr252_email"] = "rajagopal@gmail.com";
        //     data["cr252_age"] = "27";
        //     // Invoke the Web API to creat the new record
        //     this._context.webAPI.updateRecord("cr252_user_details", "7ffbeb48-7c1f-ed11-b83e-000d3ac9cef1",data).then(
        //         (response: ComponentFramework.LookupValue) => {
        //             console.log("Result after updating a record.")
        //             console.log(response);
        //             alert('Record updated successfully');
        //         },
        //         (errorResponse) => {
        //             console.log("Error in updating a record")
        //             console.log(errorResponse)
        //         }
        //     );
        // }


        // public Delete() {
        //     this._context.webAPI.deleteRecord("cr252_user_details", "7ffbeb48-7c1f-ed11-b83e-000d3ac9cef1").then(
        //         (response: any) => {
        //             console.log("Result after Deleting a record.")
        //             console.log(response);
        //             alert('Record deleted successfully');
        //         },
        //         (errorResponse) => {
        //             console.log("Error in Deleting a record")
        //             console.log(errorResponse)
        //         }
        //     );
        // }



    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
