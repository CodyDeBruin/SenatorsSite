import React from 'react';
import { Card, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

const SenCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.SenData.person.name}</CardTitle>
          <CardSubtitle>{props.SenData.state} - {props.SenData.party}</CardSubtitle>
          This Senator is a {props.SenData.person.gender}.
          You can visit their <a href={props.SenData.website}>website</a>,
          or give them a call at {props.SenData.phone}
        </CardBody>
      </Card>
    </div>
  );
};

export default SenCard;