import UIOverlay from './components/UIOverlay';
import './App.css';
import GameEnvironment from "./components/GameEnvironment";

export default function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <GameEnvironment className="GAME CONTENT____ absolute top-0 left-0 w-full h-full" />
      <div className="UI OVERLAY___ absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <UIOverlay/>
      </div>
    </div>
  );
}

