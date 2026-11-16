import { Controller, useForm, useWatch, type SubmitHandler } from "react-hook-form";
import styles from "./CreateTripForm.module.css";
import { createTripSchema, type CreateTripValues } from "../../schemas/createTripSchema";
import InputField from "../../../../components/inputField/InputField";
import Button from "../../../../components/button/Button";
import ButtonLink from "../../../../components/link/ButtonLink";
import TextareaField from "../../../../components/textareaField/TextareaField";
import DatePickerField from "../../../../components/datePickerField/DatePickerField";
import { formatDateToString, parseDateOnlyDatePicker } from "../../../../utils/dateFormatters";
import { zodResolver } from "@hookform/resolvers/zod";

function CreateTripForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateTripValues>({
    resolver: zodResolver(createTripSchema),
    defaultValues: {
      tripName: "",
      destination: "",
      startDate: "",
      endDate: "",
      description: "",
      coverImageUrl: "",
    },
  });

  const startDate = useWatch({
    control,
    name: "startDate",
  });

  const onCreateTripSubmit: SubmitHandler<CreateTripValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(onCreateTripSubmit)}
    >
      <div className={styles.formHeader}>
        <h2>Trip details</h2>
        <p>Basic information about your adventure.</p>
      </div>

      <InputField
        type="text"
        label="Trip name"
        error={errors.tripName?.message}
        placeholder="Name your trip, whether you want..."
        {...register("tripName")}
      />
      <InputField
        label="Destination"
        placeholder="e.g. Rome, Italy"
        error={errors.destination?.message}
        {...register("destination")}
      />

      <div className={styles.row}>
        <Controller
          control={control}
          name="startDate"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePickerField
              label="Start Date"
              error={errors.startDate?.message}
              selected={value ? parseDateOnlyDatePicker(value) : new Date()}
              onChange={(date) => onChange(date ? formatDateToString(date) : "")}
              onBlur={onBlur}
              minDate={new Date()}
            />
          )}
        />

        <Controller
          control={control}
          name="endDate"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePickerField
              label="End Date"
              error={errors.endDate?.message}
              selected={value ? parseDateOnlyDatePicker(value) : new Date()}
              onChange={(date) => onChange(date ? formatDateToString(date) : "")}
              onBlur={onBlur}
              minDate={startDate ? parseDateOnlyDatePicker(startDate) : new Date()}
            />
          )}
        />
      </div>

      <TextareaField
        label="Description (optional)"
        error={errors.description?.message}
        placeholder="A few words about your trip..."
        {...register("description")}
      />

      <InputField
        label="Cover image URL (optional)"
        error={errors.coverImageUrl?.message}
        type="url"
        placeholder="https://..."
        {...register("coverImageUrl")}
      />

      <p className={styles.formInformation}>
        You'll become the owner. Invite your friends after creating the trip.
      </p>

      <div className={styles.actions}>
        <ButtonLink
          variant="secondary"
          to="/dashboard/trips"
        >
          Cancel
        </ButtonLink>

        <Button
          variant="primary"
          type="submit"
        >
          Create trip
        </Button>
      </div>
    </form>
  );
}

export default CreateTripForm;
