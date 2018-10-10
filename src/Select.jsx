/*
UI component for filtering and sorting
*/

import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

class Select extends React.Component {
    handleChange(e) {
        const { field, onChange } = this.props;
        if (field === 'Sort by') {
            onChange(e.target.value);
        } else {
            onChange(field.toLowerCase(), e.target.value);
        }
    }

    render() {
        const { field, items } = this.props;
        const options = [];
        if (items.length === 0) {
            options.push(<option key="null" value="---null---">None</option>);
        } else {
            if (field !== 'Sort by') {
                options.push(<option key="null" value="---null---">Choose...</option>);
            }
            items.sort().map((v) => {
                options.push(<option key={v} value={v}>{v}</option>);
                return true;
            });
        }
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor={`inputGroupSelect_${field.replace(/\s+/ig, '')}`}>{field}</label>
                </div>
                <select
                    className="custom-select"
                    id={`inputGroupSelect_${field.replace(/\s+/ig, '')}`}
                    onChange={e => this.handleChange(e)}
                >
                    {options}
                </select>
            </div>
        );
    }
}

Select.propTypes = {
    items: PropTypes.array.isRequired,
    field: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Select;
