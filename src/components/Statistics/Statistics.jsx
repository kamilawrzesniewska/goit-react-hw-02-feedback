import PropTypes from 'prop-types';
import style from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <>
        <div className={style.statistic}>Good: {good}</div>
        <div className={style.statistic}>Neutral: {neutral}</div>
        <div className={style.statistic}>Bad: {bad}</div>
        <div className={style.statistic}>Total: {total}</div>
        <div className={style.statistic}>Positive Feedback: {positivePercentage}%</div>
    </>
        
    )
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
