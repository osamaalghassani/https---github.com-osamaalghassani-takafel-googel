
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';



import { Grid, TextField, Button, Card, CardContent, Typography ,Container,RadioGroup,Radio,useRadioGroup,FormControlLabel,FormControl,FormLabel} from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ValidationTextFields() {

const submitHandler=(e)=>{
  e.preventDefault()
  console.log(e.target);
}
  const [t,_]=useTranslation();
  return (
 
    <Container>
    <Card style={{ maxWidth: "100%", padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {t("AdduserTitle")}
          </Typography> 
     
            <form onSubmit={submitHandler}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder={t("AdduserInput.person.placeholder")} label={t("AdduserInput.person.label")} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder={t("AdduserInput.father.placeholder")} label={t("AdduserInput.father.label")} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder={t("AdduserInput.grand.placeholder")} label={t("AdduserInput.grand.label")} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder={t("AdduserInput.last.placeholder")} label={t("AdduserInput.last.label")} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}  sm={6}>
                  <TextField type="number" placeholder={t("AdduserInput.phone.placeholder")} label={t("AdduserInput.phone.placeholder")} variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateField
                fullWidth
                label={t("AdduserInput.birthday.label")}
                format="DD-MM-YYYY"
                required
              />    </LocalizationProvider>
                 </Grid>
                <Grid item xs={6}>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{t("AdduserInput.gender.label")}</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label={t("AdduserInput.gender.fmale")} />
                  <FormControlLabel value="male" control={<Radio />} label={t("AdduserInput.gender.male")} />
                  
                </RadioGroup>
              </FormControl>             
                 </Grid>
                <Grid item xs={6}>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{t("AdduserInput.Mstatus.label")}</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label={t("AdduserInput.Mstatus.single")} />
                  <FormControlLabel value="male" control={<Radio />} label={t("AdduserInput.Mstatus.marid")} />
                  
                </RadioGroup>
              </FormControl>             
                 </Grid>
                <Grid item xs={6} >
                  <Button type="submit" variant="contained" color="primary" fullWidth >{t("AdduserInput.add")}</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>   
          </Container>
    
  );
}