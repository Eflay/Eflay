import { useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const blur = () => {
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas @ !");
    }
  };

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        <form>
          Laissez-nous votre mail :
          <input
            placeholder="Entrez votre mail"
            onChange={handleInput}
            value={inputValue}
            onBlur={blur}
          ></input>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
