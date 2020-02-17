import * as React from 'react';
import ClassNames from 'classnames';
import injectSheet from 'react-jss'
import styled from 'styled-components';
const Heading = styled.h1`
  color: gray;
  font-size: 1.5em;
`;
const Paragraph = styled.p`
  font-size: 1.1em;
`;


const styles = {
  root: {

  },
}
let SberLayout = ({ classes, }) => {
  return <div className={ClassNames(classes.root)}>
    <Heading>
      Heading
    </Heading>
    <Paragraph>
      Article's text
    </Paragraph>
  </div>
}
export default injectSheet(styles)(SberLayout);
//  export default Kanban;