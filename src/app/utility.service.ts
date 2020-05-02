import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private platform: Platform){		
}



getRootPath(): string {
	console.log('this.platform.is("hybrid"): ' + this.platform.is('hybrid'));
	
	if(this.platform.is('hybrid'))
	{
		return "http://192.168.1.197:8080/PaintSalesSystemRws/Resources/"; //Laptop IP address
		//return "http://192.168.0.103:8080/PaintSalesSystemRws/Resources/";//bingsen's IP address
	}
	else
	{
		return "/api/";
	}
}
}
