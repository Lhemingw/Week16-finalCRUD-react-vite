<tr>
<th>Worker: Fed,</th>
<th>Worker: State</th>
<th>Worker: FICA-med</th>
<th>Worker: FICA-ss</th>
<th>Workers comp</th>
<br/>
<br/>

<th>EMPLOYER PAID FICA-MEDICARE</th>
<th>EMPLOYER PAID FICA-SOC SEC</th>
<th>NM WORKERS COMP QUARTER</th>
<th>NM WORKERS COMP INSURANCE</th>
</tr>

// table I may need later for Headers.

                // <table className="container">
                //     <thead>
                //         <tr>
                //             <th className="container">Monday</th>
                //             <th className="container ">Tuesday</th>
                //             <th className="container ">Wednesday</th>
                //             <th className="container">Thursday</th>
                //             <th className="container">Friday</th>
                //             <th className="container">Saturday</th>
                //             <th className="container">Sunday</th>
                //             <th className="container">Extra</th>
                //             <th className="flex-container userContainer"></th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <tr>
                //         </tr>
                //         </tbody>
                    
                //             <td><label type="text">Monday</label></td>
                //             <td><input type="number"> onChange={() => setNewMonday(e.target.value)}</input></td>
                //         </tr>
                //     </tbody>
                // </table> 

{/* <img class="img" height src="http://www.photos-public-domain.com/wp-content/uploads/2018/03/personal-finance-money.jpg" alt=""> <!---------------------Execute java script; - put your SCRIPT tag at the end before closing BODY tag
2- put your SCRIPT in HEAD with the defer attribute--> */}


// for Home component {/* 1. Record % tax.
// 2. bring total spending pay over to Finances
// 3. Amount to sav, have click buttons-10%/20%, 2 categories 
// 4. Need to bring this to Finance*/}

// TO Make Work:
// Need days of the week button to work.
// Need to fix spendable money, workers, employes days of the week sorted get that centered

/* </tbody>        */

// <!---I got the table headers spaced because of adding a block to the th called boxed header-->    

// <!---I got the table headers spaced because of adding a block to the the

// from setting.json tried to use to get my circle of doom stoping // "json.validate.enable":false,
      
    // "json.schemaDownload.enable": true,

    // The rest of the days of the Week below:
//     import React from 'react';
// import {useState} from 'react'


// export default function Home({users}) {
// 	const [newFed, setNewFed] =useState('')
//     const [newState, setNewState] =useState('')
//     const [newFicaMed, setNewFicaMed] =useState('')
// 	const [newFicaSs, setNewFicaSs] =useState('') 
// 	const [newQuarterwcomp, setNewQuarterwcomp] =useState('')
// 	const [newUpdate, setNewUpdate]= useState('')
	

// 	const[newMonday, setNewMonday] =useState('')
// 	const[newTuesday, setNewTuesday] =useState('')
// 	const[newWednesday, setNewWednesday] =useState('')
// 	const[newThursday, setNewThursday] =useState('')
// 	const[newFriday, setNewFriday] =useState('')
// 	const[newSaturday, setNewSaturday] =useState('')
// 	const[newSunday, setNewSunday] =useState('')
// 	const[newExtra, setNewExtra] =useState('')

// 	  const [user] =useState('')
// 	const use = (e, userObject) => {
// 		e.preventDefault();
// 		Perform state updates here based on user input
// 	  };
	
// 	  const updatePayHours = (e, ) => {
// 		e.preventDefault();
// 		Perform state updates here based on user input
// 	  };

	
	
	  
	  

	// function updateUser(e, userObject){ I broke it with this.
    //     e.preventDefault()
    //     let updatedUserObject ={
    //         ...userObject,
    //         payCheck: updatedPayCheck,
    //         totalTax: updatedTotalTax,
    //         totalSaving: updatedTotalSaving,
    //     }
	// 	return (	
	// 		<div>
	// 				<h4>Home</h4>
	// 				 <h2>PayCheck Calculator</h2>  I want to add this here 
	// 				<div className='header'>					
	// 				<h3 className="text-center">Pay Check Hours</h3>					
	// 				</div>
					
	// 				<p className='divp'>Divide amount of FED tax, State, Both FICA by Earning total for this pay. 
    //      You can do a yearly one by using YTD totals for tax/earnings.  To get a percent you divide little by big.</p>
    // {/* <!-----------I want to put here the capability to add a way to estimate your take home pay--> */}
					
	// 				<div className= "container-table mb-5"></div>
	// 				<form>
	// 					<label type="text"className="container-table" nameday="Name of the day week">Monday</label>
	// 					<input type="text"name="submit" value={newMonday}onChange={(e) =>setNewMonday(e.target.value)}/>
						

	// 					<label type="text" className="container-table" nameday="Name of the day week">Tuesday</label>
	// 					<input type="text"name="submit" value={newTuesday}onChange={(e) =>setNewTuesday(e.target.value)}/>
						

	// 					<label type="text" className="container-table" nameday="Name of the day week">Wednesday</label>
	// 					<input type="text"name="submit" value={newWednesday}onChange={(e) =>setNewWednesday(e.target.value)}/>
						

	// 					<label type="text" className="container-table" nameday="Name of the day week">Thursday</label>
	// 					<input type="text"name="submit"value={newThursday}onChange={(e) =>setNewThursday(e.target.value)}/>
	// 					{/* <input type="text" className="container"  onChange={(e) => (setNewThursday(e.target.value))}></input> */}

	// 					<label type="text" className=" container-table" nameday="Name of the day week">Friday</label>
	// 					<input type="text"name="submit"value={newFriday}onChange={(e) =>setNewFriday(e.target.value)}/>
	// 					{/* <input type="text" className="container" onChange={(e) => (setNewFriday(e.target.value))}></input> */}

	// 					<label type="text" className="container-table"  nameday="Name of the day week">Saturday</label>
	// 					<input type="text"name="submit"value={newSaturday}onChange={(e) =>setNewSaturday(e.target.value)}/>
						

	// 					<label type="text" className="container-table " nameday="Name of the day week">Sunday</label>
	// 					<input type="text"name="submit"value={newSunday}onChange={(e) =>setNewSunday(e.target.value)}/>
						

	// 					<label type="text" className="container-table" nameday="Name of the day week">Extra</label>
	// 					<input type="text" className="col-sm-1"name="submit"value={newExtra}onChange={(e) =>setNewExtra(e.target.value)}/>
						

	// 					<button className="button mb-5" onClick={(e) => updatePayHours(e)}>Update</button>	
	// 					</form>						

	// 				<form>
	// 				<div className="container-table header">
	// 					<h3 className='text-center '>Pay Amount</h3>
	// 					</div>
	// 					<label className="boxed-header-container-table">$15.98</label>
	// 					<button className="button" onClick={(e) => updatePayHours}>Submit</button>		

	// 					<label className="boxed-header container-table">$17.98</label>
	// 					<button className="button" onClick={(e) => updatePayHours}>Submit</button>	

	// 					<label className="boxed-header container-table">$20.00</label>
	// 					<button className="button" onClick={(e) => updatePayHours}>Submit</button>	

	// 					<label type="text" className="container-table text-center mb-5 col-sm-1">Enter your Pay</label>
	// 					<input type="text"name="submit"value={newUpdate}onChange={(e) =>setNewUpdate(e.target.value)}/>
	// 					<button className="button" onClick={(e) => updatePayHours}>Submit</button>	

	// 					<input type="text" className="boxed-header" onChange={(e) => (updatePayHours(e.target.value))}></input>	 
	// 					 <input type="button"> onChange={(e) => updatePayHours(e, user)}Submit Pay</input> 

	// 				</form>
					

	// 				<form>
	// 					<h3 className="header">TAX TAKEN OUT</h3>
 	// 		 	<h3 className='text-center mb-5 col-sm-1'>WORKERS</h3>
 	// 			<label className="boxed-header container-table">Fed</label>
	// 			 <input type="text"name="fed"value={newFed}onChange={(e) =>setNewFed(e.target.value)}/>
	           
    //              <label className="boxed-header">State</label> 
	// 			<input type="text"name="state" value={newState}onChange={(e) => setNewState(e.target.value)}></input>

    //              <label className="boxed-header">FICA-Med</label>
	// 			 <input type="text"name="fica-med"value={newFicaMed}onChange={(e) =>setNewFicaMed(e.target.value)}/>


    //              <label className="boxed-header">FICA-SS</label> 
	// 			 <input type="text"name="fica-ss"value={newFicaSs}onChange={(e) =>setNewFicaSs(e.target.value)}/>
 			

	// 			<label className="boxed-header">Quarterly W/Comp</label>
	// 			<input type="text"name="quarterwcomp"value={newQuarterwcomp}onChange={(e) =>setNewQuarterwcomp(e.target.value)}/> 
			

 	// 			<label className="text-center mb-5 col-sm-1">Submit</label> 
	// 			 <input type="text"name="submit"value={newUpdate}onChange={(e) =>setNewUpdate(e.target.value)}/>
 	// 			 <input type="button" onChange={(e) => updateUser(e, user)}>Submit Pay</input> 
	// 			 <input type="button" onClick={() => updateUser(e, user)}>Submit $</input> 
	// 			<button className="button"onClick={() => updateUser(e,user)}>Submit</button>
				
 	// 		</form> 

	// 		<form>
	// 			<h3 className='text-center mb-3 col-sm-1'>EMPLOYER</h3>
	// 			<label className="boxed-header container-table">Fed</label>
	// 			<input type="text"name="submit"value={newFed}onChange={(e) =>setNewFed(e.target.value)}/>
	            

    //              <label className="boxed-header">State</label> 
	// 			 <input type="text"name="submit"value={newState}onChange={(e) =>setNewState(e.target.value)}/>
				

    //              <label className="boxed-header">FICA-Med</label>
	// 			 <input type="text"name="submit"value={newFicaMed} onChange={(e) =>setNewFicaMed(e.target.value)}/>
				

    //              <label className="boxed-header">FICA-SS</label> 
	// 			 <input type="text"name="submit"value={newFicaSs}onChange={(e) =>setNewFicaSs(e.target.value)}/>
 	

	// 			<label className="boxed-header">Quarterly W/Comp</label> 
	// 			<input type="text"name="submit"value={newQuarterwcomp}onChange={(e) =>setNewQuarterwcomp(e.target.value)}/>
			

 	// 			<label className="boxed-header">Submit</label> 
	// 			 <input type="text"name="submit"value={newUpdate}onChange={(e) =>setNewUpdate(e.target.value)}/>
 				
	// 			<button className="button text-center mb-5 col-sm-1"onClick={() => updateUser(e,user)}>Submit</button>
	// 		</form>	
	// 		<div className='text-center'>
	// 			 bootstrap style 
	// 		<h4 className='header'>Saving</h4>
		
	// 		<h3 className='text-center'>Amount to Save</h3>
	// 		<p className='text-center'>This is the amount to save for a Roth, Emergency, some other plans money.</p>
	// 		<p className='text-center'>I recomend at least 10% for Roth monthly if not more, or 10% for savings, instead save for something else</p>
				
	// 		<label type="text"className="button2 form-group text-center">Roth</label>
	// 		<input type="text"name="submit"value={newUpdate}onChange={(e) =>setNewUpdate(e.target.value)}/>
	// 		<button className="button" onClick={(e) => updatePayHours}>Submit</button>	

	// 		<label type="text"className="mb-3 button2 ">Emergency Save</label>
	// 		<input type="text"name="submit"value={newUpdate}onChange={(e) =>setNewUpdate(e.target.value)}/>
	// 		<button className="button" onClick={(e) => updatePayHours}>Submit</button>	

	// 		<label type="text"className=" mb-3 button2 mb-5 text-center">Other Saving</label>
	// 		<input type="text"name="submit"value={newUpdate}onChange={(e) =>setNewUpdate(e.target.value)}/>
	// 		<button className="button mb-5 text-center col-sm-1" onClick={(e) => updatePayHours}>Submit</button>	

	// 		<h3 className=' form-group text-center mb-3'>Spendable Money</h3>
	// 		<p className='divp mb-3 text-center'>This is the amount of money to be able to take over to finances page</p>
	// 		<label type="text"className="mb-3 form-group">Spendable Money</label>
	// 		<input type="text"  className="mb-5 col-sm-1 text-center"name="submit"value={newUpdate}onChange={(e) =>setNewUpdate(e.target.value)}/>
	// 		<button className="button mb-3 text-center" onClick={(e) => updatePayHours}>Submit</button>	
	// 		</div>
	// )
	// }
   //..................TOOK BELOW CODE SCRIPT CODE OUT OF PACKAGE.JSON..........//
   // "test": "react-scripts test --env=jsdom",
    // "eject": "react-scripts eject"

	// took out tsconfig.json code, below is the code that I took out:
	// {
	// 	"compilerOptions": {
	// 		"target": "ESNext",
	// 		"lib": ["dom", "dom.iterable", "esnext"],
	// 		"allowJs": false,
	// 		"skipLibCheck": true,
	// 		"esModuleInterop": true,
	// 		"allowSyntheticDefaultImports": true,
	// 		"strict": true,
	// 		"forceConsistentCasingInFileNames": true,
	// 		"module": "esnext",
	// 		"moduleResolution": "node",
	// 		"resolveJsonModule": true,
	// 		"isolatedModules": true,
	// 		"noEmit": true,
	// 		"noFallthroughCasesInSwitch": true,
	// 		"jsx": "react-jsx",
	// 		"types": ["vite/client", "vite-plugin-svgr/client"]
	// 	},
	
	
	// 	"include": ["src"]
	// }
	