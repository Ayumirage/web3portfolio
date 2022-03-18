import React from "react";
import { BsTwitter, BsDiscord, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Ayumirage" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="Hyru#2473" target="_blank" rel="noreferrer">
        <BsDiscord />
      </a>
    </div>
    <div>
      <a href="https://github.com/Ayumirage" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
