import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import StartContent from "./components/StartContent";

function Home() {
  return (
    <div
      className="fixed w-full h-screen  
                bg-gradient-to-r from-primary via-slate-300 to-secondary
                dark:bg-gradient-to-r dark:from-primary dark:via-slate-900 dark:to-secondary"
    >
      <div
        className="bg-gradient-to-tl from-slate-300 to-transparent
                      dark:bg-gradient-to-tl dark:from-slate-900 dark:to-transparent
                    fixed w-full h-screen"
      >
        <div
          className="bg-gradient-to-br from-slate-300 to-transparent
                        dark:bg-gradient-to-br dark:from-slate-900 dark:to-transparent
                    fixed w-screen h-screen"
        >
          <NavBar />
          <StartContent />
          <ChatBot>
            <ChatBotDialog />
          </ChatBot>
        </div>
      </div>
    </div>
  );
}

const ChatBot = (props: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setopen] = useState(false);
  return (
    <button
      className="fixed bottom-12 right-12 rounded-full bg-white p-3 
            drop-shadow-[0_0_5px_#6600cc] hover:drop-shadow-[0_0_8px_#fff]
            transition-all delay-300"
    >
      <img
        alt="chatbot"
        src="./assets/icons/utils/chatbot-svgrepo-com.svg"
        className="w-8"
      />
      {open && props.children}
    </button>
  );
};

const ChatBotDialog = () => {
  return <div>Start</div>;
};

export default Home;
