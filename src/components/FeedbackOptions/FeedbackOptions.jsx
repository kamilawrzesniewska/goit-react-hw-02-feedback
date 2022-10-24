import propTypes from 'prop-types';
import style from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
    {options.map(option => {
      return (
          <button
          className={style.btn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
          >
            {option}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
    options: propTypes.array.isRequired,
    onLeaveFeedback: propTypes.func.isRequired
};