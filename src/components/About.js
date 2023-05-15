import React, {useState} from 'react'

export default function About() {
    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const changeMode = (event)=>{
        if (event.target.textContent === "Enable Dark Mode"){
            setStyle({
                color: "white",
                backgroundColor: "black"
            })
            event.target.textContent = "Enable Light Mode"
            event.target.className = 'btn btn-light mt-4'
        }else if (event.target.textContent === "Enable Light Mode"){
            setStyle({
                color: "black",
                backgroundColor: "white"
            })
            event.target.textContent = "Enable Dark Mode"
            event.target.className = 'btn btn-dark mt-4'
        }
    }
    return (
        <div className='container' style={style}>
            <div className="container">
                <button className="btn btn-dark mt-4" onClick={changeMode}>Enable Dark Mode</button>
            </div>
            <section className="terms">
                <div className="container py-5 px-4" id="en">
                    <h1 className="title text-center mb-5">React App for Text Utils</h1>
                    <ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Service Provider </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Akru Now Sdn Bhd (Company No. 201701044476 / 1258649-U) (“Akru”) is incorporated under the laws of Malaysia and duly licensed by the Securities Commission (SC), pursuant to section 61 of the Capital Markets and Services Act 2007 (“CMSA”) to carry out digital investment management (“DIM”) in Malaysia. The DIM licence allows Akru to conduct fund management business incorporating innovative technologies. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Service Description </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Akru offers an attractive and more accessible way to regularly invest small and large amounts of funds mainly in globally diversified portfolios. Personalised asset allocation for financial goals is deployed into exchange-traded funds (ETFs) and/or unit trust funds (UTFs) through Akru’s proprietary algorithms. By combining brokerage, custodian and investment advisory services, Akru simplifies the investment process. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li>Digital Investment Management Agreement</li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> This DIM Agreement (“Agreement”) sets out the basis and extent to which Akru will provide DIM Services. In the event you choose to engage Akru, you are deemed to have read, understood and accepted this Agreement. </li>
                            </p>
                            <p className="mb-4">
                                <li> You acknowledge and agree that Akru shall retain the right to update this Agreement from time to time by updating the Website and notifying you through email. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li>Effective Date</li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li>This Agreement becomes effective when you tick on the boxes indicating your acceptance of the terms when you sign up with Akru. </li>
                            </p>
                            <p className="mb-4">
                                <li> You are deemed to have understood the financial and other relevant risks upon engaging and signing up with Akru. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Know Your Client (“KYC”) </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li>In order to comply with the obligations under the applicable anti-money laundering and anti-terrorist financing and other regulations set forth by Bank Negara Malaysia and SC, Akru is required to take all reasonable steps to establish the true and full identity of clients including but not limited to obtaining and retaining your private information. You will be informed of the details and documents you are required to furnish to open your account.</li>
                            </p>
                            <p className="mb-4">
                                <li> In the event of failure to provide such required details and documents within a reasonable time, Akru shall have a right to suspend services to your account partially or fully. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Duty of Disclosure </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> It is your duty to ensure that you furnish Akru with accurate and complete KYC information at all times including updating such details when they have changed. You acknowledge and agree that this obligation applies at the time of sign-up and continues throughout the duration of the service. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Scope and Delivery of Our Service </li></div>
                        <ol type="a">    
                            <p className="mb-4">
                                <li> You acknowledge and agree to the following: </li>
                            </p>
                            <ol type="i">
                                <li>Akru provides forecasts and projections using back tested data of asset classes and applying them to the information you provide to get you closer to the fulfilment of your financial goals;</li>
                                <li>The answers and information you provide may neither be complete, nor accurately express your full financial circumstances and may alter the results of financial recommendations Akru gives to you;</li>
                                <li>Your ability to save will also affect the outcomes of the fulfilment of your financial goals and Akru will bear no responsibility for this;</li>
                                <li>Past performance is no indication of future results. Akru will neither guarantee the results of forecasts and projections nor the fulfilment of your financial goals; and</li>
                                <li>Akru will not guarantee returns to the risks you agree to undertake voluntarily with no coercion or undue influence from Akru.</li>
                            </ol>
                            <p className="mb-4">
                                <li> Akru shall provide you a range of investment services under our licence(s) including but not limited to electronic and human financial advisory and other services permitted by our licence(s) and in accordance with our business plans. </li>
                            </p>
                        </ol> 
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Portfolios </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Akru will develop, modify, maintain and update portfolios for the benefit of clients. You agree to give Akru sole discretion to manage such portfolios according to your investment objectives, time horizons, and risk tolerances and following policies set forth in our <a href="https://akrunow.com/investment-whitepaper/" target="_blank">Investment White Paper</a> which outlines our investment philosophy. </li>
                            </p>
                            <p className="mb-4">
                                <li> Nevertheless, nothing in this section shall be deemed as limiting your rights or Akru’s obligations under the laws and regulations applicable in Malaysia. </li>
                            </p>
                            <p className="mb-4">
                                <li> The Portfolio in your account will be valued using the latest market information from third-party data providers. Your account balance for any particular day is valued using the latest prevailing closing prices of the underlying securities and/or funds. The values stated in the Statement of Account are reported in Malaysian Ringgit rounded to the nearest two decimal places, where applicable, based on the latest prevailing closing market exchange rate, as appropriate. Akru does not assume responsibility for the accuracy, timeliness and completeness of the information reported by the third-party data providers. Akru shall not be liable for any losses arising from your use of, or reliance on, such information in any form or manner. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Recommended Portfolio </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> In rendering the DIM services, where applicable, Akru shall adopt a risk-profiling system and apply back-tested expected returns to recommend suitable Portfolio(s) and required savings rates for your investment objectives. </li>
                            </p>
                            <p className="mb-4">
                                <li> It is your sole discretion to provide or not best estimates of your financial circumstances bearing in mind this will affect the outcomes of the fulfilment of your investment objectives. </li>
                            </p>
                            <p className="mb-4">
                                <li> You acknowledge and agree to the following: </li>
                            </p>
                            <ol type="i">
                                <li>Akru can recommend portfolios based on our risk-profiling methodology and your investment objectives</li>
                                <li>The recommended portfolios are only an option among the available portfolios which you may select</li>
                                <li>When you proceed with either the recommended portfolios or any available portfolios of your choice, Akru will neither guarantee returns nor outcomes of goal fulfilment</li>
                                <li>Akru shall not be liable for any losses and damages suffered by you as a result of recommended portfolios or available portfolios chosen by you to override the recommended portfolios</li>
                                <li>
                                    the investments made on Akru might be affected by the following:
                                </li>
                                <ol type="1">
                                    <li>timing and frequency of deposits and withdrawals;</li>
                                    <li>market volatility and disruptions;</li>
                                    <li>changes to your portfolios</li>
                                    <li>access interruptions</li>
                                    <li>hardware or software failures</li>
                                    <li>other unforeseen events</li>
                                </ol>
                                <li>You have sole discretion on whether or not to proceed with the recommended or available portfolios</li>
                                <li>For any monies that have been transferred to Akru without an indication or input of your investment objectives, Akru will endeavour to put such monies into low-risk investments including but not limited to cash funds on a best effort basis until such time you instruct us to transfer such monies into a financial goal; while Akru aims to secure your best interests, we will not be liable for any losses or opportunity costs arising from this arrangement</li>
                                <li>Akru may undertake cross-trade transactions between Akru’s account, other accounts and your account to achieve pricing and cost efficiencies to facilitate minimum order sizes. The cross-trades are to achieve pricing efficiency, reduce trading costs and facilitate standard lot trading and fractional allocation. The cross-trades are done via our algorithms, minimising potential for conflicts.</li>
                                <li>All trade transactions are recorded in Akru’s back-end system.</li>
                                <li>Akru guarantees to implement fair pricing for cross-trades based on  market and executed prices at the points of transactions.</li>
                            </ol>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Investment Risks </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> As an investor, you acknowledge and agree that risks exist in any investment. </li>
                            </p>
                            <p className="mb-4">
                                <li> As an investor, you are deemed to have consulted financial, legal and technological experts to mitigate your investment risks. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru shall perform and deliver the DIM Services in compliance with applicable laws and regulations in Malaysia and shall not be responsible or liable if in any case your investment decreases in value. </li>
                            </p>
                            <p className="mb-4">
                                <li> Upon signing up with Akru, you acknowledge and agree that: </li>
                            </p>
                            <ol type="i">
                                <li>The investments in your account may increase or decrease in value due to price fluctuations. This is known as market risks.</li>
                                <li>Past performance, including back-tested performance of the recommended or other portfolios, does not guarantee future results.</li>
                                <li>Investment performance of any kind can never be guaranteed by Akru.</li>
                                <li>Performance of the recommended or other portfolios in your account may differ materially from investment gains and/or avoidance of investment losses projected, described, or otherwise referenced in forward-looking statements.</li>
                                <li>By participating in DIM services you may lose opportunities to make other investments and gain from them.</li>
                                <li>Any hypothetical back tested returns associated with any portfolio are based on assumptions and do not reflect actual results.</li>
                                <li>The recommended portfolio may not be suitable with respect to your investment objectives, risk tolerance, age, financial condition, or other facts or circumstances that apply to you.</li>
                                <li>Akru shall not be liable for any losses or other damages resulting from your selected portfolio whether or not recommended by Akru.</li>
                                <li>Data provided by Akru or the Custodian may not be free from error or inaccuracies.</li>
                            </ol>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Diligence and Compliance </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Akru has taken reasonable steps to undertake research and findings conducted in diligence and good faith to understand the market risks involved in your investment portfolios. This includes ensuring full compliance with applicable laws and guidelines issued from time to time by Bank Negara Malaysia and SC. </li>
                            </p>
                            <p className="mb-4">
                                <li> In relation to your investment portfolio and subscription to the DIM Service, Akru has conducted appropriate and reasonable measures including but not limited to the following: </li>
                            </p>
                            <ol type="i">
                                <li>Establish and understand your risks profile, investment objectives, limitations, restrictions and instructions.</li>
                                <li>Provide you with accurate and complete information of investments including the features, characteristics and nature of underlying assets that may or may not be involved to enable you making an informed investment decision.</li>
                                <li>Obtain your prior approval (if necessary and applicable) for any part or all of the DIM Services.</li>
                            </ol>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Ongoing Services for Portfolios </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> You authorise Akru to implement a rebalancing policy from time to time in your portfolio(s). This is where comparisons will be made between current asset allocation in your portfolio(s) and model asset allocations. </li>
                            </p>
                            <p className="mb-4">
                                <li> During rebalancing, purchases and sales will be made respectively for underweights and overweights to bring holdings as close as possible back to model allocations of selected portfolios. </li>
                            </p>
                            <p className="mb-4">
                                <li> You acknowledge and agree that Akru shall retain the right to update this policy from time to time by updating the website and notifying you through email. </li>
                            </p>
                            <p className="mb-4">
                                <li> The rebalancing policy notwithstanding, Akru may modify at any time the manner or frequency for portfolio rebalancing. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru will, according to its discretion, reinvest dividends or any cash receipts in your portfolio(s) to as far as possible minimise cash holdings </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru has the right to allocate a small percentage of your assets as cash to provide for Akru’s fee deduction. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru has the right to deduct fees at the applicable rate owed by you from either cash holdings in your portfolio(s) or selling portfolio holdings to raise cash. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Funding and Withdrawals </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> At your discretion, you can fund and withdraw from your account through bank transfer or any other means that is offered by the Platform. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru reserves the right to accept investments funded from other sources approved or deemed to be approved by you on a case by case basis and subject to applicable fees. </li>
                            </p>
                            <p className="mb-4">
                                <li> Your assets will be placed in an account owned by a custodian who legally acts on your behalf. Akru as a DIM licence holder has the right to instruct the custodian to manage your investments to your best interests on a best efforts basis. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru is authorised to place buy or sell orders for your assets with a broker, vendor or agent to execute your funding or withdrawal instructions from your inputs on the Platform. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru undertakes to generate and place such orders in good faith on the business day after the funds are transferred or withdrawal instructions received. </li>
                            </p>
                            <p className="mb-4">
                                <li> Nevertheless, you acknowledge and agree that such orders may be placed any time within five business days after Akru receives instructions from your inputs on the Platform. The amount of time taken for your funding and withdrawal requests to be fully executed and reflected in your account are typically three and five business days respectively. </li>
                            </p>
                            <p className="mb-4">
                                <li> While Akru endeavours to execute your funding or withdrawal requests fully, you agree that quantities bought or sale proceeds received may differ from when your inputs were made due to price and exchange rate differences. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Funding Source Connection </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> You acknowledge and agree to connect your bank account to your Akru account for easy funds transfers and as a matter of authentication for KYC. </li>
                            </p>
                            <p className="mb-4">
                                <li> You agree to ensure that details for your bank account are accurate and complete. </li>
                            </p>
                            <p className="mb-4">
                                <li> You agree that the bank account details you submit to Akru are subject to the representations, warranties, and indemnification provisions of the Agreement. </li>
                            </p>
                            <p className="mb-4">
                                <li> You acknowledge that your Akru Account will not be connected to your Funding Source unless and until you receive a confirmation through the Application indicating that you have successfully connected your Akru Account and Funding Source.</li>
                            </p>
                            <p className="mb-4">
                                <li> You agree that, unless and until you successfully connect your bank account to your Akru account, you will have no right under the Agreement to make funding or withdrawals. </li>
                            </p>
                            <p className="mb-4">
                                <li> You further agree that, if your bank account is closed or restricted, you will have no right under the Agreement to make funding or withdrawals unless and until: </li>
                            </p>
                            <ol type="i">
                                <li>your bank account is reopened or unrestricted; or </li>
                                <li>you successfully connect a new bank account</li>
                            </ol>
                            <p className="mb-4">
                                <li> You agree to bear the charges incurred to transfer funds to and from your Akru account unless otherwise stated that Akru will bear such charges. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Limited Trading Authority to Modify and Track Portfolios </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Generally, you will direct and are responsible for the direction of your investments by: </li>
                            </p>
                            <ol type="i">
                                <li>carefully reviewing the information about investing and the portfolios available on Akru;</li>
                                <li>carefully considering the recommendation that Akru generates for you;</li>
                                <li>choosing a recommended portfolio or selecting another available portfolio; and</li>
                                <li>monitor inflows and outflows to and from your Akru Account.</li>
                            </ol>
                            <p className="mb-4">
                                <li> Akru shall have the authority to: </li>
                            </p>
                            <ol type="i">
                                <li>manage your assets under the DIM licence;</li>
                                <li>determine and modify from time to time the securities added to portfolios including portfolios held by you;</li>
                                <li>determine the timing, frequency and magnitude of rebalancing your portfolios; and</li>
                                <li>determine the timing of buy and sell orders to execute your funding and withdrawals.</li>
                            </ol>
                        </ol> 
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Akru’s Fees </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> You authorise Akru to deduct fees from your assets as consideration for services rendered. </li>
                            </p>
                            <p className="mb-4">
                                <li> Such fees may change from time to time.  Any changes will be updated on the website and you will be notified by email. </li>
                            </p>
                            <p className="mb-4">
                                <li> Fees will be deducted from your invested assets (assets under management or AUM) on a tiered basis according to the following schedule: </li>
                            </p>
                            <table className="mb-4">
                                <tr>
                                    <th>Account Balance</th>
                                    <th>Annual Fee of AUM</th>
                                </tr>
                                <tr>
                                    <td>First RM100,000</td>
                                    <td className="float-right">0.7%</td>
                                </tr>
                                <tr>
                                    <td>Between RM100,000 and RM250,000</td>
                                    <td className="float-right">0.6%</td>
                                </tr>
                                <tr>
                                    <td>Between RM250,000 and RM500,000</td>
                                    <td className="float-right">0.5%</td>
                                </tr>
                                <tr>
                                    <td>Between RM500,000 and RM1,000,000</td>
                                    <td className="float-right">0.4%</td>
                                </tr>
                                <tr>
                                    <td>Between RM1,000,000 and RM3,000,000</td>
                                    <td className="float-right">0.3%</td>
                                </tr>
                                <tr>
                                    <td>Above RM3,000,000</td>
                                    <td className="float-right">0.2%</td>
                                </tr>
                            </table>
                            <p className="mb-4">
                                <li> The annual fee is prorated and deducted monthly from your AUM based on the average daily AUM value for the month. </li>
                            </p>
                            <p className="mb-4">
                                <li> The average daily AUM will account for funding, withdrawals and gains and losses in your portfolios. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru will charge a one-time administrative account-opening fee of RM10. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Other Transaction Costs </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Akru will bear trading related charges such as broking, custodian and remittance fees. </li>
                            </p>
                            <p className="mb-4">
                                <li> You will bear any charges to transfer your funds to your Akru account. </li>
                            </p>
                            <p className="mb-4">
                                <li> Investments into ETFs or UTFs would incur fees that are separate and distinct from the fee paid to Akru and deducted at the respective fund level. These fees are outlined in the prospectus for each ETF or UTF. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Policy on Rebates and Soft Commissions </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Akru and its officers, and the custodian, will not retain any rebates, discounts or trailers or otherwise share in any commission with any broker, any intermediary or any fund house in consideration for directing dealings in the investments of the funds. All dealings with brokers, intermediaries and fund houses are executed to your best interests. </li>
                            </p>
                            <p className="mb-4">
                                <li> In the event Akru receives any rebates, discounts or trailers in respect of investing on your behalf, such amounts will be credited back to your account according to your investment holdings. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru can and may receive soft commissions related to services providing data, research and news that support investment management. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Brokerage and Custody Services </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> You agree to enter into Brokerage and Custodian Agreements which come into effect as part of this Agreement. </li>
                            </p>
                            <p className="mb-4">
                                <li> Akru will use Universal Trustee (Malaysia) Bhd as custodian for your assets. Universal Trustee will use Saxo Capital Pte Ltd as broker and custodian for your offshore assets. </li>
                            </p>
                            <p className="mb-4">
                                <li> You acknowledge that assets received or held outside Malaysia are subject to the regulations and laws of the foreign jurisdiction in which they are held and may not be subject to the same protection as that conferred on your assets received or held in Malaysia.</li>
                            </p>
                            <p className="mb-4">
                                <li> Although Akru may transmit your requests for withdrawals to the Broker and/or Custodian, Akru shall have no authority to initiate any withdrawal or otherwise to transfer any securities or money out of your Akru Account other than for fee deduction pursuant to this Agreement. </li>
                            </p>
                            <p className="mb-4">
                                <li> By entering into this Agreement you authorise and instruct Akru to use the Custodian(s) to maintain your Akru Account and to execute orders. </li>
                            </p>
                            <p className="mb-4">
                                <li> You acknowledge and agree that Akru may combine orders for purchases or sales in your Akru Account with orders for purchases or sales of securities in other Akru accounts. </li>
                            </p>
                            <p className="mb-4">
                                <li> You acknowledge and agree that Akru will hold your monies and/or investments in an omnibus client trust account together with monies and/or investments Akru holds for other clients. This means that your monies and/or investments are commingled with that of other clients.  There are limited ways to determine the intent of clients involved on the mutualisation of risks in view of the constant fluctuation of the aggregate balance in such account, to account separately for each of our clients' respective interest (if any) due on their respective cash balances in the omnibus client account as on an aggregate basis. </li>
                            </p>
                            <p className="mb-4">
                                <li> In the event of insolvency of the bank, custodian or other financial institution holding the omnibus client trust account, you understand that you may not be able to fully recover your monies. Further, as your monies are commingled with those of other clients in the same account, you may potentially be exposed to the losses of other clients. Consequently, you may not be subject to the same protection as compared to your monies being held on a segregated basis. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Suspension of Services </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> You agree that Akru, the Custodian, and any of their affiliates or contractors may suspend, delay, limit, restrict, or refuse any or all of the services to you at any point of time for any length of time without any prior written notice to you if either Akru or the Custodian believes in good faith that such suspension or delay is necessary or appropriate for the purposes of the following: (i) to ensure compliance with, or avoid, violating any applicable laws or regulations to Akru, the Custodian, or a transaction relating to the Digital Investment Management Services; (ii) to comply with a request or guidance from a regulatory or law enforcement authority with jurisdiction over Akru, the Custodian, or a transaction relating to the Digital Investment Management Services; (iii) to avoid any loss to Akru or the Custodian; (iv) to remediate or otherwise to address problems with technology; (v) due to interruptions in the access to or operation of any technology that Akru or the Custodian directly or indirectly use in connection with the Digital Investment Management Services; or (vi) to prevent a breach or violation of any term, condition, or other provision of any of the Agreements. </li>
                            </p>
                            <p className="mb-4">
                                <li> If Akru and the Custodian suspend all services under the Digital Investment Management Services, Akru shall credit to your Akru Account the prorated Advisory Fee for the period during which all services for your Akru Account were suspended and/or delayed. Akru may in its sole discretion, but shall not be required to, credit to your Akru Account the prorated Advisory Fee or a portion thereof for any period during which services were interrupted, delayed or partially suspended. </li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Termination </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> You, Akru, or the Custodian may close your Akru Account and terminate the Agreements at any time for any reason only by sending an email request or by mailing a signed written request, provided that: </li>
                            </p>
                            <ol type="i">
                                <li>if you terminate any of the Agreements, you will be deemed to simultaneously terminate all of the Agreements and they shall cease to have any effect on Akru and you;</li>
                                <li>the Custodian will, before closing your Akru Account, settle any purchases or sales pending when Akru sends or receives a request to close your Akru Account; and</li>
                                <li>Akru and/or the Custodian will, before closing your Akru Account, deduct any unpaid and prorated portion of the Fees owed and any other fees owed for irregular services, including paper delivery of documents, transfer of securities, or physical delivery of securities.</li>
                            </ol>
                            <p className="mb-4">
                                <li> If in any case, you request to close your Account, Akru will initiate a sale of securities held in your Akru Account and to send the cash proceeds, less any portion of fees due, to your bank account.</li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Conflicts of Interest </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Akru will advise you of any conflicts of interest that we are aware of and, if required, discuss with you whether or not you elect for Akru to continue working for you.</li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Liability and Indemnity </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Notwithstanding anything to the contrary in this Agreement, Akru’s total liability to you shall only be limited to the amount of fees Akru receives in respect of the investments that you have placed through Akru.</li>
                            </p>
                            <p className="mb-4">
                                <li> Akru shall be indemnified by you from any liability (whether in tort (including negligence), contract, statute or otherwise) for any indirect, special or consequential loss or damage suffered by you arising from or in connection with the services.</li>
                            </p>
                            <p className="mb-4">
                                <li> Nevertheless, the indemnification shall not affect Akru’s liability for any death or personal injury arising from Akru’s negligence, nor Akru’s liability for fraud or any other liability which cannot be excluded or limited under any applicable laws and regulations.</li>
                            </p>
                            <p className="mb-4">
                                <li> You agree that any claims against Akru shall only be brought against Akru and no claim shall be brought against any of its employees, directors or officers.</li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Confidentiality </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> Subject to the Terms and Conditions and Privacy Policy which are provided on the Website, Akru shall treat all information which you pass to Akru as private and confidential and will only disclose such information for the purpose of providing the Digital Investment Management Services to you.</li>
                            </p>
                            <p className="mb-4">
                                <li> Disclosure may also be made to Akru’s external auditor and regulator to fulfil their regulatory functions or where Akru is legally obliged to disclose the information to any third party for regulatory and compliance purposes. Such disclosure may not require Akru to obtain any written approval from you.</li>
                            </p>
                            <p className="mb-4">
                                <li> In relation to the information obtained and retained for the purposes of the Digital Investment Management Services, Akru including but not limited to its associates, affiliates, agents and representatives shall ensure compliance with the Personal Data Protection Act 2010. A copy of Akru’s Privacy Policy is available on the Akru Website. You acknowledge receipt of the Privacy Policy, which Akru may update from time to time at its sole discretion by posting new versions on the Akru Website and notifying you by email.</li>
                            </p>
                            <p className="mb-4">
                                <li> You consent to Akru recording your telephone calls and your electronic communications with representatives and associated persons of Akru without any further notice. You expressly authorise Akru representatives or associated persons to contact you for purposes of evaluating and offering the Digital Investment Management Services, and other products and services by calling, writing, or emailing at the telephone number(s), mailing address, and/or email address(es) you provide in connection with your Akru Account, including any additional or updated telephone numbers, mailing addresses, email addresses or in any other manner which may deemed appropriate by Akru. The authorisation in the preceding sentence will remain in effect unless and until you specifically revoke it by notifying the Akru representatives or associated persons with whom you are in contact.</li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Law and Jurisdiction</li></div>
                        <ol type="a">    
                            <p className="mb-4">
                                <li>This Agreement and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the law of Malaysia.</li>
                            </p>
                            <p className="mb-4">
                                <li>The Malaysian courts will have exclusive jurisdiction over any claim arising from, or related to, a visit to Akru’s Website and services offered by Akru. Akru retains the right to bring proceedings against you for breach of these conditions in your country of residence or any other relevant country.</li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Assignment </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li>Akru shall not assign its rights or obligations under this Agreement without your written consent, provided however that you will be deemed to have consented to an assignment if you do not object to such assignment within 60 calendar days of being notified through the Akru Website or by email of any intent of Akru to assign such rights or obligations.</li>
                            </p>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Complaints </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li> All complaints should be addressed to Akru contact details set out above in the Information about Akru section of this Agreement.</li>
                            </p>
                            <p className="mb-4">
                                <li>If Akru are unable to settle your complaint with Akru, you may either:</li>
                            </p>
                            <ol type="i">
                                <li>
                                    <div><b>Securities Commission Malaysia (SC)</b></div>
                                    <p className="mb-4">
                                        Send a letter by post to the address below or fax to +603 6204 8991;
                                    </p>
                                    <p className="mb-4">

                                        Investor Affairs &amp; Complaints Department<br/>
                                        Securities Commission Malaysia<br/>
                                        No 3 Persiaran Bukit Kiara<br/>
                                        Bukit Kiara<br/>
                                        50490 Kuala Lumpur
                                    </p>
                                    <p className="mb-4">
                                        Download and complete the online complaint form on the website <a href="https://www.sc.com.my/api/documentms/download.ashx?id=c18035ab-a451-45e3-ac0e-5828cc2cee7a" target="_blank">Complaint Form (pdf – 276KB)</a>
                                        Send an email to <a href="mailto: aduan@seccom.com.my">aduan@seccom.com.my</a>;
                                        Contact SC at +603 6204 8999; or
                                        Walk-in to the SC building to make a complaint or enquiry.
                                    </p>
                                </li>

                                <li>
                                    <div><b>Securities Industry Dispute Resolution Center (SIDREC)</b></div>
                                    <p className="mb-4">
                                            For any monetary claim not exceeding RM250,000, you can call, email or write to SIDREC. Alternatively, you can submit an <a href="https://sidrec.com.my/contact/#enquiry-form" target="_blank">enquiry form</a> on SIDREC’s website <a href="https://sidrec.com.my/" target="_blank">https://sidrec.com.my/</a> (please refer to <a href="https://sidrec.com.my/wp-content/uploads/2020/02/SDR-BPoster-ENG-OL-PRINT.pdf" target="_blank">details</a> and  <a href="https://sidrec.com.my/wp-content/uploads/2020/01/SDR-FAQ-Eng-OL.pdf" target="_blank">FAQs</a>) or simply pay a visit to their office.
                                        </p>
                                    <p className="mb-4">

                                    Securities Industry Dispute Resolution Center (SIDREC)<br/>
                                    Unit A-9-1, Level 9, Tower A<br/>
                                    Menara UOA Bangsar<br/>
                                    No. 5, Jalan Bangsar Utama 1<br/>
                                    59000 Kuala Lumpur
                                    </p>

                                    <p className="mb-4">

                                    Mobile: +60-16-620 5698<br/>
                                    Tel: +60-3-2282 2280<br/>
                                    Fax: +60-3-2282 3855<br/>
                                    Email: info@sidrec.com.my
                                    </p>
                                </li>
                            </ol>
                        </ol>
                        <div className="font-weight-bold h3 text-orange mb-4 pt-4"><li> Definition </li></div>
                        <ol type="a">
                            <p className="mb-4">
                                <li>“Broker”, means the party responsible for the execution, clearance, and settlement of purchases and sales of securities</li>
                            </p>
                            <p className="mb-4">
                                <li>“Business Day”, means any day on which banks in Malaysia and the United States are open for general banking operations.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Custodian”, means the party that holds customers' assets on behalf of the customer. It carries and maintains accounting, recordkeeping, and reporting of activities in your Akru Account and separates customers’ assets from that of Akru.</li>
                            </p>
                            <p className="mb-4">
                                <li>“ETF” means any of the exchange traded funds included by Akru in any of the Portfolios.</li>
                            </p>
                            <p className="mb-4">
                                <li>“ETF Shares” means the securities that Akru buys and sells on your behalf and that the Custodian holds in your Akru Account on your behalf.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Unit trust funds (“UTF”)” refer to a collective investment scheme issued by a unit trust management company (“UTMC”)</li>
                            </p>
                            <p className="mb-4">
                                <li>“Funding Source”, means the bank account that you use to send money to and receive money from your Akru Account. It is the bank account that will be the source of deposits and destination of withdrawals from your Akru Account.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Investment White Paper” means  a document in which we outline our investment philosophy that guides Akru on how we invest</li>
                            </p>
                            <p className="mb-4">
                                <li>“Platform”, means the Digital Investment Management Platform developed by Akru to analyse certain information about you and recommend a Recommended Portfolio for you.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Portfolio(s)”, means the model portfolios that Akru has developed for its clients to invest in through the Digital Investment Management Platform.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Rebalancing” means a combination of purchases and/or sales ordered by Akru on your behalf and designed by Akru, in its sole discretion, to keep the proportions of ETFs in your Akru Account within specified ranges of the corresponding proportions of ETFs in your Recommended Portfolio.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Recommended Portfolio”, means the Portfolio Akru recommends for you based on certain information you supply Akru.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Reinvestment”, means a combination of purchases by Akru on your behalf using Cash from dividends or income paid by ETFs and UTFs.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Statement of Account”, means your statement which includes the summary position of your investment with Akru which includes gains earned and expenses incurred as well as movement of cash and investment activities in a stated period.</li>
                            </p>
                            <p className="mb-4">
                                <li>“Digital Investment Management Platform”. means the software-based online application developed by Akru to analyse certain information about you and recommend a Recommended Portfolio for you.</li>
                            </p>
                        </ol>
                    </ol>
                </div>
            </section>
        </div>
    )
}
