export default function Message({
  message,
}: {
  message: { id: number; content: string };
}) {
  const userId = 1;
  const isUserMessage = message.id === userId;
  const isFloatRight = isUserMessage ? "justify-end" : "justify-start";
  const containerClassName = `bg-white flex ${isFloatRight}`;
  return (
    <div className={containerClassName}>
      <div
        className={`grow-0 px-5 py-3 rounded-2xl text-white max-w-80 text-left${
          isUserMessage ? "text-right bg-blue-500" : "text-left bg-blue-300"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
