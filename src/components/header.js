import React, { Component } from 'react';

// const getTheYear = () => {
//   const newDate = new Date;
//   return newDate.getFullYear()
// }
//
//
// const Header = () => {
//   return (
//     <>
//       Hello World!
//       <div> { getTheYear() + 5 }</div>
//     </>
//   )
// }


class Header extends Component {

  state = {
    title:'The keywords are:',
    // keywords:'',
    count:0,
    active: false
  }


  // hello = () => {
  //   console.log("test");
  // }
  //
  // inputerChange = (event) => {
  //   this.setState({
  //     keywords: event.target.value
  //   })
  // }

  increment = (event) =>{
    console.log(this.state.active);
    let value = this.state.count % 2 === 0 ? true : false;

    this.setState( (state,props) => ({

        active: value,
        count: state.count + 1

    }))
  }

  render(){
    return (
      <header style={{ background: `${ this.state.active ? 'red':'blue' }`}}>
      <div
        className='logo'
        onClick = { this.hello }
        >
        Logo</div>
      <input
        onChange = { this.props.getKeywords }/>

        <div>{ this.state.title }</div>
        <div>{ this.state.keywords }</div>
        <div>{ this.state.count }</div>
        <button onClick = { this.increment }> onClick </button>
    </header>
    )
  }
}
// can also do onChange = { (event) => inputChange(event) }

export default Header; // allows us to import this in other files
