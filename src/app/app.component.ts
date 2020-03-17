// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent  {
//   name = 'Angular';
// }
/*    
*	 Copyright (c) 2011-2019 VIDIZMO LLC                      
*    All Rights Reserved.                                      
*                                                              
*    This program, its components, modules, parts or pieces    
*    are developed by VIDIZMO LLC and are Copyright protected. 
*    Copying, modifying, enhancing, removing, or using part or 
*    as whole is strictly prohibited. VIDIZMO LLC doesn't      
*    give rights to any individual, organization or company,   
*    to make changes to its developed source code.             
*                                                              
*    Please delete and destroy copies of source code that you  
*    may have gotten in error or through any means, and        
*    report it to info@vidizmo.com.                            
*                            
*    Product:
*    http://www.vidizmo.com
*                                                                                  
*    Purpose of map.component.ts:                                   	
*    [PURPOSE]                                                 
*                                 
*    Author of map.component.ts:
*    Fahad Rehman   
*/

import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

/* Models */
import { GeoCoordinate } from './User';

@Component({
    selector: 'select-map',
    templateUrl: './app.component.html'
})
    
export class SelectMapComponent {

    /* takes the geo co ordinates as input */
    @Input()
    geoCoOrdinate: GeoCoordinate = undefined;  

    @Input()
    locationName: string;  

    /* call back event fired when the locations are selected */
    @Output() onCoOrdinateSelected: EventEmitter<GeoCoordinate> = new EventEmitter();

    /* call back event fired when the locations are selected */
    @Output() onClosed: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private router: ActivatedRoute,               
    ) {
    }

    /**
    * When map is clicked
    * @param $event
    */
    public mapClicked($event: MouseEvent): void {

        this.geoCoOrdinate.latitude = $event["coords"]["lat"];
        this.geoCoOrdinate.longitude = $event["coords"]["lng"];
    }

    /**
     * select location
     */
    selectCoOrdinates() {
        this.onCoOrdinateSelected.emit(this.geoCoOrdinate);
    }

    /*  call the close button */
    close() {
        this.onClosed.emit();
    }

}
