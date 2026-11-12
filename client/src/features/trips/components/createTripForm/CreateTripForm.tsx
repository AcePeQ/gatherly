import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './CreateTripForm.module.css';
import type { CreateTripValues } from '../../schemas/createTripSchema';
import InputField from '../../../../components/inputField/InputField';
import Button from '../../../../components/button/Button';
import ButtonLink from '../../../../components/link/ButtonLink';
import TextareaField from '../../../../components/textareaField/TextareaField';


function CreateTripForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateTripValues>({
    defaultValues: {
      tripName: "",
      destination: "",
      startDate: "",
      endDate: "",
      description: "",
      coverImageUrl: ""
    }
  });

  const onCreateTripSubmit: SubmitHandler<CreateTripValues> = (data) => {
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onCreateTripSubmit)}>
      <div className={styles.formHeader}>
        <h2>Trip details</h2>
        <p>Basic information about your adventure.</p>
      </div>

      <InputField type='text' label='Trip name' placeholder='Name your trip, whether you want...' {...register("tripName")} />
      <InputField label='Destination' />

      <div className={styles.row}>
        <InputField type='date' label='Start date' error={errors.startDate?.message} {...register("startDate")} />
        <InputField type='date' label='End date' error={errors.endDate?.message} {...register("endDate")} />
      </div>

      <TextareaField label='Description (optional)' placeholder='A few words about your trip...' {...register("description")} />

      <InputField label='Cover image URL (optional)' type="url" placeholder='https://...' {...register("coverImageUrl")} />

      <p className={styles.formInformation}>You'll become the owner. Invite your friends after creating the trip.</p>

      <div className={styles.actions}>
        <ButtonLink variant="secondary" to="/dashboard/trips">
          Cancel
        </ButtonLink>

        <Button variant="primary" type="submit">
          Create trip
        </Button>
      </div>
    </form>
  )
}

export default CreateTripForm