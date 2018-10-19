import "./fund-asset.scss";

import classNames from "classnames";
import Tooltip from "components/tooltip/tooltip";
import React, { Component } from "react";
import NumberFormat from "react-number-format";

import FundAssetTooltip from "../fund-asset-tooltip/fund-asset-tooltip";
import FundAsset, { FUND_ASSET_TYPE } from "./fund-asset";

class FundAssetContainer extends Component {
  render() {
    const {
      assets,
      type,
      size,
      length,
      removable,
      removeHandle,
      remainder,
      hoveringAsset
    } = this.props;
    return (
      <div
        className={classNames("fund-assets", {
          "fund-assets--text": type === FUND_ASSET_TYPE.text
        })}
      >
        {assets.map(
          (asset, idx) =>
            idx < (size || assets.length) && (
              <Tooltip
                key={idx}
                render={() => <FundAssetTooltip currency={asset.asset} />}
              >
                <div>
                  <FundAsset
                    icon={asset.icon}
                    percent={asset.percent}
                    currency={asset.asset}
                    type={type}
                    last={idx === assets.length - 1}
                    removable={removable}
                    removeHandle={removeHandle}
                    className={
                      hoveringAsset === asset.asset && "fund-asset--hover"
                    }
                  />
                </div>
              </Tooltip>
            )
        )}
        {size < (length || assets.length) &&
          ((type === FUND_ASSET_TYPE.text && (
            <div>... +{assets.length - size}</div>
          )) || (
            <div className="fund-asset__container">
              <div className="fund-asset fund-asset--others-count">
                +{(length || assets.length) - size}
              </div>
            </div>
          ))}
        {remainder > 0 && (
          <div className="fund-asset fund-asset--remainder">
            <NumberFormat value={remainder} suffix="%" displayType="text" />
          </div>
        )}
      </div>
    );
  }
}

export default FundAssetContainer;
