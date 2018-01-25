/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The ProfileShortViewModel model module.
* @module model/ProfileShortViewModel
* @version v1
*/
export default class ProfileShortViewModel {
    /**
    * Constructs a new <code>ProfileShortViewModel</code>.
    * @alias module:model/ProfileShortViewModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProfileShortViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProfileShortViewModel} obj Optional instance to populate.
    * @return {module:model/ProfileShortViewModel} The populated <code>ProfileShortViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileShortViewModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {Number} balance
    */
    balance = undefined;








}


