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
* The InvestmentProgramStatistic model module.
* @module model/InvestmentProgramStatistic
* @version v1
*/
export default class InvestmentProgramStatistic {
    /**
    * Constructs a new <code>InvestmentProgramStatistic</code>.
    * @alias module:model/InvestmentProgramStatistic
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InvestmentProgramStatistic</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InvestmentProgramStatistic} obj Optional instance to populate.
    * @return {module:model/InvestmentProgramStatistic} The populated <code>InvestmentProgramStatistic</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentProgramStatistic();

            
            
            

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currentBalance')) {
                obj['currentBalance'] = ApiClient.convertToType(data['currentBalance'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {Number} currentBalance
    */
    currentBalance = undefined;
    /**
    * @member {Number} profit
    */
    profit = undefined;








}


