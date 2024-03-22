import './Nicknameplay.css'

const NicknameInput = ({ nickname, setNickname, handlePlay }) => {
  return (
    <div class="container">
      <label>
        Enter your nickname:
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </label>
      <button class="play-button" onClick={handlePlay}>Play</button>
      {nickname && <p>Hello {nickname}!</p>}
    </div>
  );
};

export default NicknameInput;