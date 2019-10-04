import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
 this.state = {
   class: "fill-green",
   or: false,
   tr: false,
 }
 this.one= this.one.bind(this);
  }
  one() {
   
    document.getElementById("1").style.backgroundColor = "#FF0000";
  }
  two() {
   
    document.getElementById("2").style.backgroundColor = "#FF0000";
   
  }
  three() {
   
    document.getElementById("3").style.backgroundColor = "#FF0000";
  }
  four() {
   
    document.getElementById("4").style.backgroundColor = "#FF0000";
  }
  five() {
   
    document.getElementById("5").style.backgroundColor = "#FF0000";
  }
  six() {
   
    document.getElementById("6").style.backgroundColor = "#FF0000";
  }
  seven() {
   
    document.getElementById("7").style.backgroundColor = "#FF0000";
  }
  eight() {
   
    document.getElementById("8").style.backgroundColor = "#FF0000";
  }
  nine() {
   
    document.getElementById("9").style.backgroundColor = "#FF0000";
  }
  ten() {
   
    document.getElementById("10").style.backgroundColor = "#FF0000";
  }
  eleven() {
   
    document.getElementById("11").style.backgroundColor = "#FF0000";
  }
  twelve() {
   
    document.getElementById("12").style.backgroundColor = "#FF0000";
  }
  thirteen() {
   
    document.getElementById("13").style.backgroundColor = "#FF0000";
  }
  fourteen() {
   
    document.getElementById("14").style.backgroundColor = "#FF0000";
  }
  fifteen() {
   
    document.getElementById("15").style.backgroundColor = "#FF0000";
  }
  sixteen() {
   
    document.getElementById("16").style.backgroundColor = "#FF0000";
  }
  seventeen() {
   
    document.getElementById("17").style.backgroundColor = "#FF0000";
  }
  eighteen() {
   
    document.getElementById("18").style.backgroundColor = "#FF0000";
  }
  nineteen() {
   
    document.getElementById("19").style.backgroundColor = "#FF0000";
  }
  twenty() {
   
    document.getElementById("20").style.backgroundColor = "#FF0000";
  }
  twentyone() {
   
    document.getElementById("21").style.backgroundColor = "#FF0000";
  }
  
  twentytwo() {
   
    document.getElementById("22").style.backgroundColor = "#FF0000";
  }
  
  twentythree() {
   
    document.getElementById("23").style.backgroundColor = "#FF0000";
  }
  twentyfour() {
   
    document.getElementById("24").style.backgroundColor = "#FF0000";
  }
  twentyfive() {
   
    document.getElementById("25").style.backgroundColor = "#FF0000";
  }
  twentysix() {
   
    document.getElementById("26").style.backgroundColor = "#FF0000";
  }
  twentyseven() {
   
    document.getElementById("27").style.backgroundColor = "#FF0000";
  }
  twentyeight() {
   
    document.getElementById("28").style.backgroundColor = "#FF0000";
  }
  twentynine() {
   
    document.getElementById("29").style.backgroundColor = "#FF0000";
  }
  thirty() {
   
    document.getElementById("30").style.backgroundColor = "#FF0000";
  }
  render() {
  return (
    <div>
    
    <link rel="stylesheet" type="text/css" href="http://atomo.ueuo.com/atomo.css"></link>
    <select>
  <option value="jan">jan</option>
  <option value="feb">feb</option>
  <option value="mar">mar</option>
  <option value="apr">apr</option>
  <option value="may">may</option>
  <option value="jun">june</option>
  <option value="aug">aug</option>
  <option value="sep">sep</option>
  <option value="oct">oct</option>
  <option value="nov">nov</option>
  <option value="dec">dec</option>
  <option value="apr">apr</option>
</select>
    <div className="grid-container">
    <p id="1" onClick={this.one} className={this.state.class}>1</p>
    <p id="2" onClick={this.two} className={this.state.class}>2</p>
    <p id="3" onClick={this.three} className={this.state.class}>3</p>
    <p id="4" onClick={this.four} className={this.state.class}>4</p>
    <p id="5" onClick={this.five} className={this.state.class}>5</p>
    <p id="6" onClick={this.six} className={this.state.class}>6</p>
    <p id="7" onClick={this.seven} className={this.state.class}>7</p>
    <p id="8" onClick={this.eight} className={this.state.class}>8</p>
    <p id="9" onClick={this.nine} className={this.state.class}>9</p>
    <p id="10" onClick={this.ten} className={this.state.class}>10</p>
    <p id="11" onClick={this.eleven} className={this.state.class}>11</p>
    <p id="12" onClick={this.twelve} className={this.state.class}>12</p>
    <p id="13" onClick={this.thirteen} className={this.state.class}>13</p>
    <p id="14"onClick={this.fourteen} className={this.state.class}>14</p>
    <p id="15" onClick={this.fifteen} className={this.state.class}>15</p>
    <p id="16" onClick={this.sixteen} className={this.state.class}>16</p>
    <p id="17" onClick={this.seventeen} className={this.state.class}>17</p>
    <p id="18" onClick={this.eighteen} className={this.state.class}>18</p>
    <p id="19" onClick={this.nineteen} className={this.state.class}>19</p>
    <p id="20" onClick={this.twenty} className={this.state.class}>20</p>
    <p id="21" onClick={this.twentyone} className={this.state.class}>21</p>
    <p id="22" onClick={this.twentytwo} className={this.state.class}>22</p>
    <p id="23" onClick={this.twentythree} className={this.state.class}>23</p>
    <p id="24" onClick={this.twentyfour} className={this.state.class}>24</p>
    <p id="25" onClick={this.twentyfive} className={this.state.class}>25</p>
    <p id="26" onClick={this.twentysix} className={this.state.class}>26</p>
    <p id="27" onClick={this.twentyseven} className={this.state.class}>27</p>
    <p id="28" onClick={this.twentyeight} className={this.state.class}>28</p>
    <p id="29"onClick={this.twentynine} className={this.state.class}>29</p>
    <p id="30" onClick={this.thirty} className={this.state.class}>30</p>
    </div>
    </div>
  );
  }
}

export default App;
