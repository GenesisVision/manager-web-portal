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
* The MetaTraderOrder model module.
* @module model/MetaTraderOrder
* @version v1
*/
export default class MetaTraderOrder {
    /**
    * Constructs a new <code>MetaTraderOrder</code>.
    * @alias module:model/MetaTraderOrder
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>MetaTraderOrder</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MetaTraderOrder} obj Optional instance to populate.
    * @return {module:model/MetaTraderOrder} The populated <code>MetaTraderOrder</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaTraderOrder();

            
            
            

            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'Number');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('dateOpen')) {
                obj['dateOpen'] = ApiClient.convertToType(data['dateOpen'], 'Date');
            }
            if (data.hasOwnProperty('dateClose')) {
                obj['dateClose'] = ApiClient.convertToType(data['dateClose'], 'Date');
            }
            if (data.hasOwnProperty('priceOpen')) {
                obj['priceOpen'] = ApiClient.convertToType(data['priceOpen'], 'Number');
            }
            if (data.hasOwnProperty('priceClose')) {
                obj['priceClose'] = ApiClient.convertToType(data['priceClose'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} login
    */
    login = undefined;
    /**
    * @member {Number} ticket
    */
    ticket = undefined;
    /**
    * @member {module:model/MetaTraderOrder.DirectionEnum} direction
    */
    direction = undefined;
    /**
    * @member {String} symbol
    */
    symbol = undefined;
    /**
    * @member {Date} dateOpen
    */
    dateOpen = undefined;
    /**
    * @member {Date} dateClose
    */
    dateClose = undefined;
    /**
    * @member {Number} priceOpen
    */
    priceOpen = undefined;
    /**
    * @member {Number} priceClose
    */
    priceClose = undefined;
    /**
    * @member {Number} profit
    */
    profit = undefined;
    /**
    * @member {Number} volume
    */
    volume = undefined;






    /**
    * Allowed values for the <code>direction</code> property.
    * @enum {String}
    * @readonly
    */
    static DirectionEnum = {
    
        /**
         * value: "Buy"
         * @const
         */
        "Buy": "Buy",
    
        /**
         * value: "Sell"
         * @const
         */
        "Sell": "Sell"    
    };



}


