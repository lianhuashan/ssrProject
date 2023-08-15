import { useState } from 'react';

const useNavBar = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const handleTransfer = () => {
    setShowLogin(true);
  };
  const handleSwitchVersion = () => {
    setShowSearch(true);
  };
  const handleSwitchPhone = () => {};
  const handleLogin = () => {
    setShowLogin(true);
  };

  return {
    handleTransfer,
    handleSwitchVersion,
    handleSwitchPhone,
    handleLogin,
    showLogin,
    setShowLogin,
    showSearch,
    setShowSearch
  };
};

export default useNavBar;
