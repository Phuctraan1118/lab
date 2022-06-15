import React, { Component } from'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }
  renderDishes(dish) {
    return (
      <div className="col-12 col-sm-5">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  // renderDish(dish) {
  //   if (dish != null)
  //     return (
  //       <Card>
  //         <CardImg top src={dish.image} alt={dish.name} />
  //         <CardBody>
  //           <CardTitle>{dish.name}</CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   else
  //     return (
  //       <div></div>
  //     );
  // }

  renderComments(comments) {
    const comment = comments.map((item) => {
      return (
        <div>
          <p>{item.comment}</p>
          <p>{item.author} {item.date}</p>
        </div>
      );
    });
    return (
      <div className="col-12 col-sm-7">
        <h2>comments</h2>
        {comment}
      </div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <renderDishes dish={this.props.dish} />
            <renderComments comments={this.props.dishes.comments}/>
          </div>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }
}
export default DishDetail;