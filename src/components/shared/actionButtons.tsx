import React from 'react'
import c from 'classnames';
// css transform handled by webpack, ts shouldnt know about it
// @ts-ignore
import styles from '../../digger-modules/styles.css';

export const ActionButtons = ({ onNext, onCancel }) => (
  <div className={styles.finishButtons}>
    <button className={c(styles.button, styles.buttonCallTo)}
      onClick={_ => onNext()}>
      Next
    </button>
    <button className={c(styles.button)}
      onClick={_ => onCancel()}>
      Try Again
    </button>
  </div>
)

export const SuccessPanel = ({ onNext, onCancel, children }) => (
  <div className={styles.success}>
    <div className={styles.successInner}>
      <div className={styles.completedTitle}>Completed</div>
      <p className={styles.completedText}>
        {children}
      </p>
      <ActionButtons onNext={onNext} onCancel={onCancel} />
    </div>
  </div>
)
