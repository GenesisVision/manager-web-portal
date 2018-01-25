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
* The RegisterManagerViewModel model module.
* @module model/RegisterManagerViewModel
* @version v1
*/
export default class RegisterManagerViewModel {
    /**
    * Constructs a new <code>RegisterManagerViewModel</code>.
    * @alias module:model/RegisterManagerViewModel
    * @class
    * @param email {String} 
    * @param password {String} 
    */

    constructor(email, password) {
        

        
        

        this['email'] = email;this['password'] = password;

        
    }

    /**
    * Constructs a <code>RegisterManagerViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RegisterManagerViewModel} obj Optional instance to populate.
    * @return {module:model/RegisterManagerViewModel} The populated <code>RegisterManagerViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterManagerViewModel();

            
            
            

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} password
    */
    password = undefined;
    /**
    * @member {String} confirmPassword
    */
    confirmPassword = undefined;








}


