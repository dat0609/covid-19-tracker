import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

CountrySelector.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
}));

function CountrySelector(props) {
  const { value, onChange, countries } = props;
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <InputLabel htmlFor="country-selector" shrink>
        Country
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={onChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => {
          return (
            <option value={country.ISO2.toLowerCase()} key={country.Slug}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Select country</FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;
