import Button from "../../../../components/button/Button";
import styles from "./TripExpenses.module.css";

function TripExpenses() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.totalSharedCostsWrapper}>
        <h3 className={styles.totalSharedCostsTitle}>Total shared costs</h3>
        <p className={styles.totalSharedCostsValue}>$1,240.00</p>
        <p className={styles.totalSharedCostsUserShare}>Your share: $310.00 - 4 participants</p>
      </div>

      <Button
        type="button"
        variant="primary"
      >
        Add expense
      </Button>

      <ul className={styles.expensesList}>
        <li className={styles.expensesItem}>
          <article className={styles.expenseWrapper}>
            <hgroup className={styles.expenseInformation}>
              <h3 className={styles.expenseTitle}>Apartment</h3>
              <p className={styles.expenseDetails}>Paid by Maciej - Split equally</p>
            </hgroup>

            <p
              aria-label="Total expense: $960.00"
              className={styles.expenseTotal}
            >
              $960.00
            </p>
          </article>
        </li>

        <li className={styles.expensesItem}>
          <article className={styles.expenseWrapper}>
            <hgroup className={styles.expenseInformation}>
              <h3 className={styles.expenseTitle}>Apartment</h3>
              <p className={styles.expenseDetails}>Paid by Maciej - Split equally</p>
            </hgroup>

            <p
              aria-label="Total expense: $960.00"
              className={styles.expenseTotal}
            >
              $960.00
            </p>
          </article>
        </li>

        <li className={styles.expensesItem}>
          <article className={styles.expenseWrapper}>
            <hgroup className={styles.expenseInformation}>
              <h3 className={styles.expenseTitle}>Apartment</h3>
              <p className={styles.expenseDetails}>Paid by Maciej - Split equally</p>
            </hgroup>
            <p
              aria-label="Total expense: $960.00"
              className={styles.expenseTotal}
            >
              $960.00
            </p>
          </article>
        </li>
      </ul>

      <div className={styles.userBalanceWrapper}>
        <h3 className={styles.userBalanceTitle}>Your balance</h3>
        <p className={styles.userBalanceOwed}>You are owed $650.00</p>

        <p className={styles.userBalanceAdnotation}>
          Based on recorded expenses. No payments are sent by Gatherly
        </p>
      </div>
    </div>
  );
}

export default TripExpenses;
