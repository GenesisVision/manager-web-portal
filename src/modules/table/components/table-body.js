import React, { Fragment } from "react";
import { ChartIcon } from "components/icon/chart-icon";

const TableBody = ({
  t,
  items,
  children,
  tag: Tag,
  className,
  createButtonBody,
  createText
}) => {
  const createAsset = (createButtonBody, createText) => {
    return (
      <div className="create-asset">
        <div className="create-asset__create-icon">
          <ChartIcon />
        </div>
        <div className="create-asset__text">{createText}</div>
        <div className="create-asset__button">{createButtonBody}</div>
      </div>
    );
  };
  const setMessage = message => {
    return Tag === "tbody" ? (
      <tr>
        <td colSpan="11">
          {(createButtonBody &&
            message !== "Loading..." &&
            createAsset(createButtonBody, createText)) || (
            <div className="message">{message}</div>
          )}
        </td>
      </tr>
    ) : (
      (createButtonBody &&
        message !== "Loading..." &&
        createAsset(createButtonBody, createText)) || (
        <div className="message">{message}</div>
      )
    );
  };
  const renderItems = () => {
    if (items === null || items === undefined) return setMessage("Loading...");
    if (items.length === 0) return setMessage("There are no items.");
    return items.map((x, idx) => <Fragment key={idx}>{children(x)}</Fragment>);
  };

  return <Tag className={className}>{renderItems()}</Tag>;
};

export default TableBody;
