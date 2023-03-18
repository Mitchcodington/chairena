import {environment, Recycle,SofaRescue,PlanTree, Tree} from "../assets"

const Responsibility = () => {
  return (
    <div>
          <div className="policy">
            <h6 className="policy-head">OUR ENVIRONMENTAL POLICY</h6>
            <p className="policy-text">Leaving our customers feeling at home on a sofa they
                 love doesn’t come at the expense of the environment. 
                 We all call this planet home, and it’s important to us - and 
                 to our customers - that we take every possible step to minimise 
                 our impact on the world around us, throughout every stage of the 
                 design, manufacture and distribution of our products. Initiatives
                 like increasing our use of green energy and reducing our emissions
                  help us, as an ethical retailer, in our aim towards becoming an
                   eco-friendly company.
                   </p>
        </div>
        <img src={environment} alt='' className="environment"/>

        <div className="recycle-main">
        <img src={Recycle} alt='' className="recycle"/>
        <h2 className="recycle-head">Recycling our Packaging</h2>
        <p className="recycle-text">We're on track to use 100% recyclable packaging from 2021, 
            helping to reduce the amount of unsustainable packaging we 
            use as a business. We've also removed all polystyrene from our
            packaging and are working on how to reduce the total amount of
            packaging we need to protect our chairs.</p>

            <img src={SofaRescue} alt='' className="rescue"/>
        <h2 className="recycle-head">Recycling old chairs</h2>
        <p className="recycle-text">We have saved thousands of chairs from landfill 
        diverting, on average, 94% of the chair waste from landfill, helping reduce 
        the impact of the chair industry on the environment. Our recycling service 
        is also carbon offset, meaning our chair Rescue service goes towards 
        compensating for any emissions we produce as a company.</p>

        </div>

      <div className="plantree">
        <div className="plan-main">
        <img src={PlanTree} alt='' className="plan"/>
       
        <p className="plan-text">We have saved thousands of chairs from landfill 
        diverting, on average, 94% of the sofa waste from landfill, helping reduce 
        the impact of the chair industry on the environment. Our recycling service 
        is also carbon offset, meaning our chair Rescue service goes towards 
        compensating for any emissions we produce as a company.</p>
        </div>
      <div>
      <img src={Tree} alt='' className="trees"/>
      </div>
      </div>
    </div>
  )
}
export default Responsibility