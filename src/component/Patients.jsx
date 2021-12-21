import React, { Component } from 'react'
import Individual from './Individual'

export class Patients extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            pateintsdata : [
                {
                    name : "dummy",
                    age : 12
                },
                {
                    name : "dummy2",
                    age : 13
                }
            ],
            hereName : "",
            hereAge : ""
       }

       
   }
   changeHandle = (e) => {
    this.setState({[e.target.name] : e.target.value})
    console.log(this.state);
   }
   submitHandle = (e) => {
       e.preventDefault();
       const dict = {
           name : this.state.hereName,
           age : this.state.hereAge
       }
       const array_here = this.state.pateintsdata;
       array_here.push(dict);
       console.log(array_here);
       this.setState({pateintsdata : array_here});
       this.setState({hereName : ""});
       this.setState({hereAge : ""});
       console.log(this.state);
   }

   deleteNote = (id) => {
       const prevPatients = this.state.pateintsdata;
       console.log("Data :");
       console.log(prevPatients);
       console.log(id);
       const new_data = prevPatients.filter((item,index) => {
           return index !== id;
       })
       console.log(new_data);
       this.setState({ pateintsdata : new_data });
     
   }

   
    render() {
        return (
           <>
           <div className='outer-box'>
            <form action="" onSubmit={this.submitHandle}>
                
                <div className="d-flex row justify-content-center">
                  <div className="col-lg-6">
                  <label htmlFor="" className='mt-2'>Patients Name</label>
                  </div>
                  <div className="col-lg-6">
                  <input type="text" name="hereName" value={this.state.hereName} className='p-2' onChange={this.changeHandle}/> 
                  </div>
                </div>
                <div className="d-flex row">
                  <div className="col-lg-6">
                  <label htmlFor="" className='mt-2'>Age</label>
                  </div>
                  <div className="col-lg-6">
                  <input type="number" name="hereAge" value={this.state.hereAge} className='p-2' onChange={this.changeHandle}/>
                  </div>
                </div>
                <button type="submit">Add</button>
            </form>
            </div>
            <div className='p-5'>
                <table className='p-5' >
                    <tr>

                    <td style={{ border: "1px solid black" }} className='p-2'>Patient Name </td>
                    <td style={{ border: "1px solid black" }} className='p-2'> Age </td>
                    </tr>
                   {
                       (this.state.pateintsdata).map((data,id) => {
                          return (
                            //  <tr>
                            //      <td style={{border : "1px solid black"}}>{data.name}</td>
                            //      <td style={{border : "1px solid black"}}>{data.age}</td>
                            //      <td> <button onClick={this.deleteThis(id)}>Delete</button> </td>
                            //  </tr>
                            <Individual key={id} id={id} name={data.name} age={data.age} onDelete={this.deleteNote}/>
                          )
                       })
                   }
                </table>
            </div>
            </>
        )
    }
}

export default Patients
