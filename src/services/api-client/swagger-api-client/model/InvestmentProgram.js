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
import Investment from './Investment';
import ManagerAccount from './ManagerAccount';
import ManagerToken from './ManagerToken';





/**
* The InvestmentProgram model module.
* @module model/InvestmentProgram
* @version v1
*/
export default class InvestmentProgram {
    /**
    * Constructs a new <code>InvestmentProgram</code>.
    * @alias module:model/InvestmentProgram
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentProgram</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgram} obj Optional instance to populate.
    * @return {module:model/InvestmentProgram} The populated <code>InvestmentProgram</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentProgram();

            
            
            

            if (data.hasOwnProperty('investment')) {
                obj['investment'] = Investment.constructFromObject(data['investment']);
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = ManagerAccount.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ManagerToken.constructFromObject(data['token']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Investment} investment
    */
    investment = undefined;
    /**
    * @member {module:model/ManagerAccount} account
    */
    account = undefined;
    /**
    * @member {module:model/ManagerToken} token
    */
    token = undefined;








}


