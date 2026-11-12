import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './CreateTripForm.module.css';
import type { CreateTripValues } from '../../schemas/createTripSchema';
import InputField from '../../../../components/inputField/InputField';
import Button from '../../../../components/button/Button';
import ButtonLink from '../../../../components/link/ButtonLink';


function CreateTripForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateTripValues>({
    defaultValues: {
      tripName: "",
      destination: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
      coverImageUrl: ""
    }
  });

  const onCreateTripSubmit: SubmitHandler<CreateTripValues> = (data) => {
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onCreateTripSubmit)}>
      <InputField label='Trip name' placeholder='Name your trip, whether you want...' />
      <InputField label='Destination' />

      <div className={styles.row}>
        <InputField label='Start date' />
        <InputField label='End date' />
      </div>

      <InputField label='Description (optional)' placeholder='A few words about your trip...' />

      <InputField label='Cover image URL (optional)' type="url" placeholder='https://...' />

      <p className={styles.formInformation}>You'll become the owner. Invite your friends after creating the trip.</p>

      <div className={styles.ctaWrapper}>
        <ButtonLink className={styles.ctaBtn} to="/dashboard" variant='secondary'>Return to dashboard</ButtonLink>
        <Button className={styles.ctaBtn} variant='primary' type='submit'>Create trip</Button>
      </div>
    </form>
  )
}

export default CreateTripForm