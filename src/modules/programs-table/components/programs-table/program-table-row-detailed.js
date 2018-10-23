import AssetAvatar from "components/avatar/asset-avatar/asset-avatar";
import { Icon } from "components/icon/icon";
import Profitability from "components/profitability/profitability";
import ProgramPeriodPie from "components/program-period/program-period-pie/program-period-pie";
import { GVButton } from "gv-react-components";
import FavoriteIcon from "modules/favorite-asset/components/favorite-icon/favorite-icon";
import ProgramDepositContainer from "modules/program-deposit/program-deposit-container";
import { TableRow } from "modules/table/components";
import { composeManagerDetailsUrl } from "pages/manager/manager.page";
import { PROGRAM_DETAILS_ROUTE } from "pages/programs/programs.routes";
import { composeProgramDetailsUrl } from "pages/programs/programs.routes";
import { PROGRAM_SLUG_URL_PARAM_NAME } from "pages/programs/programs.routes";
import React, { Component } from "react";
import { translate } from "react-i18next";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { formatValue } from "utils/formatter";
import replaceParams from "utils/replace-params";

import ProgramBigChart from "../program-big-chart/program-big-chart";

class ProgramTableRowDetailed extends Component {
  state = {
    isOpenInvestToProgramPopup: false
  };
  handleOpenInvest = () => {
    const { isAuthenticated, redirectToLogin } = this.props;
    if (isAuthenticated) {
      this.setState({ isOpenInvestToProgramPopup: true });
    } else {
      redirectToLogin();
    }
  };
  handleCloseInvest = () => {
    this.setState({ isOpenInvestToProgramPopup: false });
  };

  render() {
    const {
      t,
      program,
      isAuthenticated,
      toggleFavorite,
      onCollapseClick
    } = this.props;

    const programDetailsUrl = replaceParams(PROGRAM_DETAILS_ROUTE, {
      [`:${PROGRAM_SLUG_URL_PARAM_NAME}`]: program.url
    });

    return (
      <TableRow>
        <td className="program-detailed" colSpan="11">
          <div className="program-detailed__container program-detailed__container--outer">
            <div className="program-detailed__container program-detailed__container--inner">
              <div className="program-detailed__info">
                <div className="program-detailed__avatar">
                  <Link to={composeProgramDetailsUrl(program.url)}>
                    <AssetAvatar
                      url={program.logo}
                      level={program.level}
                      alt={program.title}
                      size="medium"
                      color={program.color}
                    />
                  </Link>
                  <div className="program-detailed__avatar--name">
                    <div className="program-detailed__title">
                      <Link to={programDetailsUrl}>
                        <GVButton variant="text" color="secondary">
                          {program.title}
                        </GVButton>
                      </Link>
                    </div>
                    <div className="program-detailed__manager">
                      <Link to={composeManagerDetailsUrl(program.manager.url)}>
                        <GVButton variant="text" color="primary">
                          {program.manager.username}
                        </GVButton>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="program-detailed__strategy">
                  {t("programs-page.programs-header.strategy")}
                </div>
                <div className="program-detailed__description">
                  {program.description}
                </div>
              </div>
              <div className="program-detailed__statistic">
                <div className="program-detailed__chart">
                  <ProgramBigChart
                    data={program.chart}
                    programId={program.id}
                  />
                </div>
                <div className="program-detailed__statistic-data">
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.balance")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      {(+program.statistic.balanceGVT.amount).toFixed(0)} GVT
                    </div>
                  </div>
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.currency")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      {program.currency}
                    </div>
                  </div>
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.investors")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      {program.statistic.investorsCount}
                    </div>
                  </div>
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.available-to-invest")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      {formatValue(program.availableInvestment)} GVT
                    </div>
                  </div>
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.trades")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      {program.statistic.tradesCount}
                    </div>
                  </div>
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.period")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      <ProgramPeriodPie
                        start={program.periodStarts}
                        end={program.periodEnds}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.drawdown")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      <NumberFormat
                        value={program.statistic.drawdownPercent}
                        suffix="%"
                        decimalScale={2}
                        displayType="text"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="program-detailed__statistic-data--label">
                      {t("programs-page.programs-header.profit")}
                    </div>
                    <div className="program-detailed__statistic-data--value">
                      <Profitability
                        value={program.statistic.profitPercent}
                        prefix="sign"
                      >
                        <NumberFormat
                          value={program.statistic.profitPercent}
                          suffix="%"
                          allowNegative={false}
                          decimalScale={2}
                          displayType="text"
                        />
                      </Profitability>
                    </div>
                  </div>
                </div>
                {isAuthenticated &&
                  program.personalDetails && (
                    <div className="program-detailed__favorites-block">
                      <span style={{ float: "right" }}>
                        {t("program-details-page.description.addToFavorites")}
                        <FavoriteIcon
                          onClick={toggleFavorite}
                          id={program.id}
                          selected={program.personalDetails.isFavorite}
                        />
                      </span>
                    </div>
                  )}
                <div className="program-detailed__bottom-block">
                  <GVButton onClick={this.handleOpenInvest}>
                    {t("program-actions.invest")}
                  </GVButton>
                  <ProgramDepositContainer
                    type="program"
                    id={program.id}
                    onClose={this.handleCloseInvest}
                    open={this.state.isOpenInvestToProgramPopup}
                  />
                  <div className="program-detailed__details">
                    <Link to={programDetailsUrl}>
                      <GVButton variant="text" color="secondary">
                        {t("program-actions.details")} &#8250;
                      </GVButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="program-detailed__collapse"
              onClick={onCollapseClick}
            >
              <Icon
                type="collapse"
                className="program-detailed__collapse-icon"
              />
            </div>
          </div>
        </td>
      </TableRow>
    );
  }
}

export default translate()(ProgramTableRowDetailed);