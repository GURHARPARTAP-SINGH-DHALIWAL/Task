import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      dateOfBirth:"",
      message:""
    };
  }


  handleChange=(e)=>{

   this.setState({
     dateOfBirth:e.target.value
   });
   
  };



  handleClick=(e)=>{

    e.preventDefault();

    const DOB=new Date(this.state.dateOfBirth);
  
    if(DOB.getTime()>Date.now())
    {
      this.setState({
        message:"You are not born yet"
      });
    
    }
    else
    {  
    
        let inputData, inputArray, year, month, day;

  
        inputData =this.state.dateOfBirth;

 

  
        if (inputData !== "") {

        
          inputArray = inputData.split("-");
          
          [year, month, day] = inputArray;
          year = Number(year);
          month = Number(month);
          day = Number(day);

        
          let current, currentYear, currentMonth, currentDate, Newdate, newMonth;

          
          current = new Date();
          currentYear = current.getFullYear();
          currentMonth = current.getMonth() + 1; 
          currentDate = current.getDate();

        
          if (day === currentDate && month === currentMonth) {
            let birthday = currentYear - year;
            this.setState({
              message:`Congratulation! Today Is your birthday your are${birthday} Years Old. `
            });
          }
          else {

          
            if (day > currentDate) 
            {
              Newdate = currentDate + 30;
              day = Newdate - day;
              currentMonth = currentMonth - 1;
            }
            else
              {
              day = currentDate - day;
            }
          
            if (month > currentMonth)
            {
              newMonth = currentMonth + 12;
              month = newMonth - month;
              currentYear = currentYear - 1;
            } 
            else 
            {
              month = currentMonth - month;
            }
            year = currentYear - year;

          }

          this.setState({
            message: `Your Age : ${year} Years ${month} Months ${day} Days.`,
          });
  }
  else
  {
    this.setState({
      message:"Please enter a Date"
    });
  }

 
    
    
     
        
       

      // console.log(age);
  
    }
  };
  render() { 
    // console.log(this.state);
    return (
      <div>
        <form action="" id="form" className="container card center col-6">
          <h3 className="row">Age Calculator By Gurharpartap</h3>
          <input
            type="date"
            placeholder="Enter DOB"
            className="col-6"
            onChange={(e) => this.handleChange(e)}
          />
          <button className="row btn" onClick={(e) => this.handleClick(e)}>
            Calculate AGE
          </button>
          <div className='bold p-5'>{this.state.message}</div>
        </form>
      </div>
    );
  }
}
 
export default App;