import './App.css';
import useOnlineStatus from '@rehooks/online-status';
import useDocumentTitle from '@tanem/use-document-title'

function App() {
  useDocumentTitle("hello")
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default App;
