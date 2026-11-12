import CreateTripForm from '../../../features/trips/components/createTripForm/CreateTripForm';
import styles from './CreateTrip.module.css';

function CreateTrip() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Create a trip</h1>
        <p className={styles.text}>
          Add the essentials now. You can invite travelers and plan activities later.
        </p>
      </header>


      <div className={styles.formWrapper}>
        <CreateTripForm />
      </div>
    </div>
  )
}

export default CreateTrip