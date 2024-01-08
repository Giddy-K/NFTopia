import { useState, useEffect } from "react";
import Modal from "react-modal";

import styles from "../styles";
import { CustomButton } from ".";
import { useGlobalContext } from "../context";
import { GetParams, SwitchNetwork } from "../utils/onboard.js";

const OnboardModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { updateCurrentWalletAddress } = useGlobalContext();
  const [step, setStep] = useState(-1);

  async function resetParams() {
    const currentStep = await GetParams();
    setStep(currentStep.step);
    setIsOpen(currentStep.step !== -1);
  }

  useEffect(() => {
    resetParams();

    window?.ethereum?.on("chainChanged", () => {
      resetParams();
    });

    window?.ethereum?.on("accountsChanged", () => {
      resetParams();
    });
  }, []);

  const generateStep = (st) => {
    switch (st) {
      case 0:
        return (
          <>
            <p className={styles.modalText}>
              Hello there Gamer!! Thank You for taking your time to test this game out.
              To proceed to the game you will need to have core wallet
              installed, either as an extension on your browser or the actuall
              app on your phone. Click the button bellow which will redirect you
              to the core app download page and follow the instructions provided
              to get started.
            </p>
            <CustomButton
              title="Download Core"
              handleClick={() => window.open("https://core.app/", "_blank")}
            />
          </>
        );

      case 1:
        return (
          <>
            <p className={styles.modalText}>
              Now that you have Core installed you need to create an Account and
              connect it to your Core Wallet, do this by clicking the button
              bellow and click Connect Wallet.
            </p>
            <CustomButton
              title="Connect Account"
              handleClick={updateCurrentWalletAddress}
            />
          </>
        );

      case 2:
        return (
          <>
            <p className={styles.modalText}>
              You're on a different network. Please switch to WAGMI network by
              clicking the button below.
            </p>
            <CustomButton title="Switch" handleClick={SwitchNetwork} />
          </>
        );

      case 3:
        return (
          <>
            <p className={styles.modalText}>
              Unfortunately you don't have WAGMI tokens in your account to
              proceed to the game. You can get some test tokens by clicking the
              button bellow and request to get WAGMI test tokens by selecting
              WAGMI from the drop down.
            </p>
            <CustomButton
              title="Grab some test tokens"
              handleClick={() =>
                window.open("https://faucet.avax.network/", "_blank")
              }
            />
          </>
        );

      default:
        return <p className={styles.modalText}>Aight, Ready to go!</p>;
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      className={`absolute inset-0 ${styles.flexCenter} flex-col ${styles.glassEffect}`}
      overlayClassName="Overlay"
    >
      {generateStep(step)}
    </Modal>
  );
};

export default OnboardModal;
