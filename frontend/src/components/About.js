import React from 'react';
import Background from './../images/background1.png';
import metamask from './../images/wallets/metamask.png';
import walletconnect from './../images/wallets/walletconnect.png';
import portis from './../images/wallets/portis.png';
import formatic from './../images/wallets/fortmatic.png';
import authereum from './../images/wallets/authereum.png';
import coinbase from './../images/wallets/coinbase.png';
import styles from './../styles/about.css';
import { useSelector } from 'react-redux';

export default function About(props) {

  const address = useSelector((state) => state.account.address)

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        height: '82.8vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section
        style={{
          display: 'flex',
        }}
      >
        <div style={{ width: '40%' }}>
          <h1
            style={{
              fontSize: '96px',
              fontWeight: '700',
              marginLeft: '50px',
              marginTop: '25px',
              fontFamily: "Caudex"
            }}
          >
            Credify
          </h1>
          <h2
            style={{
              width: '100%',
              marginLeft: '50px',
            }}
          >
            Planning for an Uncollateralized Loan in the Web3 Space? Look no
            further! Connect your wallet now and get yourself a credit score
            which can be used seamlessly to apply for a loan without a
            collateral. Apply now using any one of your favourite 6 wallets and
            check your credit score!
          </h2>
        </div>
        <div>
          {/* <button
            style={{
              backgroundColor: 'black',
              background: 'linear-gradient(#eee, #333)',
              fontSize: '48px',
            }}
          > */}
          <p
            id='para-button'
            onClick={props.connect.action}
            style={{
              fontSize: '48px',
              fontWeight: '500',
              background: 'black',
              padding: '10px 28px',
              color: 'white',
              borderRadius: '16px',
              position: 'relative',
              top: '250px',
              left: '220px',
              zIndex: '2',
              userSelect: 'none',
              boxShadow: '4px 4px',
            }}
          >
            {address ? "Check Credit Score" : "Connect Your Wallet"}
          </p>
        </div>
        <div></div>
      </section>
      <img id='metamask' src={metamask} alt='' style={styles.metamask} />
      <img
        id='walletconnect'
        src={walletconnect}
        alt=''
        style={{ height: '120px', borderRadius: '140px' }}
      />
      <img
        id='portis'
        src={portis}
        alt=''
        style={{ height: '120px', borderRadius: '140px' }}
      />
      <img
        id='formatic'
        src={formatic}
        alt=''
        style={{ height: '120px', borderRadius: '140px' }}
      />
      <img
        id='authereum'
        src={authereum}
        alt=''
        style={{ height: '120px', borderRadius: '140px' }}
      />
      <img
        id='coinbase'
        src={coinbase}
        alt=''
        style={{ height: '120px', borderRadius: '140px' }}
      />
    </div>
  );
}
