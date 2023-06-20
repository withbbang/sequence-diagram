import React from 'react';
import Loader from 'components/loader';
import styles from './Index.module.scss';

const IndexPT = ({
  uid,
  uid_,
  onSignIn,
  onSignUp,
  onSignOut,
  onNavigate
}: typeIndexPT): JSX.Element => {
  return (
    <>
      <Loader />
      <div className={styles.wrap}>
        <div className={styles.signBtns}>
          {uid !== undefined &&
          uid !== null &&
          uid !== '' &&
          uid_ !== '' &&
          uid === uid_ ? (
            <button onClick={onSignOut}>Sign Out</button>
          ) : (
            <>
              <button onClick={onSignIn}>Sign In</button>
              {/* <button onClick={onSignUp}>Sign Up</button> */}
            </>
          )}
        </div>
        <h1>Service Diagrams</h1>
        <div className={styles.buttons}>
          <button onClick={() => onNavigate('sequence')}>
            Sequence Diagrams
          </button>
          <button onClick={() => onNavigate('flow')}>Flow Diagrams</button>
          <button onClick={() => onNavigate('entity-relationship')}>
            Entity-Relationship Diagrams
          </button>
        </div>
      </div>
    </>
  );
};

interface typeIndexPT {
  uid?: string;
  uid_: string;
  onSignIn: () => void;
  onSignUp: () => void;
  onSignOut: () => void;
  onNavigate: (type: string) => void;
}

export default IndexPT;
