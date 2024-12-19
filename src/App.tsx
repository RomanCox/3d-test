import cls from './App.module.scss'
// import {VideoPlayer} from "./VideoPlayer/VideoPlayer.tsx";
import {VideoPlayer} from "./VideoPlayer/VideoPlayer1.tsx";

export const App = () => {

  return (
    <div className={cls.container}>
      <VideoPlayer />
    </div>
  )
}
