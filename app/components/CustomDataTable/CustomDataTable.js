/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import DataTable from 'react-data-table-component';
import ReactTooltip from 'react-tooltip';
import DisplayLabel from 'components/DisplayLabel';

const columns = [
  {
    name: '#',
    selector: 'id',
    maxWidth: '5px'
  },
  {
    name: 'Question',
    selector: 'question',
    minWidth: '300px'
  },
  {
    name: 'Category',
    selector: 'category'
  },
  {
    name: 'State',
    selector: 'state'
  },
  {
    name: 'QuestionGroup',
    cell: (row) => (
      <div>
        <a data-tip data-for="QuestionGroup">View</a>
        <ReactTooltip place="bottom" type="light" effect="solid" id="QuestionGroup">
          <span>{row.question_group}</span>
        </ReactTooltip>
      </div>
    ),
  },
  {
    name: 'License',
    cell: (row) => (
      <div>
        <a data-tip data-for="License">View</a>
        <ReactTooltip place="bottom" type="light" effect="solid" id="License">
          <span>{row.license}</span>
        </ReactTooltip>
      </div>
    ),
  },
  {
    name: 'Status',
    selector: 'status'
  },
  {
    name: 'Display',
    selector: 'display',
    cell: (row) => {
      let l;
      if (row.display.toLowerCase() === 'published') {
        l = <DisplayLabel mode="active" text="Published" />;
      } else {
        l = <DisplayLabel mode="inactive" text="Draft" />;
      }
      return (l);
    },
  },
  {
    name: 'Action',
    selector: 'action'
  },
];

const myTheme = {
  title: {
    fontSize: '22px',
    fontColor: 'rgba(0,0,0,.87)',
    backgroundColor: 'transparent',
    height: '1px',
  },
  header: {
    fontSize: '12px',
    fontWeight: '500',
    fontColor: 'rgba(0,0,0,.54)',
    fontColorActive: 'rgba(0,0,0,.87)',
    backgroundColor: '#fff',
    height: '48px',
    denseHeight: '32px',
    borderRadius: '9px 9px 0 0'
  },
  contextMenu: {
    backgroundColor: '#e3f2fd',
    fontSize: '18px',
    fontColor: 'rgba(0,0,0,.87)',
    transitionTime: '225ms',
  },
  rows: {
    // default || spaced
    spacing: 'default',
    fontSize: '13px',
    fontColor: 'rgba(0,0,0,.87)',
    backgroundColor: '#fff',
    borderWidth: '1px',
    borderColor: 'rgba(0,0,0,.12)',
    stripedColor: 'rgba(0,0,0,.03)',
    hoverFontColor: 'rgba(0,0,0,.87)',
    hoverBackgroundColor: 'rgba(0,0,0,.08)',
    height: '48px',
    denseHeight: '32px',
  },
  cells: {
    cellPadding: '48px',
  },
  expander: {
    fontColor: 'rgba(0,0,0,.87)',
    expanderColor: 'rgba(0,0,0,.54)',
    expanderColorDisabled: 'rgba(0,0,0,.12)',
    backgroundColor: 'transparent',
  },
  pagination: {
    fontSize: '13px',
    fontColor: 'rgba(0,0,0,.54)',
    backgroundColor: 'transparent',
    buttonFontColor: 'rgba(0,0,0,.54)',
    buttonHoverBackground: 'rgba(0,0,0,.12)',
  }
};

class CustomDataTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="data-table">
        <DataTable
          columns={columns}
          data={this.props.data}
          highlightOnHover
          customTheme={myTheme}
        />
      </div>
    );
  }
}
CustomDataTable.propTypes = {
  data: PropTypes.array
};

export default CustomDataTable;
