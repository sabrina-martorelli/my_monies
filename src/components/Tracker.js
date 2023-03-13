
import InitPots from './InitPots';
import AddTransaction from './AddTransaction';
import RenderTotalExpenses from './RenderTotalExpenses'
import RenderTransactions from './RenderTransactions';
import RenderCards from './RenderCards';
import RenderIncome from './RenderIncome';
import RenderFiveTransactions from './RenderFiveTransactions';
import RenderTopFive from './RenderTopFive';
import ResponsiveRenderFiveTransactions from './ResponsiveRenderFiveTransactions'
import ResponsiveRenderIncome from './ResponsiveRenderIncome'


import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Tracker() {

  return (
    <>
      <InitPots />

 

      <Grid container spacing={1} justifyContent="center" pb={10}
        pr={5}
        pl={5}  >

        <Grid item xs={12} sm={7}>
          <RenderCards />
        </Grid>

        <Grid item xs={12} sm={5} >
          <RenderTopFive />
        </Grid>

        <Grid item xs={12} sm={6} >
          <AddTransaction />
        </Grid>

        <Grid item xs={12} sm={6}
          display={{ xs: "none", sm: "block" }}
        >
          <RenderTransactions />
        </Grid>

        {/* A different version of the component will show depending of the screen size in use */}
        <Grid item sm={6}
          display={{ xs: "none", sm: "block" }}>
          <RenderIncome />
        </Grid>

        <Grid item xs={12}
          display={{ xs: "block", sm: "none" }}>
          <ResponsiveRenderIncome />
        </Grid>

        {/* A different version of the component will show depending of the screen size in use */}
        <Grid item sm={6}
          display={{ xs: "none", sm: "block" }} >
          <RenderFiveTransactions />
        </Grid>

        <Grid item xs={12}
          display={{ xs: "block", sm: "none" }}>
          <ResponsiveRenderFiveTransactions />
        </Grid>

        {/* Render Total Expenses will hide on xs */}
        <Grid item xs={12}
          display={{ xs: "none", sm: "block" }}>
          <RenderTotalExpenses />
        </Grid>

        <Grid item xs={12}
          display={{ xs: "block", sm: "none" }}>
          <Typography
            variant='h5'
            align='center'
            sx={{ p: 5 }}>
            Use desktop version to see Transactions History , Total Expenses and full version of data .
          </Typography>
        </Grid>

      </Grid>

    </>
  );
}
export default Tracker;