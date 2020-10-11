import React from 'react';
import {Props, State} from './../types/quiz_type';


import './style.css';



class CountdownTimer extends React.Component< {startTimeInSeconds:number}, State> {
    private timer: any;
  
    constructor(props: Props) {
      super(props);
      this.state = {
        timeRemainingInSeconds: props.startTimeInSeconds
      };
    }
  
    decrementTimeRemaining = () => {
      if (this.state.timeRemainingInSeconds > 0) {
        this.setState({
          timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1
        });
      } else {
        clearInterval(this.timer!);
      }
    };
  
    componentDidMount() {
      this.timer = setInterval(() => {
        this.decrementTimeRemaining();
      }, 1000);
    }
  
    render() {
      return (
        <div className="countdown-timer">
          <div className="countdown-timer__circle">
            <svg>
              <circle
                r="24"
                cx="26"
                cy="26"
                style={{
                  animation: `countdown-animation ${this.props
                    .startTimeInSeconds}s linear`
                }}
              />
            </svg>
          </div>
          <div className="countdown-timer__text">
            {this.state.timeRemainingInSeconds}s
          </div>
        </div>
      );
    }
  }

  export default CountdownTimer;