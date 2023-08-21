import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { debounce } from "lodash";
function ChatInput({handleSendMsg}) {
   
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerHideShow = () => {
      setShowEmojiPicker(!showEmojiPicker);
    };
    
  
    const handleEmojiClick = (event, emojiObject) => {
        // console.log(emoji);

      let message = msg;
      message += emojiObject.emoji;
      setMsg(message);

    };
    // const handleEmojiClick = debounce((event, emojiObject) => {
        
    //     // console.log(emojiObject);
    //     setMsg(prevMsg => prevMsg + emojiObject.emoji);
    //     //   console.log(emojiObject.emoji,msg);
    //   }, 0); // Adjust the debounce delay as needed
    
  
    const sendChat = (event) => {
      event.preventDefault();
      if (msg.length > 0) {
        handleSendMsg(msg);
        setMsg("");
      }
    };
  
  return (
    <Container>
    <div className="button-container">
      <div className="emoji">
        <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
        {
        showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
        }
      
      </div>
    </div>
    <form className="input-container" onSubmit={(event) => sendChat(event)}>
    
    
      <input
        type="text"
        placeholder="type your message here"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
       
      />
    
      <button className="submit" >
        <IoMdSend />
      </button>
    </form>

  </Container>
  );
}
const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;
  padding-bottom:0.3rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        // top: calc(100% + 25rem); // Adjust the value as needed


        bottom: 100%; // Show the picker above the button
        width: 100%; // Set the width to 100%
        max-height: 300px; // Adjust the value as needed for the maximum height of the picker
        overflow-y: auto; // Add vertical scrolling if necessary
        
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;

export default ChatInput

