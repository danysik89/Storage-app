import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  textField: {
    marginRight: 15,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DeletePage(props) {
  const { classes } = props;

  return (
    <div>
        <Typography variant="h5" component="h3">
          Delete item
        </Typography>
        <div styles={{'backgroundColor': 'red'}}> 
            <TextField
                id="outlined-parameter-input-1"
                label="Parametr-1"
                className={classes.textField}
                name="parameter"
                autoComplete="parameter"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-parameter-input-2"
                label="Parametr-2"
                className={classes.textField}
                name="parameter"
                autoComplete="parameter"
                margin="normal"
                variant="outlined"
            />
            <br/>
            <Button variant="contained" color="secondary" className={classes.button}>delete</Button>
        </div>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">
                            {row.calories}
                        </TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
    </div>
  );
}

DeletePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeletePage);