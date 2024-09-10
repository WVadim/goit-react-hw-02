import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => (
  <div className={css.options}>
    <button className={css.button} onClick={() => updateFeedback("good")}>
      Good
    </button>
    <button className={css.button} onClick={() => updateFeedback("neutral")}>
      Neutral
    </button>
    <button className={css.button} onClick={() => updateFeedback("bad")}>
      Bad
    </button>
    {totalFeedback > 0 && (
      <button className={css.resetButton} onClick={resetFeedback}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
