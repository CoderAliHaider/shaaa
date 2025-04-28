
// "use client";
// import React, { useState, ChangeEvent } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faExclamationCircle,
//   faMessage,
// } from "@fortawesome/free-solid-svg-icons";

// interface FormState {
//   content: string;
// }

// const ChatWidget: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [form, setForm] = useState<FormState>({ content: "" });
//   const [status, setStatus] = useState<string>("");
//   const [messages, setMessages] = useState<string[]>([]); // 🟢 Store chat messages

//   const toggleChat = (): void => setIsOpen(!isOpen);

//   const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
//     setForm({ ...form, content: e.target.value });
//   };

//   const handleSubmit = async (): Promise<void> => {
//     if (!form.content.trim()) {
//       setStatus("Please enter a message.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/messages", {
//         message: form.content,
//       });

//       setMessages((prev) => [...prev, form.content]); // 🟢 Add to chat bubble
//       setStatus("✅ Message sent!");
//       setForm({ content: "" });

//       // Optionally close chat after 1 second
//       setTimeout(() => {
//         setIsOpen(false);
//         setStatus("");
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Something went wrong.");
//     }
//   };

//   return (
//     <div>
//       {/* Floating Button */}
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-5 left-5 bg-[#5B3624] text-white w-14 h-14 rounded-full text-2xl shadow-md border-none cursor-pointer flex items-center justify-center z-50"
//       >
//         <FontAwesomeIcon icon={faMessage} />
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-24 left-10 w-80 overflow-hidden bg-white rounded-xl shadow-lg z-50">
//           {/* Header */}
//           <div className="bg-[#5B3624] w-full p-4 rounded-t-xl">
//             <h3 className="text-white flex items-center text-[16px] font-semibold">
//               <button onClick={toggleChat} className="mr-5 cursor-pointer">
//                 <FontAwesomeIcon icon={faChevronLeft} />
//               </button>
//               Leave a message
//             </h3>
//           </div>

//           {/* Body */}
//           <div className="p-5 pt-4 flex flex-col gap-2">
//             {/* Offline Message */}
//             <div className="text-sm text-gray-600 mt-2 flex flex-col justify-center items-center gap-4 pb-3">
//               <FontAwesomeIcon
//                 icon={faExclamationCircle}
//                 className="mt-1 flex justify-center text-6xl text-gray-200"
//               />
//               <p className="text-center text-[14px]">
//                 We're currently offline. Please leave a message.
//               </p>
//             </div>

//             {/* Chat Bubble Messages */}
//             <div className="max-h-40 overflow-y-auto flex flex-col gap-2 pr-2">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className="self-end bg-[#DCF8C6] text-black text-sm p-2 rounded-xl max-w-[70%] shadow"
//                 >
//                   {msg}
//                 </div>
//               ))}
//             </div>

//             {/* Message Input */}
//             <textarea
//               name="content"
//               rows={3}
//               value={form.content}
//               onChange={handleChange}
//               placeholder="Type your message..."
//               className="w-full mt-2 p-2 border border-gray-300 rounded text-sm font-normal resize-none"
//             />

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               className="bg-[#5B3624] text-white w-full mt-2 py-2 rounded hover:bg-[#4a2d1f] transition"
//             >
//               Submit
//             </button>

//             {/* Status Message */}
//             {status && (
//               <p className="text-sm pl-1 pt-2 text-[#7A253D]">{status}</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidget;










"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faExclamationCircle,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

interface FormState {
  content: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({ content: "" });
  const [status, setStatus] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]); // Initialize as an empty array

  // Fetch messages from DB when component loads
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/messages");
        
        // Ensure response contains the messages array
        setMessages(response.data?.messages || []); // Default to empty array if no messages
      } catch (err) {
        console.error(err);
        setStatus("❌ Unable to fetch messages.");
      }
    };

    fetchMessages();
  }, []);

  const toggleChat = (): void => setIsOpen(!isOpen);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setForm({ ...form, content: e.target.value });
  };

  const handleSubmit = async (): Promise<void> => {
    if (!form.content.trim()) {
      setStatus("Please enter a message.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/messages", {
        message: form.content,
      });

      setMessages((prev) => [...prev, form.content]); // Add to chat bubble
      setStatus("✅ Message sent!");
      setForm({ content: "" });

      // Optionally close chat after 1 second
      setTimeout(() => {
        setIsOpen(false);
        setStatus("");
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 left-5 bg-[#5B3624] text-white w-14 h-14 rounded-full text-2xl shadow-md border-none cursor-pointer flex items-center justify-center z-50"
      >
        <FontAwesomeIcon icon={faMessage} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-10 w-80 overflow-hidden bg-white rounded-xl shadow-lg z-50">
          {/* Header */}
          <div className="bg-[#5B3624] w-full p-4 rounded-t-xl">
            <h3 className="text-white flex items-center text-[16px] font-semibold">
              <button onClick={toggleChat} className="mr-5 cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              Leave a message
            </h3>
          </div>

          {/* Body */}
          <div className="p-5 pt-4 flex flex-col gap-2">
            {/* Offline Message */}
            <div className="text-sm text-gray-600 mt-2 flex flex-col justify-center items-center gap-4 pb-3">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="mt-1 flex justify-center text-6xl text-gray-200"
              />
              <p className="text-center text-[14px]">
                We're currently offline. Please leave a message.
              </p>
            </div>

            {/* Chat Bubble Messages */}
            <div className="max-h-40 overflow-y-auto flex flex-col gap-2 pr-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="self-end bg-[#DCF8C6] text-black text-sm p-2 rounded-xl max-w-[70%] shadow"
                >
                  {msg}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <textarea
              name="content"
              rows={3}
              value={form.content}
              onChange={handleChange}
              placeholder="Type your message..."
              className="w-full mt-2 p-2 border border-gray-300 rounded text-sm font-normal resize-none"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-[#5B3624] text-white w-full mt-2 py-2 rounded hover:bg-[#4a2d1f] transition"
            >
              Submit
            </button>

            {/* Status Message */}
            {status && (
              <p className="text-sm pl-1 pt-2 text-[#7A253D]">{status}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
