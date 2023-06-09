import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IndexPT from './IndexPT';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'modules/utils';

const IndexCT = ({
  uid,
  handleLoaderTrue,
  handleLoaderFalse,
  handleSetUid
}: typeIndexCT): JSX.Element => {
  const navigate = useNavigate(); // router 제어 훅
  const [uid_, setUid_] = useState<string>(''); // 로그인 여부 판단 훅

  // 로그인 여부 판단 훅
  useEffect(() => {
    if (uid !== undefined && uid !== null && uid !== '') {
      handleLoaderTrue();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid_(user.uid);
        }
        handleLoaderFalse();
      });
    } else {
      setUid_('');
    }
  }, [uid]);

  const handleSearch = () => {
    navigate('/search');
  };

  const handleSignIn = () => {
    navigate('/sign/in');
  };

  const handleSignUp = () => {
    navigate('/sign/up');
  };

  const handleSignOut = () => {
    handleSetUid('');
  };

  const handleNavigate = (type: string) => {
    type !== undefined
      ? navigate(`diagrams/${type}`)
      : alert('Type 정의 오류!');
  };

  return (
    <IndexPT
      uid={uid}
      uid_={uid_}
      onSearch={handleSearch}
      onSignIn={handleSignIn}
      onSignUp={handleSignUp}
      onSignOut={handleSignOut}
      onNavigate={handleNavigate}
    />
  );
};

interface typeIndexCT extends CommonState {
  handleLoaderTrue: () => void;
  handleLoaderFalse: () => void;
  handleSetUid: (uid: string) => void;
}

export default IndexCT;
