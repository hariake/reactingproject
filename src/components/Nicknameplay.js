const NicknameInput = ({ nickname, setNickname, handlePlay }) => {
  return (
    <div>
      <label>
        Enter your nickname: 
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </label>
      <button onClick={handlePlay}>Play</button>
      {nickname && <p>Hello {nickname}!</p>}
    </div>
  );
};

export default NicknameInput;