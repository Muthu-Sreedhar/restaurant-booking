

import { config } from "../config";
const ConfigObject = new config();
const Config = ConfigObject.getConfig();


export class Commons {

    /**
       * Created By  :  Sreedhar 
       * Created Date : Nov 20 2024
       * Description  : This below function is used to set the isUserloggedIn flag in client storage
       */
    setLocalValues(storageName: any, storageValue: any) {
        try {
            let name = `${Config?.INSTANCE?.INSTANCE_KEY}@${storageName}`
            sessionStorage.setItem(name, storageValue)
        }
        catch (error) {
            console.error("Unable to set the value in session storage", error)
        }
    }

    /**
   * Created By  :  Sreedhar 
   * Created Date : Nov 20 2024
   * Description  : This below function is used to get the Logged in auth data flag in client storage
   */
    getLocalValues(storageName: any) {
        try {
            let name = `${Config?.INSTANCE?.INSTANCE_KEY}@${storageName}`
            let localvalue = sessionStorage.getItem(name)
            return localvalue
        }
        catch (error) {
            console.error("Unable to get the value from session storage", error)
        }
    }
}


