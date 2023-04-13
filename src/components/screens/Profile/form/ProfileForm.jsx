import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styles from "../Profile.module.scss";
const ProfileForm = ({ user, first, second, third, fourth }) => {
  const { handleSubmit, control, reset, formState, error } = useForm({
    defaultValues: {
      Name: "",
      SecondName: "",
      BirthDate: "",
      WebsiteURL: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Block}>
      <Controller
        name="Name"
        control={control}
        render={({ field }) => (
          <TextField
            color="primary"
            id="form-Name"
            label={user?.displayName ? user?.displayName : "Name"}
            variant="outlined"
            name="Name"
            onChange={(e) => field.onChange(e)}
            value={field.value}
          />
        )}
      />
      <Controller
        name={second}
        control={control}
        render={({ field }) => (
          <TextField
            color="primary"
            id={"form-" + second}
            label={second}
            variant="outlined"
            name={second}
            onChange={(e) => field.onChange(e)}
            value={field.value}
          />
        )}
      />
      <Controller
        name={third}
        control={control}
        render={({ field }) => (
          <TextField
            color="primary"
            id={"form-" + third}
            label={third}
            variant="outlined"
            name={third}
            onChange={(e) => field.onChange(e)}
            value={field.value}
          />
        )}
      />
      <Controller
        name={fourth}
        control={control}
        render={({ field }) => (
          <TextField
            color={fourth}
            id={"form-" + fourth}
            label={fourth}
            variant="outlined"
            name={fourth}
            onChange={(e) => field.onChange(e)}
            value={field.value}
          />
        )}
      />
      <Button type="submit" variant="outlined">
        Update
      </Button>
    </form>
  );
};

export default ProfileForm;
