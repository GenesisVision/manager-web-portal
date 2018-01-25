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
* The InvestmentRequest model module.
* @module model/InvestmentRequest
* @version v1
*/
export default class InvestmentRequest {
    /**
    * Constructs a new <code>InvestmentRequest</code>.
    * @alias module:model/InvestmentRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentRequest} obj Optional instance to populate.
    * @return {module:model/InvestmentRequest} The populated <code>InvestmentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentRequest();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {Number} amount
    */
    amount = undefined;
    /**
    * @member {module:model/InvestmentRequest.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {module:model/InvestmentRequest.StatusEnum} status
    */
    status = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "Invest"
         * @const
         */
        "Invest": "Invest",
    
        /**
         * value: "Withdrawal"
         * @const
         */
        "Withdrawal": "Withdrawal"    
    };

    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "New"
         * @const
         */
        "New": "New",
    
        /**
         * value: "Executed"
         * @const
         */
        "Executed": "Executed"    
    };



}


