import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/actions';
import s from "./Filter.module.css";

const Filter = ({ value, onChange}) => (
  <div className = {s.filter}>
  <label className={s.label}>
      Find contacts by name
      <div className={s.castomInput}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
        />
     </div>
  </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  value: state.phonebook.filter, 
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);