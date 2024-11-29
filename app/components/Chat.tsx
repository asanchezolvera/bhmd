import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

export default function Chat() {
  return (
    <div className="fixed bottom-4 right-4 rounded-full p-4 bg-blue-700">
      <HiChatBubbleBottomCenterText className="text-white" size={32} />
    </div>
  );
}
