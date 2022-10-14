import Accordion from "./Accordion";
// import styles from './faq.module.css'


const faqData = [
    {
       title:'1. What’s the MetaCryp TOKEN',
       content:'MetaCryp Token is the native token of the MetaCryp Network, acting as a key to theincredible features that the metaverse offers. It is a token based on the Binance Smart Chain.'
    },
    
    {
        title:'2. Why was MetaCryp Made',
        content:'The aim of MetaCryp is to create a home away from home, offering people a space to have intense fun and forget about the stress of daily living.'
     },
     {
        title:'3. Will there be a Whitelisted Presale ',
        content:'Yes, there will be.'
     },
     {
        title:'4. Who makes decision in the MetaCryp Network',
        content:'MetaCryp Network is a community-centric ecosystem, meaning that holders of the native tokens can submit proposals and vote on changes'
     },
     {
        title:'5. Will there be NFTs',
        content:'Yes, there will be.'
     },
     {
        title:'6. What’s will be the Mint Price',
        content:'The mint price will be dependent on how early you interact with the community. Earlly users will have access to a cheaper mint price when the public mint begins'
     },
   
  ];

const FAQ = () => {
    return (
        <div className="faq" id="faq">
            <div className="faq_cnt">
                <div className="faq_hd">
                    <h2>FAQs</h2>
                </div>

                <div className="faq_ct">
                    {faqData.map((item, index) => (
                    <Accordion
                        title={item.title}
                        content={item.content}
                        key={item.title + index}
                    />
                   ))}
                </div>
            </div>
             
            </div>
    )
}

export default FAQ