import React from "react";
import Footer from "../components/Footer";

function AGB() {
  const currentDate = new Date().toDateString();

  return (
    <div>
      <div className="agb">
        <h2>ACCEPTABLE USE POLICY</h2>
        <p>ACCEPTABLE USE POLICY</p>
        <ul>
          <li>
            Respect others: Do not harass, insult, threaten, or discriminate
            against other users. Do not post content that is offensive or
            defamatory.
          </li>
          <li>
            Stay on topic: Please keep your posts relevant to the forum's subject
            matter. Do not spam, promote unrelated products or services, or post
            advertisements.
          </li>
          <li>
            Use common sense: Do not post anything that is illegal, unethical, or
            immoral. Do not post content that violates intellectual property
            rights or contains viruses or malware.
          </li>
          <li>
            Protect your privacy: Do not share personal information or login
            credentials. Do not post content that could compromise the security of
            other users' accounts.
          </li>
          <li>
            Follow the moderators' instructions: The moderators have the right to
            remove or edit any content that violates these rules. If a moderator
            asks you to modify your behavior or remove a post, please comply.
          </li>
          <li>
            Report violations: If you see content that violates these rules,
            please report it to the moderators. Do not engage in arguments or
            retaliation.
          </li>
          <li>
            No liability: We are not responsible for any content posted by users
            or for any consequences that may result from using our forum.
          </li>
        </ul>
        <p>
          Thank you for reading and following our acceptable use policy. We
          reserve the right to modify these rules at any time.
        </p>
      </div>
      <div>
        <Footer currentDate={currentDate} />
      </div>
    </div>
  );
}

export default AGB;
