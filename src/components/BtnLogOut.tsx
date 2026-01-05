function BtnLogOut({ resetStates }: { resetStates: () => void }) {
  return (
    <button className="btn btn--log-out" onClick={resetStates}>
      Nazad
    </button>
  );
}

export default BtnLogOut;
