export default function About () {
    return (
        <div>
            About Route
            <>
{/* Started to make some thing to explain the take out tax further. I have bootstrap here*/}
    <h2>PayCheck EstimatePG2</h2>
    {/* <!-----Worker: Fed, State, FICA-Med, FICA-SS, Workers Comp-use flex box or grid----> */}
<div>

</div>    
      <p>Divide amount of FED tax, State, Both FICA by Earning total for this pay. 
        You can do a yearly one by using YTD totals for tax/earnings.  To get a percent you divide little by big.</p>
    {/* <!-----------I want to put here the capability to add a way to estimate your take home pay--> */}
{/* Put a small amount of table in here, I do want to have a way of putting away of estimating your take home pay, which seems to be the other
in the Home page I believe.  May want to have an explain here. */}
    <br/>
    <br/>
    <br>
    </br>
    {/* I have container-table, bootstrap I believe. along with the workers side, I may not need the employes side. */}
    <table className="container-table">
        <thead>
            <tr>
                <th>WORKERS</th>
            </tr>
        </thead>
        <tbody>
            <tr className="container-table">
                <td className="boxed-header">Fed</td>
                <td className="boxed-header">State</td>
                <td className="boxed-header">FICA-Med</td>
                <td className="boxed-header">FICA-SS</td>
            </tr>
        </tbody>
    </table>

    <table className="container-table">
        <thead>
            <tr>
                <th>EMPLOYER</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="boxed-header">Fed</td>
                <td className="boxed-header">State</td>
                <td className="boxed-header">FICA-Med</td>
                <td className="boxed-header">FICA-SS</td>
            </tr>
        </tbody>       
       
        {/* <!---I got the table headers spaced because of adding a block to the th called boxed header-->  */}    
        
    </table>
    {/* <!---I got the table headers spaced because of adding a block to the th called boxed header-->  */}
        

    {/* <img class="img" height =600px src="http://www.photos-public-domain.com/wp-content/uploads/2018/03/personal-finance-money.jpg" alt=""> <!---------------------Execute java script; - put your SCRIPT tag at the end before closing BODY tag
2- put your SCRIPT in HEAD with the defer attribute--> */}

</>
        </div>
    )
}