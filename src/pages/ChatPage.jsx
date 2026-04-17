import ChatInterface from '../components/ChatInterface'

export default function ChatPage() {
  return (
    <div className="sg-page sg-page-chat">
      <header className="sg-page-head sg-page-head-compact">
        <h1>Chat with SHSGuide</h1>
        <p className="sg-page-intro">
          Decision-support style answers on tracks, elective clusters, doorway, immersion, cores, and
          careers—simulated for now; connect your AI backend when ready.
        </p>
      </header>
      <ChatInterface />
    </div>
  )
}
