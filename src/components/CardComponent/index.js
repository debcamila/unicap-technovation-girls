import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React, { PureComponent } from 'react';

const styles = () => ({});

class ProductCardComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      classes,
      product,
    } = this.props;

    return (
      <Grid item xs={12} sm={4} style={{marginBottom:'50px'}}>
          <img style={{ width: '100%', height: '100%' }}
            src={product}
            alt="Programação"
            title="Programação"
          />
      </Grid>
    );
  }
}


export default (withStyles(styles)(ProductCardComponent));
