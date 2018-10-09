import React from 'react';
import SenCard from './senatorcard'
import { FormGroup, Label, Input, CardColumns } from 'reactstrap';

class CardHolder extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        cards: [],
        loaded : false,
        filteringby: ""
    }

    this.updateSenators = this.updateSenators.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

    componentWillMount() {
      this.updateSenators()
    }

    updateSenators(byparams=""){
        const urlFriend = `https://senatorsapidata-qmfngepahb.now.sh/${byparams}`
        fetch(urlFriend) 
        .then(res => {return res.json()})
        .then ( rsx => {
            this.setState({
                cards: rsx
            })
            this.setState({
                loaded: true,
                filteringby: byparams
            })        
        })
        .catch ((error) => console.log("error",error))
    }

    handleSelection(event){
        if(event.target.value === "Male" || event.target.value === "Female"){
            this.updateSenators(`gender/${event.target.value.toLowerCase()}`)
        }   else {
            this.updateSenators(`party/${event.target.value.toLowerCase()}`)
        }   
    }

    render() {

    return (
      <div className="HomePage">


       <FormGroup>
          <Label for="MultiSelect">Filter by: </Label>
          <Input type="select" name="selectMulti" id="MultiSelect" onChange={this.handleSelection}>
            <option>Republican</option>
            <option>Democrat</option>
            <option>Independent</option>
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>

        <hr/>

        <CardColumns>
            {this.state.loaded ? this.state.cards.map( (v,i) => {return(<SenCard key={i} SenData={v}/>)} ) : <React.Fragment></React.Fragment>}
        </CardColumns>
      </div>
    );
  }
}

export default CardHolder;
